# Encontrando e separando resultados que incluem datas
No MySQL, o tipo `DATE` faz parte dos tipos de dados temporais. Por padrão, usa o formato `YYYY-MM-DD` ao armazenar os valores de uma data. É obrigado, pelo banco de dados, a salvar nesse formato, e não é possível alterá-lo. Temos também o tipo `DATETIME` , que inclui informações de tempo. Vamos ver dois tipos comuns a seguir:
- `DATE` - **YYYY-MM-DD** na faixa de 1001-01-01 até 9999-12-31
- `DATETIME` - **YYYY-MM-DD HH:MM:SS** com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59 .


## Maneiras de encontrar dados por data
Vamos dizer que queremos encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment . Há várias formas de fazer isso.

Usando a função `DATE(coluna_do_tipo_date)` :
```sql
-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31';
```

Usando `LIKE` para valores aproximados:
```sql
-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-08-20 00:30:52';
```

Usando `BETWEEN` :
```sql
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
```

## Selecionando apenas partes de uma data
Às vezes você está interessado em apenas uma parte de uma data, como o ano ou as horas. MySQL possui funções que retornam partes específicas de uma data ou hora.
```sql
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
```


## Fixando
1. Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.
2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?
3. Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .
```sql
USE sakila;
SELECT COUNT(*) Pagamentos FROM payment WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) PAGAMENTOS FROM payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date) AS Data, 
YEAR(rentao_date) AS Ano, 
MOUNTH(rental_date) AS Mes, 
DAY(rental_date) AS Dia, 
HOUR(rental_date) AS Hora, 
MINUTE(rental_date) AS Minutos, 
SECONDS(rental_date) AS Segundos 
FROM rental 
WHERE rental_id = 10330;

SELECT * FROM payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
```
