# Callbacks

De forma resumida, `callback` *é uma função passada como parâmetro para outra função*.
A unção `setTimeout` é uma função de `callback`, Ela recebe dois parâmetros, o primeiro é a `função callback` que passamos através de uma *arrow function* e o segundo é o *tempo* em milisegundos.

`steTimeout(param1, param2)`

O primeiro parâmetro é uma callback sem nome: `() => {}`. O segundo parâmetro será o tempo de espera: `2000` (2000 milissegundos ou 2 segundos, por exemplo).
`setTimeout(() => {}, 2000)`;

## Exemplo prático de funções callback:
### trecho 1
Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas, `despesas` , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, `renda` , representa o quanto esta pessoa recebeu neste mesmo mês.
```javascript
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;
```

### Trecho 2
No segundo trecho vamos implementar uma função que trata estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.

Neste trecho, foi adicionada a função `despensaMensal`, que recebe 3 argumentos: `renda, despesas e callback`.

`callback` é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro `callback` receberá uma função que retornará o quanto gastamos no mês, ou seja, a `callback` vai realizar a lógica necessária para somar todos os gastos contidos no array de objetos `despesas` e retornará esse valor para a constante `despesaTotal`.
```javascript
const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};
```

```javascript
const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0] ,0);
    return despesaTotal;
};

despesaMensal(renda, despesas, somaDespesas);
```

Podemos observar a implementação da função callback , representada pela função somaDespesas . Essa função está tratando as informações contidas no array de objetos despesas e retornando o valor total de gastos.
1. Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
2. Implementamos a função despesaMensal que recebe três parâmetros: nossas `despesas`, nossa `renda` e a função `callback`.
3. Realizamos a implementação da função `callback` representada por `somaDespesas` que recebe nossos gastos mensais e retorna um valor de gastos total.
4. Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.
```javascript
// Declaramos nossa variável de despesas
// declaramos a variavel despesas
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

// declaramos a variavel renda
const renda = 1000;

const despesaMensal = (renda, despesa, callback) => {
  // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
  // que vai receber nosso parâmetro/variável "despesas"
  const despesaTotal = callback(despesa);
  // Definimos nosso saldo final, que é nossa renda - nossa despesa total
  const saldoFinal = renda - despesaTotal;
  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
  // Separamos cada item do nosso array de despesas 
  // e fazemos um reduce para somar os valores
  despesas.map((item) => Object.values(item));
  .reduce((acc, curr) => {
      acc += curr[0];
      return acc;
  },0)
};

despesaMensal(renda, despesas, somaDespesas);
```