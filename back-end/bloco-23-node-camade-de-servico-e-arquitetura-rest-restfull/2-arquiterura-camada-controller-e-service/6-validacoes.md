# Validações

## Inserindo validações na aplicações
Esse tipo de regra de negócio, que costuma ser tratada pelo service.

Em nossa pasta `services` existe o arquivo `Authors.js` e nós vamos alterá-lo, cole o código abaixo no arquivo:
```js
// services/Authors.js

const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const createAuthor = async (firstName, middleName, lastName) =>
  Author.createAuthor(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  createAuthor,
};
```

Note que, até este momento, nosso service realiza todas as três operações que o model também faz, sem utilizar nenhuma lógica adicional. Em cada função, nós apenas retornamos uma chamada para aquela mesma função dentro do `model`.

Chegou a hora de mudarmos isso e vamos começar a refatoração pelo método `createAuthor`. Porém, antes de tudo, precisamos de uma função no nosso model que nos permita buscar autores pelos três nomes. Isso vai permitir a implementação da regra "Uma pessoa autora com mesmo nome completo não pode ser cadastrado duas vezes."
Altere o arquivo `hello-msc/models/Author.js` da seguinte maneira:
```js
// hello-msc/models/Author.js

/* ... */

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors
  `;

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
  } else {
    query += 'WHERE first_name = ? AND last_name = ?';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

// module.exports = {
//   getAll,
//   findById,
//   isValid,
//   createAuthor,
    findByName
// };
```


### Agora, com essa função pronta, precisamos modificar o `service` para que ele a utilize e aplique nossa *regra de negócio*. Para isso, devemos alterar o arquivo `services/Authors.js` da seguinte forma:
```js
// services/Authors.js

/* ... */

const createAuthor = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  return Author.createAuthor(firstName, middleName, lastName);
};

/* ... */
```

> Observação: Lembre-se que a camada de *model* também poderia implementar essa regra de negócio mais complexa, entretanto, com o tempo, a camada acumularia diversas funções tais como: `validar dados e regras, montar queries complexas e comunicar-se com o banco`. Deixando as camadas com suas responsabilidades distintas, permitimos que tanto *model* quanto *service* tenham "espaço para crescer".

Existe também uma outra regra que é de responsabilidade do `service` e que, até o momento, tem ficado no `middleware`: **identificar e gerar erros**.


## Gerar erros? Nosso objetivo não é evitá-los?
> Devemos codificar nossas aplicações de forma que erros não previstos sejam evitados ou contornados. No entanto, existem erros que derivam de regras de negócio que não foram atendidas. Vamos chamar esses erros de **Erros de Domínio**. Numa aplicação em camadas, eles servem principalmente para que *camadas inferiores* possam *informar* *camadas superiores* sobre erros ou falhas que, por sua vez, devem ser retornadas a quem fez a chamada.

No nosso caso, temos um exemplo de **erro de domínio**, com o código `alreadyExists`. O `service` retorna esse objeto de erro para que o `controller` saiba que a pessoa autora *não foi criada com sucesso*. Com esse objeto de erro, o controller saberá também que não deve enviar código 200 na resposta da requisição.

Outra situação conhecida, e que deve ser notificada pelo service, é quando um item buscado não é encontrado. Note, na linha 23 do `index.js`, que quem faz esse *tratamento* até agora é o `middleware`.


### Consertando o problema
Vamos alterar o arquivo `services/Authors.js`
```js
// hello-msc/services/Authors.js

/* ... */

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return author;
};

/* ... */
```
Agora sim o `service` está *comunicando* ao `controller` toda vez que algum *erro de domínio* acontece.

A camada de `controllers` é responsável por *RECEBER* e *TRATAR* as `requests` e o `express`, é composto majoritariamente de middlewares. Sendo assim, precisamos trazer os `middlewares` do `index.js` para construirmos nosso `controller`, alterando-os para que utilizem o `service` ao invés do `model`.

O endpoint `GET /authors` não mudou, mas agora vamos para o próximo `GET /authors/:id`, este irá mudar, observe o código abaixo:
```js
// controllers/Author.js

/* ... */

const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  return res.status(200).json(author);
};

/* ... */
```


Observe que o controller verifica se existe um erro e, se existir, chama next(author.error). Isso faz com que esse objeto de erro vá parar no próximo middleware de erro registrado.

> Observação: Podemos utilizar um middleware de erro centralizado também para nossos erros de domínio. Porém, veremos como fazé-lo mais adiante.

Agora, vamos trazer a terceira e última função: a criação de uma nova pessoa autora. Aqui veremos mais uma funcionalidade do controller em ação: a validação dos dados da request.

### Você pode estar se perguntando: "Por que não validamos no model?".
Resposta: A validação no model pode trazer algumas dificuldades à medida que nossa aplicação escala, por exemplo:
- Nem sempre queremos validar os mesmos campos (uma request de edição pode pedir dados diferentes de uma request de criação, por exemplo);
- Estamos delegando mais uma responsabilidade para o model: além de se comunicar com o banco, ele também terá que fazer a validação de requests;
- Ao validar no model, estamos validando os dados no final da request, ou seja, na saída. Ao validar no controller, estamos validando esses dados na entrada, garantindo que não vamos realizar nenhum processamento desnecessário, utilizando dados que não são válidos.

No nosso `service` possui um **método** `getAll`, o qual **NÃO FAZ NENHUMA VALIDAÇÃO OU GERAÇÃO DE ERRO**. Ele apenas realiza a *chamada* do `model` e *envia essa resposta* para a `controller`.


## JOI - Bibioteca para geração de erros
```
npm i joi
```

```js
// controllers/Authors.js

const Joi = require('joi');
// const Author = require('../services/Authors');

/* ... */

const createAuthor = async (req, res, next) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  } = req.body;

  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, lastName }); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação da pessoa autora
  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // da nova pessoa autora
  return res.status(201).json(newAuthor);
};

/* ... */
```

Nosso controller está quase pronto, só falta "plugá-lo" no nosso app do express, no arquivo index.js, removemos a chamada ao service e adicionamos a chamada ao controller. Bora lá?
```js
// hello-msc/index.js

// const express = require('express');
// const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Authors');

// const app = express();

// app.use(bodyParser.json());

// app.get('/authors', rescue(Author.getAll));
// app.get('/authors/:id', rescue(Author.findById));
// app.post('/authors', rescue(Author.createAuthor));

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Ouvindo a porta ${PORT}`);
// });
```


## Tratamento de erros
A camada de controller deve converter o erro em um formato padronizado e enviá-lo, junto com o status code adequado, para o client que realizou a requisição. Para implementar esse comportamento, vamos criar um middleware de erro.

> Observação: Para esse exemplo, vamos criá-lo numa pasta `middlewares`, mas é comum que o middleware de erro seja criado como um `ErrorController`, dentro da pasta `controllers`. Não há nada de errado com essa abordagem, e as duas são formas válidas de implementar.
Vamos criar a pasta `middlewares` e, dentro dela, o arquivo `error.js`:
```js
// middlewares/error.js

module.exports = (err, req, res, _next) => {
  // Qualquer erro será recebido sempre por esse middleware, então a primeira coisa que fazemos
  // é identificar qual o tipo do erro.

  // Se for um erro do Joi, sabemos que trata-se de um erro de validação
  if (err.isJoi) {
    // Logo, respondemos com o status 400 Bad Request
    return res.status(400)
      // E com a mensagem gerada pelo Joi
      .json({ error: { message: err.details[0].message } });
  }

  // Caso não seja um erro do Joi, pode ser um erro de domínio ou um erro inesperado.
  // Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    alreadyExists: 409, // Erros do tipo `alreadyExists` retornam status 409 Conflict
    // Podemos adicionar quantos códigos novos desejarmos
  };

  // Buscamos o status adequado para o erro que estamos tratando.
  // Caso não haja um status para esse código, assumimos que é
  // um erro desconhecido e utilizamos o status 500 Internal Server Error
  const status = statusByErrorCode[err.code] || 500;

  // Por último, retornamos o status e a mensagem de erro para o client
  res.status(status).json({ error: { message: err.message } });
};
```


Conectando o middleware de erro no index da aplicação
```js
// hello-msc/index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const rescue = require('express-rescue');

// const Author = require('./controllers/Authors');
const errorMiddleware = require('./middlewares/error');

// const app = express();

// app.use(bodyParser.json());

// app.get('/authors', rescue(Author.getAll));
// app.get('/authors/:id', rescue(Author.findById));
// app.post('/authors', rescue(Author.create));

app.use(errorMiddleware);

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Ouvindo a porta ${PORT}`);
// });
```
