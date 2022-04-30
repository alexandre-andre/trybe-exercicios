# `DELETE`
Antes de aprender a excluir dados de uma tabela, é importante entender que nem sempre que você clicar em excluir, em um sistema ou em um site, a informação terá sido de fato excluída do banco de dados. Em muitos casos, a funcionalidade de "excluir" apenas marcará a informação como inativa ou excluída, ou algum campo equivalente.

Isso ocorre pela necessidade de seguir normas ou regulamentos sobre disponibilidade e segurança de dados. Relatórios podem necessitar de informações que já foram "excluídas" ou pode ser necessário manter logs de uso (históricos de acontecimentos no sistema) de seu software.


## Forma básica
```sql
DELETE * FROM banco.tabela WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
```

Exemplo no banco sakila :
```sql
DELETE * FROM sakila.film_text WHERE title = 'ACADEMY DINOSAUR';
```
**P.S**. Caso o modo `--safe-updates` esteja habilitado, o comando `DELETE` só funcionaria se os *IDs* fossem incluídos em suas queries . Para fins de prática, vamos desabilitá-lo.

Rode o seguinte comando em uma janela de query , dentro do MySQL Workbench, sempre que abri-lo, para desabilitar essa funcionalidade antes de executar seus comandos `DELETE` :
```sql
SET SQL_SAFE_UPDATES = 0;
```


## `DELETE` NAO permitido
Caso haja relações entre as tabelas ( **primary key** e **foreign keys** ) e existam restrições aplicadas a elas, ao executar o `DELETE` ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da **foreign key** . Essas restrições podem ser as seguintes:
```sql
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;
```


## Exemplo prático
```sql
DELETE * FROM sakila.actor WHERE first_name = 'GRACE';
```
Se tentar rodar essa query , você vai se deparar com a mensagem de erro *Error Code: 1451. Cannot delete or update a parent row ... (...ON DELETE RESTRICT ON UPDATE CASCADE)*.

O banco de dados não vai permitir que você delete o ator chamado "GRACE". Isso acontece porque a coluna `actor_id` da tabela `film_actor` é uma chave estrangeira ( *foreign key* ) que aponta para a coluna `actor_id` na tabela actor , e essa chave estrangeira possui a restrição `ON DELETE RESTRICT` . Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente, pois haveria linhas na tabela `film_actor` com um `actor_id` que não mais existiria!

Para conseguir excluir este ator em `actors` , precisamos primeiro excluir todas as referências a ele na tabela `sakila.film_actor` :
```sql
DELETE FROM sakila.actor WHERE actor_id = 7;
-- actor_id = 7 é o Id de GRACE
```

Após excluir as referências, podemos excluir o ator com o nome "GRACE":
```sql
DELETE FROM sakila.actor WHERE first_name = 'GRACE';
```

Antes de excluir dados que possuem restrições de chave estrangeira, como o exemplo que acabamos de ver, analise se você realmente deve excluir essa informação do banco de dados e depois, caso precise, faça de acordo com as restrições que foram impostas durante a criação da tabela.

As regras e restrições que acompanham querys de alteração do banco (como o UPDATE e o DELETE ) são importantes para manter a **Integridade dos Dados** , pois evitam mudanças involuntárias e garatem que as taxas de erro sejam menores, resultando em economia de tempo na solução de problemas. Um banco de dados que possui um sistema de integridade de dados bem controlado e bem definido aumenta a **estabilidade** das informações, **desempenho** das operações e **manutenção** das tabelas. Se existem restrições, normalmente não faria sentido simplesmente ignorá-las.


# `DELETE` VS `TRUNCATE`
Se tem certeza absoluta de que quer excluir os registros de uma tabela de uma maneira mais rápida, para efeitos de testes ou necessidade, o `TRUNCATE` é mais rápido que o `DELETE` . A função principal e única do `TRUNCATE` é de limpar (excluir todos os registros) de uma tabela, não sendo possível especificar o `WHERE` . Por isso, o `TRUNCATE` só pode ser usado nesse cenário.
```sql
TRUNCATE banco_de_dados.tabela;
```


## Praticando
1. Exclua do banco de dados o ator com o nome de "KARL".
2. Exclua do banco de dados os atores com o nome de "MATTHEW".
3. Exclua da tabela `film_text` todos os registros que possuem a palavra "saga" em suas descrições.
4. Apague da maneira mais *performática* possível todos os registros das tabelas `film_actor` e `film_category` .
5. *Inspecione* todas as tabelas do banco de dados `sakila` e analise quais restrições `ON DELETE` foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
```sql
USE sakila;

-- 1
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id FROM actor WHERE first_name = 'KARL';
-- Em seguida, apague suas referências
DELETE FROM actor WHERE actor_id = 12;
-- Depois exclua o item original
DELETE FROM actor WHERE first_name = 'KARL';

-- 2
SELECT actor_id FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM actor WHERE actor_id IN (8, 103, 181);
DELETE FROM actor WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM film_text WHERE DESCRIPTION LIKE '%saga%';

-- 4
TRUNCATE FROM film_actor;
TRUNCATE FROM film_category;

-- 5
Basta inspecionar e analisar uma a uma.

-- 6
Abra o MySQL Workbench e se conecte a ele.
Selecione o banco sakila na lista de bancos de dados com o botão direito e clique em " Drop Schema ".
Selecione "Drop Now" .
Clique com o botão direito neste link e salve como arquivo .sql .
Selecione todo o conteúdo do arquivo (CTRL + A) e cole-o dentro de uma janela de nova query no MySQL Workbench .
Clique em executar para restaurar o banco de dados
```
