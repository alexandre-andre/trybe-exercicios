# Lazy Loading
O método `Lazy Loading` consiste em *NÃO especificar uma propriedade includes no momento de realizar a query no banco*. Dessa forma, cria-se a possibilidade de termos dois usos para o mesmo endpoint.

Para utilizarmos duas ações diferentes em um endpoint, iremos usar a **query string** `includeAddresses`, na qual, caso o parâmetro dela seja `true`, *os endereços daquele funcionário também serão retornados*.

Imagine que exista a função `getAddress` que tem como responsabilidade buscar todos os endereços de acordo com o `employee_id`:
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

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
       const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

       if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
```

O método `LAZY LOADING` é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se utilizarmos o `EAGER LOADING`, buscaríamos os dados dos funcionários mesmo quando `includeAddresses` não for informado, e precisaríamos excluir a chave addresses do resultado do banco. Com o `LAZY LOADING`, podemos carregar apenas os dados do funcionário e dos endereços apenas quando necessário, economizando recursos do banco.