# SELF JOIN
É possível fazer pesquisas e comparações dentro da própria tabela através do `SELF JOIN`.

> Sempre lembrar do `SELF JOIN` quando a informação que precisar ser filtrada ou comparada para encontrar algo estiver em uma única tabela.

`SELF JOIN` não é um tipo diferente de `JOIN`. É apenas um caso em que uma tabela faz join consigo mesma. É possível utilzar qualquer dos tipos de `JOIN` ao realizar um `SELF JOIN`.

Utilizando o schema `hr` como exemplo, se quisermos buscar o nome das pessoas colaboradoras e das respectivas gerências (manager), podemos montar a seguinte query usando `SELF JOIN`:
```sql
SELECT
CONCAT(Employee.first_name, ' ', Employee.last_name) AS 'Nome da pessoa'
CONCAT(Manager.first_name, ' ', Manager.last_name) AS 'Nome do gerente'
FROM employees AS  Employee
INNER JOIN employees AS Manager
ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;
```


## Fixando
Para fixar esses conceitos, tente encontrar as seguintes informações, utilizando o schema hr:
1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
```sql
-- 1
SELECT
CONCAT(EMPLOYEE.First_name, ' ', EMPLOYEE.last_name) AS 'Funcionario'
CONCAT(MANAGER.First_name, ' ', MANAGER.last_name) AS 'Gerente'
FROM hr.employees AS EMPLOYEE
INNER JOIN hr.manager AS MANAGER
ON EMPLOYEE.manager_id = MANAGER.employee_id -- primary key = foreign key 
WHERE EMPLOYEE.departament_id <> MANAGER.departament_id;

-- 2
SELECT
CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS 'Gerente',
COUNT(*)
FROM hr.first_name AS MANAGER
INNER JOIN hr.employees AS EMPLOYEE
ON MANAGER.employee_id = EMPLOYEE.manager_id -- primary key = foreign key
GROUP BY MANAGER.employee_id;
```