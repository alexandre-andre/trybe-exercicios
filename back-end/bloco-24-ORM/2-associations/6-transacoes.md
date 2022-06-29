# Transações
Uma transação simboliza uma unidade de trabalho indivisível executada do banco de dados de forma confiável e independente de outras transações. As ações dessa unidade de trabalho não podem ser mescladas com ações de outras transações. O conceito de uma unidade de trabalho indivisível é chamado de atomicidade. Em outras palavras, uma transação de banco de dados relacional pode conter um ou mais comandos SQL, que por sua vez deverá ser executada por completo para ter sucesso.

Trazendo para um cenário real, o exemplo mais comum para explicar uma transação seria uma transferência de dinheiro entre duas contas correntes. Vamos imaginar que o usuário A vai transferir R$ 100,00 para o usuário B.

Para realizar a transferência, precisamos de duas operações:
- uma operação para retirar R$ 100,00 da conta da pessoa usuária A e
- uma operação para adicionar R$ 100,00 na conta da pessoa usuária B.

Esse processo completo é uma operação atômica. Ou ambas acontecem, ou nada acontece.

Imagine que, quando executamos essa transferência, por algum motivo não foi possível adicionar os R$ 100,00 na conta da pessoa usuária B. Porém, já havíamos removido os R$ 100,00 da conta da pessoa usuária A. Teríamos um baita problema, correto? Com o uso de transações, as operações só seriam executadas no banco de dados caso todas as operações resultassem em sucesso. Caso alguma operação falhe, automaticamente o banco de dados reverte as demais operações. Com isso garantimos a integridade dos dados.


## DB Transactions
Uma transação de banco de dados relacional, por definição, deve ser atômica, consistente, isolada e durável, mais conhecida pela sigla `ACID` (*atomicidade - consistência - isolamento - durabilidade*):
- **Atomicidade**: todas as operações definidas na transação devem ser concluídas com sucesso. Se algo falhar, a transação inteira falha;
- **Consistência**: todas as regras do banco de dados devem ser respeitadas, ou seja, estrutura de tabelas, chaves estrangeiras, campos restritos, etc.;
- **Isolamento**: uma transação não pode interferir em outra transação.
- **Durabilidade**: uma vez que a transação foi finalizada, os dados ali modificados devem ser armazenados de forma permanente.

> Sempre que possível, devemos utilizar transações, pois irá fornecer dados mais confiáveis, diminuindo as chances de erro. O Sequelize NÃO usa, por default, transações. Portanto, precisa-se configurá-lo para utilizar as transações.


## Caso de uso
Imagine a seguinte situação: temos um endpoint em que, em um mesmo formulário, precisamos preencher a tabela de empregados e a tabela de endereço. Mas precisamos garantir a atomicidade, ou seja, precisamos cadastrar o usuário e o endereço de uma vez e, caso alguma coisa falhe, precisamos reverter essa operação.
```js
// const express = require('express');
const bodyParser = require('body-parser');
// const { Address, Employee } = require('./models');

// const app = express();
app.use(bodyParser.json());

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

// ...

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create({ firstName, lastName, age }); // cria uma nova linha em Employee com os dados

    await Address.create({ city, street, number, employeeId: employee.id }); // cria uma nova linha em Address com os dados

    return res.status(201).json({ message: 'Cadastrado com sucesso' }); // se tudo certo
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' }); // caso haja algum erro, nada eh feito
  }
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
```

O problema da operação acima é que, caso ocorra qualquer tipo de erro na operação de salvar o endereço no banco, a pessoa usuária vai ficar cadastrada de forma inconsistente, pois o registro na tabela de usuário foi concluído com sucesso. Para garantir que vamos salvar os dois objetos ou não vamos salvar nada, usamos o `recurso de transação`.

Existem dois tipos de transações dentro do Sequelize: `Unmanaged transactions` e `Managed transactions`.

- ### `Unmanaged transactions`
Para esse tipo de transaction, é preciso indicar manualmente a circunstância em que uma transação deve ser finalizada ou revertida. Exemplo de código:

> Observação: para a execução desse código, é necessário que o arquivo de configuração `config.json`, seja passado para JavaScript `config.js` para que se tenha acesso as informações contidas dentro desse arquivo.
```js
// const express = require('express');
// const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// const { Addresses, Employees } = require('./models');
const config = require('./config/config');

// const app = express();
// app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

// ...

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction(); // esperamos a execucao a transaction

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t }, // esperamos que q transaction esteja ok
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }, // esperamos que q transaction esteja ok
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
// ...
```

- ### `Managed transactions`
O próprio Sequelize controla quando deve finalizar ou reverter uma transação:
Exemplo de código:
```js
// ...
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });

      return res.status(201).json({ message: 'Cadastrado com sucesso' });
    });

    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
```

`Transactions` detém o princípio da `atomicidade`, *evitando popular o banco de dados de forma inconsistente*. Sempre que for fazer algum tipo de operação que envolva duas ou mais tabelas, é bastante recomendado usar uma transação para envelopar as operações de escrita. Isso serve para operações `UPDATE` e `DELETE` também.
