# Relacionamentos N:N
Esse tipo de relacionamento pode ser visto também como dois relacionamentos um para muitos (1:N) ligados por uma tabela intermediária, chamada de tabela de junção, a qual guarda as informações de como as tabelas se relacionam entre si.


## Representação de um banco N:N
Esse banco possui 3 tabelas: Users, Books e UserBooks. A tabela UserBooks possui um relacionamento N:N com as demais tabelas. Desta maneira, podemos inferir que:
- A tabela Users guarda as informações *de cada usuário*.
- A tabela Books guarda as informações *de cada livro*.
- A tabela UserBooks irá agir como uma *tabela de junção*, guardando a relação de quais pessoas usuárias possuem quais livros. 

Na tabela UserBooks, *um usuário pode possuir vários livros*, *enquanto um livro pode pertencer a várias usuários*. Cadastramos o livro uma única vez na tabela Books, assim como a pessoa usuária na tabela Users. Graças a essa tabela, um livro vai poder ser associado de forma livre a várias pessoas usuárias, assim como uma única pessoa usuária poderá ser associado a vários livros.

A tabela UserBooks possui dois campos compondo uma chave **primária composta** (*DICA: Database Design - Como modelar um banco de dados*), justamente para evitar a redundância dos dados, já que a tabela não pode receber um conjunto de valores repetido.


## Criando uma associação que passa por 3 tabelas
1. Vamos criar o model de Users:
```js
// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // de fine a model User
    userId: { type: DataTypes.INTEGER, primaryKey: true }, // coluna userId e suas configuracoes
    firstName: DataTypes.STRING, // tipo da dado da coluna
    lastName: DataTypes.STRING, // tipo da dado da coluna
    age: DataTypes.INTEGER, // tipo da dado da coluna
  },
  {
    timestamps: false, // bloqueia a criacao de createdAt e updatedAt
    tableName: 'Users', // vincula a migrations Users
    underscored: true, // permite a troca das coluna em camelCase para snake_case
  });

  return User;
};
```

2. Vamos ao model de Books:
```js
// models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Books',
    underscored: true,
  });

  return Book;
};
```

3. Vamos criar o model de UserBooks:
   - tabela de junção
```js
// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook', // define a model UserBook
    {}, // como eh composta soh de chaves primarias, inicia como um obj vazio 
    { timestamps: false }, // bloqueia a criacao de createdAt e updatedAt
  );

  UserBook.associate = (models) => { // associa a model UserBook as models ...
    models.Book.belongsToMany(models.User, { // models.Book - pertence a muitas - models.User 
      as: 'users', // tem de passar o alias da tabela referenciada  
      through: UserBook, // Refere-se como tabela de associação
      foreignKey: 'book_id', // Refere-se ao model em que chamamos belongsToMany
      otherKey: 'user_id', // Refere-se ao model com o qual estamos criando a associação
    });
    models.User.belongsToMany(models.Book, { // associa a model UserBook as models ...
      as: 'books', // alias da model referenciada 
      through: UserBook, // Refere-se como tabela de associação
      foreignKey: 'user_id', // Refere-se ao model em que chamamos belongsToMany 
      otherKey: 'book_id', // Refere-se ao model com o qual estamos criando a associação
    });
  };

  return UserBook;
};
```

- `UserBooks` - tabela de **associação**, o Sequelize já entende que esse model precisa ter os IDs das duas tabelas sendo associadas.
- `alias` - Daquela associação, na chave as
- `belongsToMany` -  Esse relacionamento cria um relacionamento do tipo `N:N`
- `through` - Refere-se como tabela de associação.
- `foreignKey` - Refere-se ao model em que chamamos belongsToMany
- `otherKey` - Refere-se ao model com o qual estamos criando a associação

Para testar a aplicação, você devemos fazer as devidas alterações nos controllers, criar as migrations e os seeders.


## Para criar as migrations
```
npx sequelize migration:generate --name create-books
npx sequelize migration:generate --name create-users
npx sequelize migration:generate --name create-user-books
```


### Migration "books"
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'book_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_pages',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};
```


### Migration "users"
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
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
    await queryInterface.dropTable('Users');
  },
};
```

## Criando uma chave primária composta em uma Migration do Sequelize
A forma mais simples de fazer isso é indicar quais campos farão parte dessa chave composta, utilizando o parâmetro `primaryKey`, nesses campos!


### Migration "user-books"
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users', // refere-se a migration Users
          key: 'user_id', // refere-se a chave primaria user_id
        },
        onUpdate: 'CASCADE', // altera em modo castaca onde existir essa chave 
        onDelete: 'CASCADE', // altera em modo castaca onde existir essa chave
        primaryKey: true, // eh uma primary key
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books', // refere-se a migration Books
          key: 'book_id', // refere-se a chave primaria book_id 
        },
        onUpdate: 'CASCADE', // altera em modo castaca onde existir essa chave
        onDelete: 'CASCADE', // altera em modo castaca onde existir essa chave
        primaryKey: true, // eh uma primary key
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};
```

O Sequelize vai interpretar mais de um campo com primaryKey, como sendo a parte de uma chave primária composta, impedindo que combinações repetidas possam ser inseridas nessa tabela! Esses campos também são chaves estrangeiras, dada suas referencias (references) a outras tabelas.

Depois disso, teremos que criar as `seeds` com informações para podermos, enfim, testar a nova `association`:

Para evitar problemas com a nomenclatura dos arquivos de `seeds`, rode os comandos a seguir separadamente.
```
npx sequelize seed:generate --name books
npx sequelize seed:generate --name users
npx sequelize seed:generate --name user-books
```


## Seed "books"
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        { name: 'Livro A', release_year: 2020, number_pages: 111 },
        { name: 'Livro B', release_year: 2019, number_pages: 222 },
        { name: 'Livro C', release_year: 2018, number_pages: 333 },
        { name: 'Livro D', release_year: 2017, number_pages: 444 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
```


## Seed "users"
```js
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
```


## Seed "user-books"
```js
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('UserBooks',
      [
        { user_id: 1, book_id: 1 },
        { user_id: 1, book_id: 3 },
        { user_id: 2, book_id: 1 },
        { user_id: 2, book_id: 2 },
        { user_id: 3, book_id: 1 },
        { user_id: 3, book_id: 2 },
        { user_id: 3, book_id: 3 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UserBooks', null, {});
  },
};
```


## Executa as migrations e as seeds:
```
npx sequelize db:migrate
npx sequelize db:seed:all
```


## index.js:
```js
const { Book, User } = require('./models');
// ...
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
// ...
```

Nota: a propriedade `through: { attributes: [] }` deve estar presente, pois sem ela, em cada book, apareceriam todos seus respectivos users.