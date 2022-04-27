# `SELECT` , o primeiro passo
`SELECT` para gerar valores e usar o `AS` para dar nomes às suas colunas, como nos exemplos a seguir. Rode cada um deles em uma janela de query para verificar os resultados:
```sql
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```

Rodar cada um desses comandos é possível fazer algumas coisas apenas usando o `SELECT` , ainda sem alterar o banco de dados.

- É possível gerar e calcular valores usando apenas `SELECT valor_a_ser_calculado_ou_exibido` ;
- `AS` permite que as colunas sejam nomeadas. Caso o nome tenha mais de uma palavra, devemos usar aspas simples para nomear as colunas;
- Sempre finalizamos uma query usando o ponto e vírgula ( ; );
- As palavras-chave (reservadas) estão em maiúsculo. Isso é uma convenção para facilitar a leitura da query.



## Testando
1. Monte uma query que exiba seu nome na tela;
2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
```sql
SELECT 'Alexandre';
SELECT 'Alexandre', 'GALVAO', 'Rio de Janeiro', 32;
SELECT 'Alexandre' AS Nome, 'Galvao' AS Sobrenome, 'Rio de Janeiro' AS  'Cidade Natal', 32 AS Idade;
SELECT 13 * 8;
SELECT now() AS 'Data Atual';
```


## Testando no banco de dados sakila
1. Escreva uma query que selecione todas as colunas da tabela city ;
2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
3. Escreva uma query que exiba todas as colunas da tabela rental ;
4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```sql
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM salika.costumer;
SELECT * FROM sakila.tabela_rental;
SELECT title, description, realease_year FROM  sakila.film;
SELECT * FROM sakila;
```
