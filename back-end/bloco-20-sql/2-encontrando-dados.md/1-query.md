# O que é uma query e quais são os principais tipos de queries
**Query** é o nome dado aos comandos digitados em uma janela ou linha de comando com a intenção de interagir de alguma maneira com uma base de dados.

- **DDL**: *Data Definition Language* - Todos os comandos que lidam com o *SCHEMA*, a descrição e o modo como os dados devem existir em um banco de dados:
  - `CREATE` : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
  - `ALTER` : Para alterar a estrutura de qualquer objeto;
  - `DROP` : Permite deletar objetos;
  - `TRUNCATE` : Apenas esvazia os dados dentro de uma tabela, mas não no banco de dados.

- **DML** : *Data Manipulation Language* - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:
  - `SELECT` : Busca dados em um banco de dados;
  - `INSERT` : Insere dados em uma tabela;
  - `UPDATE` : Altera dados dentro de uma tabela;
  - `DELETE` : Exclui dados de uma tabela.

- **DCL** : *Data Control Language* - Mais focado nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.
  - `GRANT` : Concede acesso a um usuário;
  - `REVOKE` : Remove acessos concedidos através do comando `GRANT` .

- **TCL** : *Transactional Control Language* - Lida com as transações dentro das pesquisas.
  - `COMMIT` : Muda as alterações de temporárias para permanentes no banco de dados;
  - `ROLLBACK` : Desfaz todo o impacto realizado por um comando;
  - `SAVEPOINT` : Define pontos para os quais uma transação pode voltar.
  - `TRANSACTION` : Comandos que definem onde, como e em que escopo as transações são executadas.
