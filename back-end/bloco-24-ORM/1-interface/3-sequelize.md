# Sequelize
Uma das bibliotecas de ORM mais conhecidas é o Sequelize, que segue o padrão Active Record, juntamente com uma aplicação simples Node.js.

Vale ressaltar que a maioria dos métodos fornecidos pelo Sequelize são *assíncronos*, portanto retornam *promises*. Dito isso, podemos usar *then / catch*, ou podemos utilizar *async / await*.

- Install Sequelize
- Init Sequelize
- Connect to database
- Seeds | Model | Transactions
- Migrations
- Operators

Esse processo pode parecer complexo, mas o Sequelize possui muitas vantagens sobre a utilização de uma interface direta com o MySQL. Quando tentamos fazer a interação direta com o banco de dados, enfrentamos problemas como:
- O JavaScript sozinho não possui um suporte eficiente para o SQL, precisaríamos de um script SQL separado para criar seu database e tabelas.
- As queries SQL precisam ser incorporadas ("embedadas") no código do JavaScript para serem utilizadas.
- Por causa dessas limitações, acabamos apenas incluindo boilerplates de SQL em vez de utilizar a Lógica de Negócio na nossa aplicação.
  - boilerplates são trechos de código que podem ser reutilizados em muitos lugares com pouca ou nenhuma alteração.

Esses são alguns problemas que o Sequelize ajuda a resolver! Com ele, podemos evitar a criação de queries SQL para produzir as tabelas. Com o uso das `models` e `migrations` no Sequelize, o código se torna mais legível, extensível e manutenível.

Além disso, por meio do *mapeamento por objetos relacionais (**Active Record**)*, é possível criar as `relações` e `associações` entre as tabelas com o próprio *JavaScript*. Sendo ainda possível *migrar o database para outro banco de dados* sem precisar reescrever todo o código.
