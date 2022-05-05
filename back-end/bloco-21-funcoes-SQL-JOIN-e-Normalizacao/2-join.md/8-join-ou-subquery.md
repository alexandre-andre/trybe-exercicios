# SUBQUERY ou JOIN
Ambos retornam o mesmo resultado

### SUBQUERY
```sql
SELECT first_name, (
  SELECT address
  FROM sakila.address
  WHERE address.address_id = tabela_externa.adress_id
) AS address
FROM sakila.customer AS tabela_externa;
```

### INNER JOIN
```sql
SELECT c.first_name, address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;
```

Uma maneira simples de mensurar a performance e decidir sobre qual abordagem utilizar (**Execution Plan**)

A otimização envolve configurar, ajustar e medir o desempenho em vários níveis:
- Escalar o banco de dados de forma vertical, ou seja, instanciar mais CPU e memória para o processo do Banco de dados.
- Escalar o banco de dados de forma horizontal, ou seja, instanciar mais máquinas e balancear a carga entre as diferentes instâncias.
- Escrever o código SQL de forma que aproveite melhor os recursos do SGBD;

**Execution Plan** mensura o custo de uma query e exibe o tipo de scan (motor de busca) efetuado em cada tabela incluída na query e seu custo total. O mysql possui algumas opções de scan, mas aqui só falaremos de 2 delas: table scan e index seek.

O table scan é utilizado quando você realiza uma query inespecífica e precisa buscar todos os dados da tabela. Como, por exemplo, a query abaixo.
```sql
SELECT * FROM table;
```

- O **table scan** não utiliza um mecanismo de busca por índice, e precisa percorrer todos os registros da tabela para recuperar os resultados desejados, como seria pequisar dados em um livro sem índice, que você precisa ler todo o livro para encontrar a informação desejada.
- O **index seek** é utilizado quando você realiza uma query específca com `WHERE`, em que a coluna utilizada tenha um índice clusterizado. Isso significa que, quando você adiciona uma coluna que possui uma chave primária na criação da tabela, o SQL automaticamente cria um index clusterizado nesta coluna, como um índice que contém os capítulos de um livro, que pode ser utilizado para otimizar uma busca. Assim o *index seek* realiza uma busca mais rápida que o *table scan* e possui uma performance melhor em tabelas com muitas linhas.

```sql
SELECT * FROM table
WHERE alguma_condicao;
```

Se achar que sua consulta está lenta, você deve verificar o **execution plan** para confirmar se está usando **index seek** ou **table scan**. Em seguida, você pode otimizar sua consulta ajustando sua query.

Seu uso na prática pode ser visto da seguinte forma:

Tomando como exemplo as duas últimas queries desta página, crie dois novos arquivos SQL no seu MySQl Workbench. Em um deles, cole a query em que utilizamos a solução usada como `SUBQUERY` e, no outro, a que se utilizou como `INNER JOIN`.

Em seguida, execute uma das queries e depois clique em **Execution Plan**, como na imagem abaixo, e observe o valor de "Query Cost". Quanto menor o valor, em comparação com outra versão da query, melhor a performance. Assim você pode simplesmente escolher a query que tem o menor custo.