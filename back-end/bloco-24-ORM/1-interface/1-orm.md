# O que é ORM
Mapeamento objeto-relacional - ORM (Object-Relational Mapping) é uma técnica que permite fazer um mapeamento estrutural entre as entidades do banco de dados e os objetos que as representam no código JavaScript. O mapeamento objeto-relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados, é como se fosse o intermediador entre eles.

Suponha que temos uma aplicação que gerencia clientes. Nela, teremos um objeto chamado Pessoas.
- Esta é a representação da entidade Pessoas na aplicação:
```json
{
  "id": 1,
  "name": "Leonardo",
  "age": 30,
  "height": 180
}
```
- Já para representar Pessoas no banco de dados relacional, nós usamos tabelas, onde cada linha vai representar uma entidade. 

Imagine que nosso sistema recebe informações de uma nova pessoa e precisa salvar isso no banco de dados. O que fazemos nesse caso?

Para isso, precisamos implementar funções que "indiquem", entre outras coisas, que o nome que recebemos pode ser armazenado na coluna name do banco de dados. Além disso, precisaríamos escrever manualmente o código SQL que faz a inserção dos dados no banco, de acordo com a tecnologia que estamos utilizando (MySQL, PostgreSQL etc).

Agora imagine ter 15 tabelas, cada uma com 8 colunas, múltiplos relacionamentos se cruzando... Pense bem o quão complexo nosso projeto pode ficar ao longo do tempo.

Com ORM não precisamos mais escrever uma query SQL "crua" para cada vez que formos inserir um registro na tabela. A própria biblioteca fica responsável por isso. Você apenas passa o objeto JavaScript para ela e ela insere os dados no banco de dados.

No Node.js, temos o Sequelize, uma biblioteca de ORM bem conhecida e com suporte aos bancos de dados PostgreSQL, MariaDB, MySQL, SQLite e Microsoft SQL Server.
