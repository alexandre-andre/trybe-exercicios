# Testes
Para testarmos os models criados com o Sequelize, seguiremos os mesmos conceitos vistos anteriormente: vamos isolar as operações de IO e utilizaremos bibliotecas específicas para nos ajudar com os stubs e asserções.
- Antes de começar a realizar os testes, vamos instalar nossas dependências de desenvolvimento :
```
npm i mocha chai sinon chai-http -D
```

- Agora vamos alterar a linha abaixo em nosso package.json para executar nossos testes com o comando `npm test`:
```js
"scripts": {
  ...
  "test": "mocha ./tests/**/*$NAME*.test.js --exit"
},
```

Para testar um model com Sequelize, podemos utilizar bibliotecas específicas para nos ajudar nessa tarefa. Uma bastante utilizada é a `Sequelize Test Helpers`. Vamos ver um exemplo de como podemos utilizá-la:
```js
// tests/unit/models/user.test.js
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});
```
