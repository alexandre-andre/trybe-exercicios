# `UPDATE`
```sql
UPDATE sakila.staff SET first_name = 'Rannveig' WHERE first_name = 'Ravein';

-- sintaxe
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
```


## Curiosidade UPDATE e DELETE
### - *safe updates mode*
No MySQL Server, por padrão, existe uma configuração chamada **safe updates mode** que só vai te permitir executar o `UPDATE` e o `DELETE` caso eles incluam quais IDs devem ser modificados. Então, caso você tente fazer a query abaixo, ela não funcionaria por não incluir o ID.
```sql
UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';
```

Para evitar essa restrição, rode o seguinte comando em uma janela de query dentro do MySQL Workbench **sempre** que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos de `UPDATE` ou `DELETE` :
```sql
SET SQL_SAFE_UPDATES = 0;
```


## Alterar mais de uma coluna ao mesmo tempo
```sql
UPDATE sakila.staff
SET first_name = 'Rannveing', last_name = 'Jordan'
WHERE staff_id = 4;
```


## `UPDATE` em massa
Por questões de performance, para que apenas uma solicitação de query seja enviada ao servidor, podemos fazer uma atualização em massa.
```sql
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
```
Mais sobre [CASE](https://www.w3schools.com/sql/func_mysql_case.asp).


## `UPDATE` sequencial
Se o comando `ORDER BY` for usado juntamente com o `UPDATE` , os resultados serão alterados na ordem em que forem encontrados.

Se o comando `LIMIT` for usado em conjunto com o `UPDATE` , um limite será imposto na quantidade de resultados que podem ser alterados. Caso contrário, todos os resultados que satisfizerem a condição serão atualizados.

Veja a sintaxe abaixo. Lembre-se de que os valores entre colchetes (`[]`) são opcionais:
```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ASC | DESC]]
[LIMIT quantidade_resultados];

-- exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;
```
> Essas são as maneiras mais comuns de utilizar o `UPDATE` no dia a dia.


## Um pouco mais sobre o modo `--safe-updates`
`--safe-updates` (ou - `-i-am-a-dummy` , sim, é uma propriedade real do MySQL) pode ser uma configuração segura para utlizar operadores de alteração de dados. Ele é útil para casos em que você tenha emitido um comando `UPDATE` ou `DELETE` , mas esquecido de incluir `WHERE` para indicar quais linhas devem ser modificadas, evitanto que a query atualize ou exclua todas as linhas da tabela.

O `--safe-updates` exige que você inclua um valor chave (key value), por exemplo os ids (lembrando que os valores da coluna id de uma tabela são do tipo KEY ) dos itens selecionados para executar o `UPDATE` ou o `DELETE`. Essa camada de segurança é importante em bancos reais executando em ambientes de produção e ajuda a prevenir acidentes. Este modo também restringe querys `SELECT` que produzem resultados muito grandes, com uma quantidade excessiva de linhas.

A opção `--safe-updates` exige que o mysql execute a seguinte instrução ao se conectar ao servidor:
```sql
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
```

- `sql_select_limit =1000` limita o conjunto de resultados `SELECT` a 1.000 linhas, a menos que a instrução inclua `LIMIT` .
- `max_join_size =1.000.000` faz com que as instruções `SELECT` de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

Você pode desabilitar o --safe-updates utilizando o comando SET :
```sql
SET SQL_SAFE_UPDATES = 0;
```

Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
```sql
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;
```

Quando ocorre um erro de `--safe-updates` , a mensagem de erro inclui o primeiro diagnóstico que foi produzido, para fornecer informações sobre o motivo da falha. Por exemplo, a mensagem pode indicar que o `UPDATE` esta sendo executado com um operador `WHERE` que não se refere a uma coluna do tipo `KEY`, nesse caso voce pode **desabilitar** o `--safe-updates` , ou utilizar uma coluna `KEY` como referência do seu operador `WHERE` . Lembre-se que ler e interpretar os erros pode ajudar na sua solução!
```sql
-- Mensagem de erro retornada pelo workbench.

-- Error Code: 1175. You are using safe update mode and you tried to update a table without WHERE that uses a KEY column.
-- To disable safe mode, toogle the option in Preferences -> SQL Editor an reconnect.
```
> Este erro ocorreu devido ao Safe Update Mode estar habilitado.


## Praticando
Como o banco pode ser deletado e recriado infinitamente, vamos desabilitar o `--safe-updates` nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench **sempre** que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos `UPDATE` ou `DELETE` :
```sql
SET SQL_SAFE_UPDATES = 0;
```

1. Atualize o primeiro nome de todas as pessoas da tabela `sakila.actor` que possuem o primeiro nome "JULIA" para "JULES".
2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
```sql
USE sakila;

UPDATE actor SET first_name = 'JULES' WHERE first_name = 'JULIA';

UPDATE category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';

UPDATE film SET rental_rate = 25 WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
```
