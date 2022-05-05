# SUBQUERY
Uma `SUBQUERY` é uma query aninhada que é avaliada dentro de um par de parênteses.

Algo a se lembrar é que a `SUBQUERY` não é a única maneira de encontrar resultados de tabelas relacionadas. Quando se trata de SQL, os `JOINs` podem ser usados para encontrar os mesmos resultados.

É recomendado tomar a decisão sobre qual opção utilizar (`SUBQUERY` ou `JOIN`) baseando-se na performance da sua query.


## Maneiras de usar SUBQUERY
1. Usando uma `SUBQUERY` como fonte de dados para o `FROM`.
```sql
SELECT f.title, f.rating
FROM (
  SELECT *
  FROM sakila.film
  WHERE rating = 'R'
) AS f;
```

2. Preenchendo uma coluna de um `SELECT` por meio de uma `SUBQUERY`.
```sql
SELECT address, district (
  SELECT city
  FROM sakila.city
  WHERE city.city_id = sakila.address.city_id
) AS city
FROM sakila.address;
```

3. Filtrando resultados com `WHERE` usando como base os dados retornados de uma `SUBQUERY`.
```sql
SELECT address, district
FROM sakila.address
WHERE city_id in (
  SELECT city_id
  FROM sakila.city
  WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);
```

4. Usando uma tabela externa, de fora da `SUBQUERY`, dentro dela.
```sql
SELECT first_name, (
  SELECT address
  FROM sakila.address
  WHERE address.address_id = tabela_externa.address_id
) AS address
FROM sakila.customer AS tabela_externa;
```

