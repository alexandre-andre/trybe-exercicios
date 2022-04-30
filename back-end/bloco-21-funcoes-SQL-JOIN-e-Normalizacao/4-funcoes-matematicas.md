# Funções matemáticas do MySQL

## Adição, Subtração, Multiplicação e Divisão
```sql
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
```


## Funções com colunas
```sql
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
```


## Divisão de inteiros com `DIV` e como encontrar seus restos com o `MOD`
O `DIV` retorna o resultado inteiro de uma divisão: **DIV == Math.floor()**
```sql
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
```


O `MOD` retorna o resto de uma divisão como resultado: **MOD === %**
```sql
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5
```


## Desafios com DIV e MOD
1. Monte uma query usando o `MOD` juntamente com o `IF` para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?


## Arredondando Valores
Ter a capacidade de encontrar aproximações de valores é algo extremamente valioso na criação de relatórios e gráficos, que são utilizados por softwares de todos os tipos.

`ROUND`
  - *arredonda os números de acordo com sua parte decimal*.
  - Se for maior ou igual a 0.5, o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo. Veja os exemplos abaixo:
```sql
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
```


`CEIL`
  - arredonda sempre pra cima
```sql
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
```


`FLOOR`
  - arredonda sempre pra baixo
```sql
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10
```


## Exponenciação e Raiz Quadrada
`POW`
  - Eleva um número X à potência Y 
```sql
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
```


`SQRT`
  - Encontra a raiz quadrada de um valor
```sql
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4
```


## Gerando valores aleatórios
`RAND`, podemos usar a função  em conjunto com as funções anteriores.
```sql
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
```


## Para Fixar
- Monte uma query que gere um valor entre 15 e 20 .
- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?


