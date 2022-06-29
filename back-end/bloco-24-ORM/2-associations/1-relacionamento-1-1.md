# Relacionamentos 1:1
Quando a relação entre as tabelas é de um para um.

Tabela Employees
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Employees');
  },
};
```

Tabela Addresses
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE', // atualiza um usuario
        onDelete: 'CASCADE', // exclui um usuario
        field: 'employee_id',
        references: {
          model: 'Employees', // Indica qual tabela nossa foreign key está referenciando
          key: 'id', // Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
```

Repare que, agora, temos algumas informações novas sendo passadas para o Sequelize no momento de adicionar a coluna. Esses dados informam ao Sequelize que aquele campo deve ser uma `_foreign key_`. Vamos passar por cada um deles:
- `references.model`: Indica qual tabela nossa foreign key está referenciando.
- `references.key`: Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
- `onUpdate` e `onDelete`: Configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.

Essa migration cria uma foreign key na tabela Addresses, que relaciona o campo employee_id dessa tabela ao campo id da tabela Employees.

# Relacionamentos 1:1
Quando a relação entre as tabelas é de um para um.

Tabela Employees
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Employees');
  },
};
```

Tabela Addresses
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE', // atualiza um usuario
        onDelete: 'CASCADE', // exclui um usuario
        field: 'employee_id',
        references: {
          model: 'Employees', // Indica qual tabela nossa foreign key está referenciando
          key: 'id', // Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
```

Repare que, agora, temos algumas informações novas sendo passadas para o Sequelize no momento de adicionar a coluna. Esses dados informam ao Sequelize que aquele campo deve ser uma `_foreign key_`. Vamos passar por cada um deles:
- `references.model`: Indica qual tabela nossa foreign key está referenciando.
- `references.key`: Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
- `onUpdate` e `onDelete`: Configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.

Essa migration cria uma foreign key na tabela Addresses, que relaciona o campo employee_id dessa tabela ao campo id da tabela Employees.
