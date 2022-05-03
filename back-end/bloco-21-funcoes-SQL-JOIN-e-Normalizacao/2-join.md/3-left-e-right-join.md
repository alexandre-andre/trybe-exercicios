# LEFT JOIN e RIGHT JOIN
São usados para encontar um conjunto de registros onde não temos certeza se a informação existe no local.


## Três queries e uma pergunta
### **LEFT JOIN** x **RIGHT JOIN** x **INNER JOIN**
- LEFT JOIN
```sql
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```
  - o foco é na tabela da esquerda. 
  - São retornados todos os registros da tabela da esquerda e valores correspondentes da tabela da direita, *caso existam*, caso não existam é retornado *NULL*.

- RIGHT JOIN
```sql
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```
  - o foco é na tabela da direita. 
  - São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, *caso existam*,caso não existam é retornado *NULL*.

- INNER JOIN
```sql
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```
  - foca na intersessão das tabelas.
  - Traz somente os valores correspondentes das tabelas.

