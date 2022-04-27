# `INSERT`
Insere uma linha na tabela.

**Backticks ou crase** `( `` )` : São usadas para identificar nome de *tabelas* e *colunas* . São necessárias apenas quando o identificador for uma palavra reservada do MySQL , ou quando o nome da tabela ou coluna contiver espaços em branco.

**Aspas simples** ( `''` ) : Devem ser usadas em valores do tipo *string*, é preferível usar aspas simples no lugar das aspas duplas.

Vamos começar a dar vida ao banco sakila . Uma pesquisa rápida na tabela sakila.staff nos informa de que a empresa possui apenas dois funcionários. Acho que ela pode contar com nossa ajuda para melhorar isso. A sintaxe para inserir dados em uma tabela é a seguinte:
```sql
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES ('valor_coluna1', 'valor_coluna2');
```

Isso vai inserir uma linha na tabela nome_da_tabela os valores em suas colunas correspondentes. Apesar de ser possível inserir novos valores sem especificar os nomes das colunas, é uma boa prática sempre especificá-los porque:
1. Caso a estrutura da tabela tenha mudado enquanto se escreve a query , você será alertado.
2. Melhora a compreensão para quem estiver lendo sua query futuramente.


## Inserrir várias linhas de uma vez
```sql
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
  ('valor_1','valor_2'),
  ('valor_3','valor_4'),
  ('valor_5','valor_6');
```


## Ignorar linhas existentes
Quando for importar uma quantidade grande de dados, pode ser preferível, em alguns cenários, que você simplesmente ignore os erros e pule os dados problemáticos, que normalmente interromperiam a query em função de alguma restrição imposta na tabela. Ex: duplicidade de primary keys . Podemos ignorar os erros durante a inserção usando o `INSERT IGNORE` .

`INSERT IGNORE` vai pular os outros erros silenciosamente também.
```sql
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria (caso ja exista).
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;
```


## Inserir valores em colunas com **auto_increment**
**auto_increment** é uma funcionalidade que todos os bancos de dados possuem. Ela permite que valores sejam gerados automaticamente cada vez que uma nova linha é inserida em uma tabela que tem essa restrição ativa. 

Ao inserir um novo ator na tabela `sakila.actor` , caso outros atores ainda não tenham sido inseridos desde que o banco foi restaurado, o próximo valor que será gerado para `actor_id` será o valor do último id registrado acrescido de um (`201 + 1`).

A coluna que possui **auto_increment** é omitida no `INSERT` , uma vez que o valor já é gerado automaticamente:
```sql
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
```



## Inserir dados de uma outra tabela - `INSERT SELECT`
```sql
INSERT INTO tabelaA (coluna1, coluna2) 
  SELECT tabelaB.coluna1, tabelaB.coluna2
  FROM tabelaB
  WHERE tabelaB.nome_da_coluna <> 'algumValor'
  ORDBER BY tabelaB.coluna_de_ordenacao;
```

É possível usar também `SELECT * FROM` e copiar todos os dados de todas as colunas de uma tabela para outra.



## Fixando
1. Insira um novo funcionário na tabela sakila.staff .
2. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
3. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
4. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
5. Cadastre três categorias de uma vez só na tabela sakila.category .
6. Cadastre uma nova loja na tabela sakila.store .