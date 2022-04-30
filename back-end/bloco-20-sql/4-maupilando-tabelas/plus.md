1. Adicione os dois principais atores do novo filme Matrix na tabela actor;
2. Adicione o filme Matrix 4 na tabela film;
3. Faça a ligação na tabela film_actor destes registros inseridos anteriormente; 
4. Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1;
5. Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
6. Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 25/04/2022;
7. Faça a atualização com a devolução do filme no dia de hoje (26/04/2022) na tabela rental, no registro que foi inserido anteriormente (return_date);
8. Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
9. Bônus: deletar todos registros inseridos anteriormente; 


## Solucao
```sql
USE sakila

INSERT INTO sakila.actor (first_name, last_name) VALUES
('PRIYANKA', 'CHOPRA'),
('JONATHAN', 'GROFF');

INSERT INTO sakila.film (title, language_id) VALUE
('Matrix 4', '1');

SELECT * FROM sakila.film LIMIT 1000, 1002; 

SELECT * FROM sakila.actor WHERE first_name='PRIYANKA';
INSERT INTO sakila.film_actor (actor_id, film_id) VALUES
('201', '1001'),
('202', '1001');

SELECT * FROM sakila.film_actor WHERE actor_id='202';

INSERT INTO sakila.inventory (film_id, store_id) VALUE
('1001', '1');
SELECT * FROM sakila.inventory WHERE film_id='1001';

INSERT INTO sakila.customer (store_id, first_name, last_name, email, address_id) VALUE
('1', 'Alexandre', 'Andre', 'dedeh@gmail.com', '55');
SELECT * FROM sakila.customer WHERE first_name='Alexandre';

INSERT INTO sakila.rental (rental_date, inventory_id, customer_id, staff_id) VALUE
('2022-04-25 05:00:02', '4582', '600', '1');
SELECT * FROM sakila.rental WHERE customer_id='600';

UPDATE sakila.rental SET return_date='2022-04-26 22:55' WHERE rental_id=16050;

UPDATE sakila.customer SET `active`=0 WHERE customer_id=600;
SELECT * FROM sakila.customer WHERE customer_id='600'; 
```
