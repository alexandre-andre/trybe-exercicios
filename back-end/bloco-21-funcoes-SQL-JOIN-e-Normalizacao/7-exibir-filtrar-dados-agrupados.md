# Exibindo e filtrando dados de forma agrupada com `GROUP BY` e `HAVING`
Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o `GROUP BY` , o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O `GROUP BY` também pode ser usado em conjunto com as funções de agregação.

**`GROUP BY` removerá duplicações**, retornando apenas um valor da coluna usada no agrupamento.


O `GROUP BY` pode ser construído da seguinte forma:
```sql
SELECT coluna(s) FROM tabela GROUP BY coluna(s);
```


## Agrupamento por coluna
Uma das formas como podemos utilizar o `GROUP BY` é agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna *first_name* a seguir.
```sql
SELECT first_name FROM sakila.actor GROUP BY first_name;
```

Porém é mais comum utilizar o GROUP BY em conjunto com o AVG , MIN , MAX , SUM ou COUNT . Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT() . Assim, teremos uma informação mais fácil de ser compreendida.
```sql
SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name;
```


Tendo visto isso, agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, através alguns exemplos feitos com o nosso banco de dados sakila .
```sql
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length) FROM sakila.film GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) FROM sakila.film GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) FROM sakila.film GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP by rating;
```


## Praticando GROUP BY
1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
3. Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
```sql
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active; 
```


## Filtrando Resultados do GROUP BY com HAVING
Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.

A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING , para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.
```sql
SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
```


É importante entender que quando usamos o HAVING estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.


## Para Fixar
1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
```sql
SELECT rating, AVG(length) FROM sakila.film GROUP BY rating;

SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP by rating;
```
