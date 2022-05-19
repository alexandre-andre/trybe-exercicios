## Restaure o banco de dados abaixo antes de continuar:
Para realizar os exercícios propostos para o dia, faremos uso da tabela employees do banco de dados hr . O banco de dados pode ser gerado e restaurado usando este [arquivo SQL](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql).

## Instruções de como restaurar o banco de dados
1. Baixe o conteúdo do arquivo .sql linkado acima;
2. Copie todo o código SQL;
3. Abra o MySQL Workbench e abra uma nova janela de query;
4. Copie todo o código para dentro dessa janela;
5. Selecione todo o código usando Ctrl + a;
6. Execute o código teclando Ctrl + ENTER.

## Exercícios
1. Escreva uma query que exiba o maior salário da tabela.
2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
3. 🚀 Escreva uma query que exiba a média salarial de cada `JOB_ID` , ordenando pela média salarial em ordem decrescente.
4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( `IT_PROG` ).
7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( `JOB_ID` ).
8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( `IT_PROG` ).
9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( `IT_PROG` ).
10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo `DEPARTMENT_ID` .
11. 🚀 Escreva uma query que atualize a coluna `PHONE_NUMBER` , de modo que todos os telefones iniciados por `515` agora devem iniciar com `777`.
12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
13. Escreva uma query que exiba as seguintes informações de cada funcionário: `id , primeiro nome e ano no qual foi contratado` (exiba somente o ano).
14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: `id , primeiro nome e dia do mês no qual foi contratado` (exiba somente o dia).
15. Escreva uma query que exiba as seguintes informações de cada funcionário: `id , primeiro nome e mês no qual foi contratado` (exiba somente o mês).
16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
18. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: `nome , sobrenome , tempo que trabalha na empresa` (em dias).



### Solucao
```sql
-- 1
SELECT MAX(SALARY) FROM hr.employees;

-- 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- 3
SELECT JOB_ID, AVG(SALARY) AS 'average_salary' FROM hr.employees GROUP BY JOB_ID ORDER BY avarage_salary DESC;

-- 4
SELECT SUM(SALARY) FROM hr.employees;

-- 5
SELECT 
MAX(SALARY) AS 'max_salary',
MIN(SALARY) AS 'min_salary',
SUM(SALARY) AS 'sum_salary',
ROUND(AVG(SALARY), 2) AS 'average_salary'
FROM hr.employees;

-- 6
SELECT JOB_ID, COUNT(*) AS 'total' FROM hr.emplyees WHERE JOB_ID = 'IT_PROG';

-- 7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

-- 8
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING = 'IT_PROG';

-- 9
SELECT JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORBER BY `average_salary` DESC;

-- 10
SELECT AVG(SALARY) AS 'average_salary', COUNT(EMPLOYEES_ID) AS 'qtt_employees'
FROM hr.employees 
GROUP BY DEPARTMENT_ID
HAVING `qtt_employees` > 10;

-- 11
-- Se o modo "safe mode" do MySQL estiver habilitado, o MySQL não executa UPDATE ou DELETE sem uma
-- instrução WHERE que não inclua uma PRIMARY KEY.
-- Podemos desabilitar o "safe mode" com: SET SQL_SAFE_UPDATES = 0;
-- e depois das modificações o habilitarmos novamente com: SET SQL_SAFE_UPDATES = 1;
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER(515, 777)) WHERE PHONE_NUMBER LIKE '515%';
SET SQL_SAFE_UPDATES = 1;

-- 12
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;

-- 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS `hire_year` FROM hr.employees;
-- ou SELECT employee_id, first_name, LEFT(hire_date, 4) `hire_year` FROM hr.employees;
-- ou SELECT employee_id, first_name, MID(hire_ate, 1 , 4) AS  `hire_year` FROM hr.employees;
-- MID() eh equivalente a uma funcao substring()

-- 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS `hire_year` FROM hr.employees;
-- ou SELECT employee_id, first_name, RIGHT(hire_date, 2) 'hire_day' FROM hr.employees;
-- ou SELECT employee_id, first_name, MID(hire_date, 9, 2) 'hire_day' FROM hr.employees;

-- 15
SELECT EMPLOYEE_ID, FIRST_NAME, MOUNTH(HIRE_DATE) AS `hire_year` FROM hr.employees;
-- ou SELECT employee_id, first_name, SUBSTRING(hire_date, 6, 2) 'hire_month' FROM hr.employees;
-- ou SELECT employee_id, first_name, MONTH(hire_date) 'hire_month' FROM hr.employees;

-- 16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;

-- 17
SELECT LAST_NAME _NAME FROM hr.employees WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';
-- ou SELECT LAST_NAME _NAME, HIRE_DATE FROM hr.employees WHERE MONTH(HIRE_DATE)=7 AND YEAR(HIRE_DATE)=1987;

-- 18
SELECT FIRST_NAME, LAST_NAME,
DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;
```
