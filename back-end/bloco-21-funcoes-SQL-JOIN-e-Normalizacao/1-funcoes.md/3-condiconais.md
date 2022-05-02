# Condicionais
NO SQL também é possível usar os principais comandos de controle de fluxo, como o `IF` e o `CASE` .


## `IF`
```sql
-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

-- idade = coluna a tabela
SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade') FROM pessoas;

-- aberto = colunda da tabela
SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida') FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status -- seleciona 2 colunas
FROM sakila.customer -- tabela
LIMIT 20; -- limita a 20
```


## `CASE`
```sql
-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
```


## Para Fixar
1. Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um *alias (AS)* para renomear a coluna da condicional.
   
2. Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
   - G: "Livre para todos";
   - PG: "Não recomendado para menores de 10 anos";
   - PG-13: "Não recomendado para menores de 13 anos";
   - R: "Não recomendado para menores de 17 anos";
   - Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
```sql
USE sakila;

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assistí', 'Não conheço') AS `conheço o filme?` FROM film;

SELECT title, rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos os públicos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público-alvo'
FROM film;
```
