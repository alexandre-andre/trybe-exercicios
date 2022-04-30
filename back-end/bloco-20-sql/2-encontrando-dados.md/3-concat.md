# Juntando duas ou mais colunas usando o `CONCAT`
Dê uma pesquisada agora na tabela sakila.actor usando o comando `SELECT * FROM sakila.actor` e veja que temos uma coluna chamada `first_name` e outra `chamada last_name` . Vamos imaginar que é necessário criar um relatório com o nome completo de um ator. Como podemos fazer isso? É fácil, basta usar a função `CONCAT` .
```sql
SELECT CONCAT(first_name, last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
```


## Testanto em sakila
1. Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
2. Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
3. Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .
```sql
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;

SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;
```
