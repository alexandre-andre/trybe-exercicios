# Model
É a camada onde manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.

Os dados que a aplicação utiliza podem estar armazenados em um banco de dados, acessados através de uma API externa, arquivos ou outros dispositivos de armazenamento.

Ele é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados. 

As demais camadas não devem saber se o banco utilizado é `MySQL` ou qualquer outro banco (`PostgreSQL`, `MongoDB`, etc) ou se sequer há um banco de dados. O `model` se encarrega de fazer o mapeamento dos dados armazenados para as entidades existentes no domínio do seu negócio.

É no `model` que verificaremos se, ao criar uma nova pessoa usuária, por exemplo, são válidas as regras de negócio definidas, ou por exemplo, se a pessoa que está tentando apagar um post tem permissão para tal.

O model não pode ter conhecimento das demais camadas. Isso facilita a manutenção do código, pois alterações em outras camadas não terão impacto nos seus modelos.

Outro benefício é uma maior reusabilidade de código. Com uma camada de modelo bem definida, por exemplo, nós poderíamos criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.

Vamos à uma rápida referência, sem muitos detalhes, para fixar melhor o conceito:
```js
// userModel.js

const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
	return db.findOne({ username })
	.then(result => result || null);
}
```

Agora podemos utilizar esse arquivo em qualquer lugar onde precisemos de um usuário. Por exemplo, em uma interface de linha de comando:
```js
// cli.js
const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
  const userName = readline.question('Digite seu nome de usuário');
  const user = await userModel.getUser(userName);

  if (!user) return console.log('Usuário não encontrado');

  console.log('Aqui estão os dados do usuário:');
	console.log(user);
}
start();
```

Ao mesmo tempo, podemos utilizar nosso `model` em um *middleware*:
```js
// getUserMiddleware.js

const userModel = require('./userModel');

function getUserMiddleware(req, res, next) {
  const { username } = req.body;

  try {
    const user = await userModel.getUser(username);

    if (!user) return res.status(404).json({ message: 'user não encontrado' });

    return res.status(200).json(user);
  } catch(e) {
    res.status(500).json({ message: 'algo deu errado' });
  }
}
```

Dessa forma, caso os usuários passem a ser armazenados em outro lugar, como num *arquivo*, ou num outro *banco de dados*, só precisaremos alterar o arquivo `userModel.js` e, automaticamente, tudo volta a funcionar.
