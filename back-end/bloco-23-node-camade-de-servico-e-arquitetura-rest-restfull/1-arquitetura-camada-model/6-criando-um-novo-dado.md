# Criando uma nova pessoa autora
Primeiro, vamos adicionar dois métodos no nosso model `Author`.
```js
// models/Author.js

// const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora

// const getNewAuthor = (id, firstName, middleName, lastName) => {
			// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
			// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
// const fullName = [firstName, middleName, lastName]
// 	.filter(Boolean)
// 	.join(' ');

//   return {
// 	id,
// 	firstName,
// 	middleName,
// 	lastName,
// 	fullName,
//   };
// };

// Converte o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
// 	id: authorData.id,
// 	firstName: authorData.first_name,
// 	middleName: authorData.middle_name,
// 	lastName: authorData.last_name,
// });

// Busca todas as pessoas autoras do banco.

// const getAll = async () => {
// 	const [authors] = await connection.execute(
// 		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
// 	);
// 	return authors.map(serialize).map(getNewAuthor);
// };

//
// Busca uma pessoa autora específica, a partir do seu ID
// @param {String} id ID da pessoa autora a ser recuperado
//
// const findById = async (id) => {
// const [
// 	authorData,
// 	] = await connection.execute(
// 		'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
// 		[id],
// 	);

// if (!authorData) return null;

// const { firstName, middleName, lastName } = authorData.map(serialize)[0];

// return getNewAuthor({ id, firstName, middleName, lastName });
// };


const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

// module.exports = {
// 	getAll,
// 	findById,
		isValid,
		create,
// };
```

- `isValid` é uma função que retorna um `boolean` indicando se os dados são válidos,
  - checando se `firstName` e `lastName` são strings não vazias, e 
  - se `middleName`, caso seja informado, é uma string.
- `create` é uma função que recebe `firstName`, `middleName` e `lastName` e salva uma pessoa autora no banco.

Como agora teremos requisições `POST`, precisaremos fazer o **parsing** do corpo da requisição. O *middleware* `body-parser` é capaz de fazer isso automaticamente.
```
npm i body-parser
```


```js
// const express = require('express');
const bodyParser = require('body-parser');

// const Author = require('./models/Author');

// const app = express();

app.use(bodyParser.json());
// ou app.use(express.json());

// app.get('/authors', async (_req, res) => {
// 	const authors = await Author.getAll();
//
// 	res.status(200).json(author);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// 	console.log(`Ouvindo a porta ${PORT}`);
// });
```

A *rota* `POST /authors` extrai as informações da pessoa autora que chegam em `req.body` e verifica se os dados enviados são válidos.

Caso não sejam, o *endpoint* retorna um `JSON` com uma mensagem informando o que houve, juntamente com o `status 400`. 

Caso os dados sejam válidos, pede ao modelo para criar uma nova pessoa autora e retorna um `JSON` com uma mensagem indicando que a pessoa autora foi criada com sucesso.
