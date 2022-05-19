# Manipulação de strings
Uma das responsabilidades das pessoas que lidam com o registro de informações em um banco de dados é se certificar de que esses dados estão coerentes, normalizados e cadastrados no formato correto.


### Principais
```sql
-- Converte o texto para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
-- Oi, eu sou uma cadeia de caracteres

-- Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);
-- oi,

-- Retorna a parte da direita de uma string de acordo com o número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6); 
-- string

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
-- Oi, sou uma string

-- Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);
-- Oi,
```


> No SQL strings são indexadas a partir do `índice 1` e não no índice 0.

Apesar de ter usado strings temporárias nos exemplos acima, também é possível fazer essas operações diretamente nas colunas de uma tabela.

Para testar, execute o código abaixo no seu ambiente local, brinque com as linhas a seguir e depois volte aqui.
```sql
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
```


### Para Fixar
Agora, vamos fixar os aprendizados com alguns desafios:
1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
```sql
USE

-- 1
SELECT UCASE('trybe');

-- 2
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- 3
SELECT LENGTH('Uma frase qualquer');

-- 4
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10); -- Javacript
-- OU 
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10); -- Javascript

-- 5
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
```