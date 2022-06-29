# Model
Dentro da pasta `models` criada, existe um arquivo `index.js`. Este arquivo é gerado automaticamente pelo `Sequelize` e possui um papel muito importante: estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado. ⚠️Importante: não apague este arquivo, ele é necessário para a operação do `Sequelize`.

Os `models` são a essência do `Sequelize`. Um model é uma abstração que representa uma linha na tabela no banco de dados e diz ao `Sequelize` várias coisas sobre essa entidade, como o *nome* e quais *atributos (colunas)* ela possui (e seus tipos de dados).


## O model pode ser definido de duas formas:
1. Chamando pela *função* `sequelize.define(modelName, attributes, options)`
2. Estendendo Model como uma *classe* e chamando `init(attributes, options)`
   - Essa segunda forma é a padrão para utilização do Sequelize, sendo gerada automaticamente quando usamos os comandos do `CLI`. 
   - Ela é utilizada em um paradigma Orientado a Objetos.


## Para criar um model 
Além de gerar o model, esse comando também gera uma migration que vai criar a tabela no banco de dados.
```
npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
```

- O parâmetro `--name` se refere ao *nome da tabela*, **no SINGULAR**, pois está relacionado a UMA unidade dos dados, como UMA linha no banco de dados ou UM objeto no código JavaScript;
- O parâmetro `--attributes` se refere ao *nome das colunas* e os tipos de dados que elas contêm. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo model.js gerado e na migration equivalente a este model.


## Exemplo prático
O que fazemos primeiro é **gerar um model** que vai representar uma *Instância de usuário*, ou uma *linha na tabela Users* no banco.
```
npx sequelize model:generate --name User --attributes fullName:string
```

Depois de rodar este comando é criado um arquivo `user.js` na pasta `model`, e na pasta `migration` foi criado o arquivo `20210310124202-create-user.js` (os números, no início do nome do arquivo, significam a data e a hora de criação dele, seguindo o formato yyyy-MM-dd:hh:mm:ss).
```js
// MODELO DE CLASSE
// `models`/user.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The ``models`/index` file will call this method automatically.
     */
    static associate(`models`) {
      // define association here
    }
  };
  User.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```

```js
// MODELO DE FUNÇÃO
// `models`/user.js
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
```

- O nome do arquivo **MODEL** é `user.js`;
- O nome da função **MODEL** definida está no **singular** `User`;
- Na **MIGRATION** a tabela foi nomeada no **plural** como `Users`.