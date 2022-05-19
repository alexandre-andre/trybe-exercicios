# Fixando
Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo
```sql
CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(90) NOT NULL,
	author_id INT(11) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
	('A Game of Thrones', 1),
	('A Clash of Kings', 1),
	('A Storm of Swords', 1),
	('The Lord of The Rings - The Fellowship of the Ring', 2),
	('The Lord of The Rings - The Two Towers', 2),
	('The Lord of The Rings - The Return of The King', 2),
	('Foundation', 3);
```

1. Crie um modelo `Book` e defina o método `getAll` para retornar a lista de todos os livros;
2. Crie uma rota `/books` para trazer a lista de todos os livros;
3. Crie um método `getByAuthorId` no modelo Book, para retornar apenas livros associados com um determinado `author_id`. Altere o *middleware* da rota `books` criado no passo 2 para receber uma query string com a chave `author_id`, e retornar apenas os livros associados.
