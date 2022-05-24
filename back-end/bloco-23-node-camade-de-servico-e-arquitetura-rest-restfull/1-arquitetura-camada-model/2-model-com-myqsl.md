# Model com MySQL
## Criando e populando o banco de dados
Antes de mais nada, precisamos ter o `MySQL` instalado e configurado na nossa máquina.

Para utilizar o `MySQL` precisamos, primeiramente, criar nosso banco de dados, que será chamado `model_example`. Por enquanto, só teremos a tabela `authors`, com informações de pessoas escritoras. A tabela terá as seguintes colunas:
- Nome. Obrigatório;
- Nome do meio. Opcional;
- Sobrenome. Obrigatório;
- Data de nascimento. Opcional;
- Nacionalidade. Opcional;


Agora, utilizando o `MySQL Workbench` ou o console do `MySQL`, execute o script SQL abaixo para criar o banco, a tabela e popular o banco com nosso dados iniciais:
```sql
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	birthday DATE,
	nationality VARCHAR(100),
	PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
	('J.','R. R.','Tolkien','1892-01-03','britânico'),
	('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
	('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
	('Júlio',NULL,'Verne','1905-03-24','francês');
```

## Estabelecendo uma conexão com o banco
Com o banco criado e populado, vamos criar nosso projeto Node.js.

Comece criando uma nova pasta para conter o projeto. Dê o nome que você quiser à ela, mas, aqui, vamos chamá-la de model-example:
```
mkdir model-example
cd model-example
```

Agora, iniciamos um novo projeto Node.js, passando a flag -y para pular as perguntas e gerar um projeto com as opções padrão:
```
npm init -y
```

Para que possamos dar continuidade, precisamos, antes de mais nada, criar um servidor utilizando a biblioteca express, ela vai nos fornecer o que precisamos para rodar um servidor, criar rotas e utilizar nossa conexão com o banco. Instale o express rodando o comando abaixo:
```
npm install express
```

Após isso, na raiz do projeto, crie um arquivo chamado index.js e preencha-o com o código abaixo:
```js
// index.js

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
```

Em index.js, importamos o express e iniciamos uma nova aplicação. Porém, para que possamos nos comunicar com o MySQL, precisamos de um driver. Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. A escolha de qual driver utilizar depende tanto da linguagem quanto do banco de dados que você está utilizando. Aqui na Trybe, você vai utilizar o drive chamado mysql2. Instale-o executando o comando abaixo:
```
npm install mysql2
```

Agora, na raiz do projeto crie uma pasta models e, dentro dela, crie um arquivo connection.js e preencha-o com o código abaixo. Lembre-se de substituir os campos user e password pelo usuário e senha que você utiliza para acessar o banco:
```js
// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'senha123',
	database: 'model_example' });

module.exports = connection;
```

Primeiro, importamos o mysql do módulo `mysql2/promise`, assim utilizamos a versão mais atualizada do mysql2 em vez de usar a versão com callbacks.

O método `createPool` *cria uma pool de conexões com o banco de dados*. 
- A própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco. O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão. Entre as opções possíveis, estão:
    - `host`: local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost;
    - `user`: usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
    - `password`: senha do usuário especificado. Coloque '' se não houver senha para o usuário;
    - `database`: nome do banco com o qual queremos nos conectar;

O método `createPool` retorna um `objeto Pool` *representando uma sessão com o banco*.

Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, armazenamos nossa pool na variável `connection`.


## Criando o model
A primeira coisa que faremos é criar uma rota que retornará uma lista com os nomes de todas as pessoas autoras. **Queremos também que seja exibido o nome completo da pessoa escritora, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome**.

O `model` deverá expor alguma interface que seja capaz de buscar essa lista do banco de dados e retorná-la. Ele deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados. Ele também fará o mapeamento dos dados para um formato que seja mais adequado para o domínio da aplicação. Esse mapeamento pode envolver conversão de dados, renomear campos, esconder ou criar novos campos derivados dos dados existentes, por exemplo.

A camada de modelo pode ser implementada de várias formas. Aqui, vamos seguir esta abordagem:
- Haverá uma entidade chamada `Author` na aplicação;
- A entidade vai conter os campos `firstName`, `middleName` e `lastName`. Note que os nomes estão em `camelCase`, enquanto as colunas do banco estão em `snake_case`;
- No código, um objeto contendo os campos mencionados acima será utilizado para representar uma pessoa autora.
- Existirão funções para *ler* e *criar* pessoas escritoras do banco de dados;
- A rota só irá interagir com os dados através da interface do model `Author`.

Dando continuidade à nossa aplicação, crie o arquivo `Author.js`, dentro da pasta `models`. Adicione o código abaixo ao arquivo criado:
```js
// models/Author.js

const connection = require('./connection');

// Busca todas as pessoas autoras do banco.

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors;
};

module.exports = {
	getAll,
};
```

- O model `Author` exporta uma função `getAll`. Essa função retornará todas as pessoas autoras cadastradas no banco de dados.
- Utilizamos o método `execute` para fazer uma query mysql. 
  - Esse método retorna uma `Promise` que, quando resolvida, nos fornece um array com 2 campos: `[rows, fields]`. 
    - O *primeiro index* é onde está a *resposta* que desejamos (no caso o Authors) 
    - *no segundo* vêm algumas *informações extras* sobre a query que não iremos utilizar.

No exemplo, desconstruímos essa resposta utilizando `[authors]` que chega para nós da seguinte forma:
```js
// Conteúdo de authors
[
	{
		id: 1,
		first_name: 'George',
		middle_name: 'R. R.',
		last_name: 'Martin'
	},
	{
		id: 2,
		first_name: 'J.',
		middle_name: 'R. R.',
		last_name: 'Tolkien'
	},
	{
		id: 3,
		first_name: 'Isaac',
		middle_name: null,
		last_name: 'Asimov'
	},
	{
		id: 4,
		first_name: 'Frank',
		middle_name: null,
		last_name: 'Herbert'
	},
	{
		id: 5,
		first_name: 'Júlio',
		middle_name: null,
		last_name: 'Verne'
	}
]
```

Note que o retorno da consulta do banco não está no formato que desejamos (`camelCase`). Logo criaremos uma função para realizar essa conversão (`serialize`) e faremos a seguinte modificação no código para arrumar isso:
```js
// models/Author.js

//  const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// Busca todos os autores do banco.
// const getAll = async () => {
// 	const [authors] = await connection.execute(
// 		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
// 	);
		return authors.map(serialize);
// };

// module.exports = {
// 	getAll,
// };
```

Agora temos os campos no formato correto. E, como mencionado anteriormente, queremos o nome completo de autores em um campo da resposta, então vamos implementar uma função com essa finalidade (`getNewAuthor`).
```js
// models/Author.js

//  const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {

// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
	const fullName = [firstName, middleName, lastName]
		.filter(Boolean)
		.join(' ');

	return {
	id,
	firstName,
	middleName,
	lastName,
	fullName,
	};
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

//  // Busca todos os autores do banco.
//  const getAll = async () => {
//  	const [authors] = await connection.execute(
//  		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  	);
			return authors.map(serialize).map(getNewAuthor);
//  };

//  module.exports = {
//  	getAll,
//  };
```
> NOTE: Utilizaremos essas duas funções `serialize` e `getNewAuthor` nessa aplicação em todos os momentos que precisarmos gerar um objeto com propriedades em `camelCase` a partir de um objeto em `snake_case`, e para gerar uma string contendo o `fullName` da pessoa autora.

- `getNewAuthor` - recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAll, assim desacoplando a necessidade dela conhecer outras funções além da serialize.

Com o `model` criado devemos então criar a rota que o utilizará. Adicione ao conteúdo do `index.js` o seguinte:
```js
// index.js

// const express = require('express');

const Author = require('./models/Author');

// const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// 	console.log(`Ouvindo a porta ${PORT}`);
// });
```

A essa aplicação, adicionamos uma nova rota `GET /authors` e passamos uma função que acessa os parâmetros `req` e `res`, que chama a função `getAll` do nosso `model`, aguarda sua execução e então retorna um `JSON` com os dados enviados pelo banco.
