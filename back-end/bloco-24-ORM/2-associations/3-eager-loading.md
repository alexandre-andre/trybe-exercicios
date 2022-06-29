# Eager Loading
É um método **carrega TODOS os dados na mesma request**. Logo, ao utilizar `Eager Loading`, todas as informações são trazidas, independente se vamos usá-las ou não. Este modo é *útil para cenários em que sabemos, já de antemão, que sempre vamos precisar de todos os dados das entidades envolvidas*.

Vamos alterar as informações nas tabelas. Para isso, utilizaremos os seeders já criados.

Abra o arquivo XXXXXXXXXXXXXX-employees.js dentro da pasta seeders, apague tudo que havíamos colocado antes e copie o código abaixo:
```js
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49 },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19 },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51 },
        { first_name: 'Robin', last_name: 'Mathias', age: 63 },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};
```

Depois, abra o arquivo XXXXXXXXXXXXXX-addresses.js dentro da pasta seeders, limpe-o e copie o código abaixo:
```js
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Vicente Alvarenga',
          number: 80,
          employee_id: 1,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
```


## Para remover as tabelas antigas, depois recriá-las e, por último, executar os seeders:
```
npx sequelize db:migrate:undo:all
npx sequelize db:migrate
npx sequelize db:seed:all
```


## Utilizando o Eager loading na prática.
Vamos voltar ao arquivo `index.js` e criar mais uma rota:
```js
// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
```


Além das propriedades que já citamos, o campo include pode manipular os dados que serão retornados. Por exemplo, **se não quisermos o acesso ao número do endereço**, bastaria alterar o código, adicionando a propriedade `attributes` e dentro dela o que queremos fazer:
```js
// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) =>  {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
           include: [{
              model: Address, as: 'addresses', attributes: { exclude: ['number'] }, // exclui a coluna number da impressao
           }],
//       });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
```

Dessa maneira, o campo *number* será `excluído` do retorno da *requisição*.