# Alavancando o poder dos principais operadores booleanos e relacionais
```sql
-- OPERADOR - DESCRIÇÃO
=   IGUAL
>   MAIOR QUE
<   MENOR QUE
>=  MAIOR QUE OU IGUAL
<=  MENOR QUE OU IGUAL
<>  DIFERENTE DE
AND OPERADOR LÓGICO E
OR  OPERADOR LÓGICO OU
NOT NEGAÇÃO
IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)
```


## Para fixar
A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila . Consulte-a ao fazer os desafios propostos.
- G = permitido para todos
- PG = permitido para crianças menores de 13 anos
- PG-13 = permitido para pessoas com mais de 13 anos
- R = permitido para pessoas com mais de 17 anos
- NC-17 = permitido apenas para adultos

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):
1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org` . As informações podem ser encontradas na tabela `customer`

2. Precisamos de um relatório dos nomes dos clientes, em `ordem alfabética` , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente `KENNETH` no resultado. As informações podem ser encontradas na tabela `customer`

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em `ordem alfabética` pelo título. As informações podem ser encontradas na tabela `film`

4. Quantos clientes estão `ativos` e na loja `1` ? As informações podem ser encontradas na tabela `customer`

5. Mostre todos os detalhes dos clientes que `não` estão ativos na loja 1 . As informações podem ser encontradas na tabela `customer`

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a `menor` taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em `ordem alfabética` pelo título. As informações podem ser encontradas na tabela `film`.

```sql
SELECT * FROM sakila.customer WHERE email = `LEONARD.SCHOFIELD@sakilacustomer.org`;

SELECT first_name FROM sakila.customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENETH'
ORDER BY first_name ASC;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM sakila.customer WHERE active = 0 AND store_id = 1;

SELECT title FROM sakila.film WHERE rating = 'NC-17' ORBER BY rating, title LIMIT 50;
```
