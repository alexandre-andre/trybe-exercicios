# Seeders
Toda vez que executamos as migrations, nosso banco de dados é criado do zero, ou seja, sem dados dentro das tabelas.

Um seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação.

## Exemplo prático
Suponha que estamos trabalhando num projeto que é um e-commerce. Acabamos de entrar nesse projeto e estamos montando nosso ambiente. Já executamos as migrations e nosso banco de dados foi criado. Em seguida, executamos o projeto localmente. Quando entramos na home do site não existe nenhum produto, nenhuma categoria, nenhuma marca, nenhum usuário cadastrado.

▶️ Os seeders existem pra resolver problemas como esse! As bibliotecas de mapeamento objeto-relacional permitem que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem criados. Ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado!

No exemplo do e-commerce acima, poderíamos criar seeds responsáveis por gerar informações de produtos, marcas, categorias etc., toda vez que um banco de dados fosse criado. Com isso, sempre que criássemos o banco de dados do zero e executássemos o projeto, teríamos um e-commerce com as informações básicas para que fosse possível navegar. Isso é especialmente útil quando, num contexto de testes automatizados, precisamos criar um banco e povoar com dados para testá-los!


## Para gerar um seed
```
npx sequelize seed:generate --name users
```

O arquivo será criado dentro da pasta seeders com o mesmo formato do arquivo de uma migration. Agora, devemos adicionar ao arquivo criado quais informações aquele seed vai gerar. O código abaixo vai adicionar dois usuários ao banco de dados:
seeders/[timestamp]-users.js
```js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
```

Na função acima, estamos utilizando o parâmetro recebido pela função queryInterface para conversar com o banco de dados. Dessa forma, conseguimos inserir os dados que quisermos. Também estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users. O queryInterface tem a função `bulkInsert`, a qual estamos utilizando, que `insere múltiplos dados na tabela`.

O `seed` segue o mesmo princípio de `up` e `down`, ou seja, devemos colocar também o que o seed deve fazer caso precise reverter a operação.

## Para executar o seed:
```
npx sequelize db:seed:all
```

## Para reverter o seed:
```
npx sequelize db:seed:undo:all
```
