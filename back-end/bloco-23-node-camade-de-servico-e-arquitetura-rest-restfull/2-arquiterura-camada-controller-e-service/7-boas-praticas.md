# Boas Práticas em Arquitetura de Software

### 1 - Pensar antes de escrever código!
Primeiro entender qual é o problema que deverá ser resolvido e então, a partir disto, começar a pensar em uma solução em nível de arquitetura.

Imagine o seguinte cenário trazido pelo cliente: 
> "Quero criar uma aplicação que mostra todas as fotos que as pessoas tiraram com base na localização. As versões mobile native e web serão parecidas, mas apenas a mobile poderá tirar fotos."

Ok! Pensando que vamos ter múltiplos clientes com funcionalidades semelhantes, faz sentido termos uma API, certo?

Teremos que subir as fotos em algum serviço de hospedagem e salvaremos no banco apenas a URL gerada após o upload. Nesse caso, devemos ter uma camada de serviço que vai orquestrar essa parte de hospedagem.
> Observação: Esse exemplo é utilizado de modo que você reflita sobre a importância de pensar em qual arquitetura fará mais sentindo quando tiver um problema para resolver.


## 2 - Pensar em Componentes
A intenção é que nossas aplicações sejam construídas com pequenos pedacinhos de código sem dependências entre si, ou seja, o que já faziamos em React também se aplica, neste contexto, a uma API.

Dentro das suas camadas, mantenha cada `CONTROLLER`, `MODEL` e `SERVICE` pequeno e o mais desacoplado possível das outras partes. Faça com que eles se comuniquem somente através de interfaces muito bem definidas, não autorizando que um componente acesse diretamente o que está dentro de outro.
> Essa prática facilita na hora de fazer manutenção, reutilização e testar o código.


## 3 - Manter as pastas organizadas
Vamos citar duas maneiras: **domínio/correlação e papel técnico**.
- Por **domínio/correlação**: nós mantemos todos os arquivos que têm relação com um `Author`.

Por exemplo, na mesma pasta, independente da responsabilidade de cada arquivo:
```js
└── author
│   ├── authorController.js
│   ├── authorService.js
│   └── authorModel.js
└── book
│   └── bookController.js
│   └── bookService.js
│   └── bookModel.js
```


- Por **papel técnico**: Todos os controllers em uma pasta, todos os services em outra e por aí vai.

É como temos exemplificado até agora:
```js
└── controllers
│   ├── authorController.js
│   └── bookController.js
└── services
│   ├── authorService.js
│   └── bookService.js
└── models
│   ├── authorModel.js
│   └── bookModel.js
```
> Observação: Muitas vezes, você vai utilizar um framework em que essa decisão já foi tomada. Nesse caso, siga com o padrão.


## 4 - Manter o Express o **mais longe possível**.
Devemos criar fronteiras bem definidas entre o Express e o "resto da aplicação". Isso significa manter os objetos `request` e `response` dentro do escopo do `CONTROLLER` e **NUNCA** passá-los inteiros para as partes do app que cuidam da lógica de negócio.

Tomando essa simples precaução, você evita a criação de `MOCKS` para esses objetos quando escrever *TESTES UNITÁRIOS*. Por exemplo: se o `MODEL` precisa apenas dos campos `user` e `password` para fazer o login de alguém, não é necessário passar o objeto `request` e mandar todos os *headers* que vieram na requisição.

Exemplo:
```js
const userController = async (req, res) => {
  try {
    // RUIM 😧
    await UserService.create(req);

    // BOM! 😊
    const { email, password } = req.body;
    await UserService.create(email, password);

    res.send({ message: 'Tudo certo!' });
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};
```
Usando essas fronteiras como exemplo, **nada além da camada de controle deveria saber que o Express existe**.


## 6 - Manter sua configuração separada (e segura)
O ideal é usar variáveis de ambiente para controlar coisas relacionadas à configuração geral da sua aplicação (em qual banco se conectar, para qual URL apontar etc).

Variáveis de ambiente são aquelas que podem ser definidas no sistema operacional e, portanto, podem ser diferentes para cada ambiente (computador).

Por exemplo, *no computador local, a URL do banco é uma*, mas, *no servidor da aplicação, a URL do banco é outra*. Para que possamos fazermos isso funcionar, podemos aplicar uma variável de ambiente chamada `DB_URL` e utilizar valores diferentes para ela no servidor e na sua máquina local.


### Como eu acesso essa variável no código?"
O ambiente Node tem uma variável global que se chama `process`; dentro dela temos um objeto `env` que armazena os valores de todas as variáveis de ambiente definidas no sistema operacional.

Podemos setar variáveis de ambiente pelo terminal:
```
MYSQL_HOST=localhost node index.js
```

```js
// index.js

console.log(process.env.MYSQL_HOST) // localhost
```

> Observação: No entanto, uma forma mais eficiente quando temos muitas variáveis, é criarmos um arquivo `.env` na raiz do projeto e usar a biblioteca **`dotenv`, que basicamente pega o conteúdo desse arquivo e o deixa acessível via `process.env`**.
```
npm install dotenv
```

```
# .env
PORT=3000
MYSQL_HOST=localhost
MYSQL_DB_NAME=model_example
```

```js
// index.js

require('dotenv').config();
// ...
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Server listening on port 3000
```

```js
// models/connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: 'sua_senha',
    database: process.env.MYSQL_DB_NAME });

module.exports = connection;
```
> Não se esquecer de colocar o `.env` no `.gitignore`, para não versionarmos esse arquivo.

Dessa forma, as configurações da aplicação que podem mudar de acordo com o ambiente (ou até mesmo com o tempo), ficam separadas do código, que é o mesmo em qualquer ambiente.

Além disso, não estará mais adicionando dados sensíveis ao repositório, visto que o arquivo `.env` contém esses valores e não será versionado.
