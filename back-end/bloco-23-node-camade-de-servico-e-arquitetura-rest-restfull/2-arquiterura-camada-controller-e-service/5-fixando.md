# Fixando
- Vamos criar os arquivos abaixo numa pasta chamada hello-msc:
```json
// hello-msc/package.json

{
  "name": "hello-msc",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "Tryber",
  "license": "GPL-3.0",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-rescue": "^1.1.31",
    "mysql2": "^2.2.5",
    "nodemon": "^2.0.7"
  }
}
```

Perceba que há duas dependências a mais no `package.json`, o `express-rescue` e `nodemon`:
- `express-rescue`
  - garante que todos os erros assíncronos sejam passados para sua pilha de manipuladores de erros.
- `nodemon`
  - é uma ferramenta que reinicia automaticamente a aplicação `node` quando mudanças de arquivo no diretório são detectadas.

Assim como mostra o exemplo abaixo:
```js
// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Pessoa autora criada com sucesso! ' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
```

### Agora vamos criar uma pasta `models` e dentro dela os seguintes arquivos:
```js
// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'model_example',
  });

module.exports = connection;
```

### Para criarmos o `banco de dados`, usaremos o script abaixo:
```js
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE IF NOT EXISTS authors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    middle_name VARCHAR(100)
);
```

### Agora, vamos retornar para a construção da nossa API:
```js
// hello-msc/models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
  }));

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return serialize(authors);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors 
    WHERE id = ?
  `;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

module.exports = {
  getAll,
  findById,
  isValid,
  createAuthor,
};
```

### Vamos executar a `npm install` dentro da pasta `hello-msc`, para instalarmos as dependências.
> Observação: Crie a pasta **services** e dentro dela o arquivo **Authors.js**, para onde transferiremos tudo aquilo que *NÃO precisa estar no model*, como as funções `getNewAuthor` e `isValid`.

> O objetivo é que na camada de `services` estejam os métodos que servirão como intermediários entre o `index.js` e as requisições ao banco de dados da camada de `modelo`.
```js
// services/Authors.js

const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

module.exports = {
  getAll,
  findById,
};
```

### Agora, vamos refatorar nossa função `createAuthor`, pois a responsabilidade de implementar o método `isValid` não é mais do `model`.
> Iremos fazer no `service` a `VALIDAÇÃO` das informações recebidas na função e não mais no `index.js.`
```js
// services/Authors.js

// const Author = require('../models/Authors');

// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof middleName !== 'string') return false;

//   return true;
// };

// const getAll = async () => {
//   const authors = await Author.getAll();

//   return authors.map(getNewAuthor);
// }

// const findById = async (id) => {
//   const author = await Author.findById(id);

//   return getNewAuthor(author);
// };

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  await Author.createAuthor(firstName, middleName, lastName);

  return true;
};

// module.exports = {
//  getAll,
//  findById,
  createAuthor,
// }
```


### Agora vamos alterar o `index.js` para utilizar o serviço;
> Precisaremos fazer algumas alterações no `index.js` para lidar com as implicações do uso da camada de serviço. Aqui vamos retirar a chamada do `model` e passar a chamar o `service`.
```js
// index.js

// const express = require('express');
// const bodyParser = require('body-parser');

const Author = require('./services/Authors');

// const app = express();

// app.use(bodyParser.json());
// app.get('/authors', async (_req, res) => {
//   const authors = await Author.getAll();
//   res.status(200).json(authors);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;
//   const author = await Author.findById(id);
//   if (!author) return res.status(404).json({ message: 'Author not found' });
//   res.status(200).json(author);
// });

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
});

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
```


### Vamos alterar mais uma vez o método `createAuthor`, para que ele retorne o autor criado e não apenas true.
```js
// services/Authors.js

// const Author = require('../models/Authors');

// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof middleName !== 'string') return false;

//   return true;
// };

// const getAll = async () => {
//   const authors = await Author.getAll();

//   return authors.map(getNewAuthor);
// };

// const findById = async (id) => {
//   const author = await Author.findById(id);

//   return getNewAuthor(author);
// };

// const createAuthor = async (firstName, middleName, lastName) => {
//   const validAuthor = isValid(firstName, middleName, lastName);

//   if (!validAuthor) return false;

  const [author] = await Author.createAuthor(firstName, middleName, lastName);

  return getNewAuthor({
    id: author.id,
    firstName,
    middleName,
    lastName,
  });
// };

// module.exports = {
//   getAll,
//   findById,
//   createAuthor,
// }
```


- Agora que já refatoramos as camadas de `model` e `service`, vamos para a última etapa.


### Vamos criar a pasta `controllers` e, dentro dela, o arquivo **Authors.js**.
Nesse arquivo, vamos implementar a lógica para realizar todas as operações que nossa aplicação realiza até agora, retirando do `index.js` essa responsabilidade de lidar com os *middlewares*.
```js
// controllers/Authors.js

const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
```

São necessários alguns ajustes no `index.js`, para que ele:
- Chame agora a camada de `controller` e NÃO MAI A CAMADA DE `SERVICE`;
- Cada rota referencie a função correta do `controller`.

```js
// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Authors');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
```


### E por último vamos *remover* a função `isValid` da camada de `model`, deixando-a assim:
```js
// hello-msc/models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora
const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
  }));

// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return serialize(authors);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query = `
    SELECT id, first_name, middle_name, last_name 
    FROM model_example.authors 
    WHERE id = ?
  `;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName })];
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
```


Utilizando as três camadas, temos maior facilidade em realizar alterações nessa aplicação, visto que provavelmente ela irá crescer, assim como a maioria das aplicações que construimos.

O próximo passo é acrescentar `VALIDAÇÕES` para garantir o melhor funcionamento da nossa aplicação.
