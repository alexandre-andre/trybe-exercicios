# `Limits`
Se você abrirmos o sakila e executar a query a seguir, o resultado será 16044, ou seja, existem 16044 linhas na tabela rental .
```sql
SELECT COUNT(*) FROM sakila.rental;
```

Isso não é sempre necessário e pode até ser um problema em bancos de dados gigantes, em que as tabelas podem conter milhares ou milhões de linhas. Resolver isso é bem simples: tudo que você precisa fazer é limitar o resultado usando o LIMIT :
```sql
SELECT * FROM sakila.rental LIMIT 10;
```
