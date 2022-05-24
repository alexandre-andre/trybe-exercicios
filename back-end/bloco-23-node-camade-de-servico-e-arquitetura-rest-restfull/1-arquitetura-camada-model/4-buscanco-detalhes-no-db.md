# Buscando pelos detalhes de uma pessoa escritora
Vamos criar um **método** e um **endpoint** para obter os detalhes de uma pessoa escritora. A rota do endpoint é `/authors/:id`, onde `id` corresponde ao `id` da pessoa escritora.

No **model** `Author` crie o seguinte método:
```js
// models/Author.js
// const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora

// const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
			// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
			// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
// 	const fullName = [firstName, middleName, lastName]
// 		.filter(Boolean)
// 		.join(' ');
//
// 	return {
// 		id,
// 		firstName,
// 		middleName,
// 		lastName,
// 		fullName,
// 	};
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

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/

const findById = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
	const [ authorData ] = await connection.execute(query, [id]);

	if (authorData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	const { firstName, middleName, lastName } = authorData.map(serialize)[0];

	return getNewAuthor({
		id,
		firstName,
		middleName,
		lastName,
	});
};

// module.exports = {
// 	getAll,
	findById,
// };
```


```js
// index.js

// const express = require('express');

// const Author = require('./models/Author');

// const app = express();

// app.get('/authors', async (_req, res) => {
// const authors = await Author.getAll();
//
// res.status(200).json(authors);
// });

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// 	console.log(`Ouvindo a porta ${PORT}`);
// });
```

No `index.js`, registramos uma nova rota para obter os detalhes de uma pessoa autora, na qual adicionamos uma função para responder a requisições para essa rota. Ela funciona de forma muito semelhante a da rota `/authors`. A diferença é que ela **extrai o parâmetro `id` da URL** e o usa para consultar o `model` pela pessoa escritora requisitada. Caso o model não encontre uma pessoa autora, setamos o código de status para `404 (Not Found)` e retornamos um `JSON` com uma mensagem informando o que ocorreu.

No `model`, adicionamos o método `findById`. Esse método é muito semelhante a `getAll`. A grande diferença é que usamos o `where` na nossa `query` para *limitar* o escopo da busca à pessoa autora procurada. No entanto, em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática separar os valores da query. Fazemos isso usando `?` como parâmetros na string e usando, como segundo argumento, um `array` que contém os valores que devem substituir todos os `?` utilizados, na ordem.
