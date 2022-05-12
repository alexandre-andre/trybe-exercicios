# INNER JOIN
`INNER JOIN` permite retornar todos os resultados em que a condição da cláusula `ON` for satisfeita.
```sql
SELECT t1.coluna, t2.coluna -- exibe coluna tal
FROM tabela1 AS t1 
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum; -- na t1.coluna_x = t2.coluna_x (primary key = foreign key)
```


## Por que usamos o alias (`AS`)?
O alias `AS` é usado para apelidar qualquer parte da sua query. Isso ajuda o sistema de banco de dados a identificar a qual coluna estamos nos referindo, evitando erros de ambiguidade de nome de colunas, além de tornar suas queries mais concisas e legíveis.

### Código SEM Alias
```sql
SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;
```
O código acima, além de ser muito extenso, não permite que o banco de dados descubra de qual tabela deve trazer o `actor_id`, uma vez que ambas as tabelas, `actor` e `filme_actor`, possuem uma coluna `actor_id`. O seguinte erro será gerado ao tentar executar essa query:
> Erro de ambiguidade de coluna

### Código COM Alias
> Podemos tornar a query mais legível com um alias, além de evitar o erro de ambiguidade de coluna:
```sql
SELECT a.first_name, a.actor_id, f.actor_id AS film_actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;
```

OBS.: A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabela:
```sql
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;
```


## Como escolher o tamanho do alias
A query é composta de poucas linhas? Então use apenas letras ou a primeira sílaba para representar a coluna. Por exemplo, "**actor**" se tornaria "**A**" ou "**act**".

Caso esteja montando `JOINS` com muitas linhas, é recomendado usar um alias mais descritivo para tornar a leitura e interpretação da query mais simples.


## Fixando
1. Monte uma query que exiba o *id do ator*, *nome do ator* e *id do filme* em que ele já atuou, usando as tabelas *actor* e *film_actor*.

2. Use o *JOIN* para exibir o *nome*, *sobrenome* e *endereço* de cada um dos funcionários do banco. Use as tabelas *staff* e *address*.

3. Exiba o *id do cliente*, *nome* e *email* dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o *id do endereço* e o *nome da rua* onde o cliente mora. Essas informações podem ser encontradas nas tabelas *customer* e *address*.

4. Exiba o *nome*, *email*, *id do endereço*, *endereço* e *distrito* dos clientes que moram no distrito da California e que contêm "*rene*" em seus nomes. As informações podem ser encontradas nas tabelas *address* e *customer*.

5. Exiba o *nome* e a *quantidade de endereços* dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela *address* e *customer*.

6. Monte uma query que exiba o *nome*, *sobrenome* e a *média de valor (amount)* paga aos funcionários no ano de 2006. Use as tabelas *payment* e *staff*. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

7. Monte uma query que exiba o *id do ator*, *nome*, *id do filme* e *título do filme*, usando as tabelas *actor*, *film_actor* e *film*. Dica: você precisará fazer mais de um *JOIN* na mesma query.
```sql
-- 1
SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id; -- foreign key = primary key

-- 2
SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id; -- foreign key = primey key

-- 3
SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address 
FROM sakila.customer AS C
INNER JOIN sakila.adress AS A
ON C.address_id = A.address.id -- foreign key = primary key
ORDER BY C.first_name DESC
LIMIT 100;

-- 4
SELECT C.first_name, C.email, C.address_id, A.address, A.disctrict
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id -- foreign key = primary key
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

-- 5
SELECT C.first_name, C.last_name, COUNT(A.address) AS `address quantity`
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE active = 1
GROUP BY C.customer_id
ORDER BY first_name DESC, last_name DESC;

-- 6
SELECT S.first_name, S.last_name, AVG(P.amount) AS `Payment average`
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.staff id;

-- 7
SELECT ACTOR.actor_id, ACTOR.first_name, FA.film_id, FA.title
FROM sakila.actor AS ACTOR
INNER JOIN sakila.film_actor AS FA
ON ACTOR.actor_id = FA.actor_id
INNER JOIN sakila.film AS FI
ON FA.film_id = FI.film_id;
``` 


## encadeamento de INNER
```sql
SELECT c.CustomerName, e.FirstName
FROM orders o
INNER JOIN employees e ON o.EmployeeID = e.EmployeeID
INNER JOIN customers c ON o.CustomerID = c.CustomerID;


SELECT c.CustomerName, e.FirstName, s.ShipperName, o.OrderID
FROM orders o
INNER JOIN employees e ON o.EmployeeID = e.EmployeeID
INNER JOIN customers c ON o.CustomerID = c.CustomerID
INNER JOIN shippers s ON o.ShipperID = s.ShipperID;
```
