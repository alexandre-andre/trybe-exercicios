# UNION e UNION ALL
Enquanto a ideia do `JOIN` é permitir combinar registros de duas ou mais tabelas, através do relacionamento que uma tabela tem com a outra. O `UNION` permite acrescentar os resultados de uma query à outra.

O `UNION` nos permite unir os registros de uma tabela com outra, desde que usemos a mesma quantidade de colunas.


## UNION
O `UNION` une os dados das tabelas removendo os dados duplicados
```sql
(SELECT first_name, last_name FROM sakila.actor LIMIT 10)
UNION
(SELECT first_name, last_name FROM sakila.customer LIMIT 10)
ORDER BY first_name
LIMIT 10;
```


## UNION ALL
O `UNION ALL` une os dados das tabelas e mantém os dados duplicados. Para usar o comando corretamente, a mesma quantidade de colunas deve ser utilizada.
```sql
(SELECT first_name, last_name FROM sakila.actor LIMIT 10)
UNION ALL
(SELECT first_name, last_name FROM sakila.customer LIMIT 10)
ORDER BY first_name
LIMIT 10;
```


### Fixando
1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
2. Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor. Exiba apenas os resultados únicos.
3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
```sql
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

SELECT first_name FROM sakila.customer
WHERE first_name = 'tracy'
UNION ALL
SELECT first_name FROM sakila.actor
WHERE first_name LIKE 'je%';

(SELECT first_name FROM sakila.actor LIMIT 5 OFFFSET 195)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

(SELECT first_name, last_name FROM sakila.customer)
UNION
(SELECT first_name, last_name FROM sakila.actor)
ORDER BY first_name
LIMIT 15 OFFSET 45;
```
