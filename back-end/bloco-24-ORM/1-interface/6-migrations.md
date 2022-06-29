# Migrations
Uma migration é uma forma de versionar o schema do banco de dados. Ou seja, cada migration conterá um pedaço de código que representa o histórico de alterações feitas no nosso banco de dados.


## Exemplo prático
Imagine o seguinte: você escreve um código definindo como um banco de dados deve ser criado e esse código fica salvo num arquivo na pasta migrations. Após um tempo, uma atualização é feita e uma coluna é acrescentada em uma tabela.

O que você faz?

Você vai escrever o código em outro arquivo para acrescentar essa coluna, certo? 

Pense que, cada arquivo será marcado com uma estampa datetime, então ao longo do tempo esse código vai empilhando dezenas, às vezes centenas, de arquivos. Cada um desses arquivos marca uma versão do banco de dados e o seu histórico de mudanças e evoluções.

Quem clona um projeto pela primeira vez roda suas migrations para configurar o banco de dados no formato mais recente enviado para master, sem ter que fazer mais nada. Aí sim é possível trabalhar localmente no banco de dados da aplicação sem medo de ele ser diferente da versão mais nova que encontramos na master.

Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como `Up` e `Down`.
- `Up` - executa mudanças no banco.
- `Down` - reverte essas mudanças.


## Configurando MIGRATION
```js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

- Agora vamos mexer apenas dentro das funções `up` e `down`, como dito anteriormente. Ambas as funções recebem dois parâmetros: um é o `queryInterface`, e o outro é o `Sequelize`. Ambos os parâmetros são objetos que armazenam dados e operações. 
  - o objeto `queryInterface` - é usado pela biblioteca para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando.
  - O objeto `Sequelize` - armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.
- Quando rodamos *npx sequelize model:generate --name User --attributes fullName:string*, foram criados os campos id, fullName, createdAt e updatedAt já foram adicionados na migration pelo próprio Sequelize.
- Caso seja necessário desfazer essa operação, o código vai apenas apagar a tabela. Assim escrevemos uma migration perfeitamente reversível!
- Vamos adicionar uma coluna de email na migration da tabela Users:
```js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      // adicionamos um novo campo 'email' como foi feito no model !
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

## Com a migration criada, basta executarmos o seguinte comando pelo CLI:
```
npx sequelize db:migrate
```

## Para reverter uma migration:
```
npx sequelize db:migrate:undo
```


## Criar uma nova migration para alterar uma tabela já existente**
Imagine agora, com base no modelo User, se for preciso salvar o telefone do usuário. O que pode vir à mente é que basta adicionar o novo atributo no modelo e na migration, como fizemos com o atributo email anteriormente, correto?

❌Errado, essa é uma prática que não é escalável! Imagine que foi feito um deploy do seu código e a migration foi usada para criar o banco em ambiente de produção. Nesse caso, você teria que rodar o comando db:migrate:undo e recriar o banco para executar o comando db:migrate, para então recriar uma tabela. O problema disso é que ao rodar o undo você perde todos os dados salvos anteriormente na tabela, e isso é uma coisa que jamais deve ser feita. 

✔️ A resposta certa é: criar uma nova migration que permita alterar a tabela. Para isso, o objeto `queryInterface` possui funções específicas, que permitem **criar** uma nova coluna, **remover** uma coluna ou mesmo **mudar** o tipo de uma coluna que já existe. Nesse caso, o **queryInterface abstrai o que a função ALTER TABLE faz no SQL**.


## Para criar uma outra migration para adicionar uma coluna
Nesse caso adicionar uma coluna chamada phone na tabela users
```
npx sequelize migration:generate --name add-column-phone-table-users
```

- Com isso, um novo arquivo `XXXXXXXXXXXXXX-add-column-phone-table-users.js` será criado na pasta migration contendo o seguinte código:
```js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
```

- Esse código representa o esqueleto da migration criada. Assim, podemos inserir as funções:
  -  `queryInterface.addColumn()` no escopo `Up` para ACIDIONAR uma nova coluna à tabela Users, e;
  -  `queryInterface.removeColumn()` no escopo `Down` para REMOVER a nova coluna da tabela.
```js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phone_num', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};
```

Em seguida rodamos o comando abaixo para executar a nossa nova migration:
```
npx sequelize db:migrate
```

- Também devemos alterar o model user.js para incluir a nova coluna phone_num da seguinte forma:
```js
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  phone_num: DataTypes.STRING, // aqui inserimos o datatype da coluna criada
  });

  return User;
};
```

Pronto! Conseguimos criar uma migration para adição da coluna phone_num na tabela Users. Desta maneira, se outra pessoa for alterar este projeto em outra máquina, ela pode executar as migrations e atualizar o banco de dados local com as modificações feitas por você!

> além de adicionar ou remover colunas, o objeto `queryInterface` também permite que você altere a estrutura de uma coluna, como seu tipo, valor default, entre outros detalhes, assim como o ALTER TABLE também permite.
