# Mockando Módulos
Diferente do `jest.fn()` , que simula apenas uma função por vez, temos o `jest.mock()` , que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.
- `jest.fn()` , simula apenas uma função por vez
- `jest.mock()` , mocka todo um pacote de dependências ou módulo de uma vez

Por exemplo: em um arquivo chamado `math.js` , temos as seguintes funções:
```javascript
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
```

Com `jest.fn()` - **mockamos** todas as funções uma a uma. Já com `jest.mock()` - **mockamos** todas as funções com um só comando:

```javascript
jest.mock('./math');
```

Uma vez que *mockarmos* todo o arquivo `math.js` com `jest.mock('./math/)`, passamos a simular o comportamento de todas as suas funções, porém sua implementação individual permanece indefinida. Caso passemos os parâmetros 1 e 2 para a função `somar` , por exemplo, o retorno será "*undefined*". *Isso se dá porque a simulação deixou de acessar o comportamento da função original do `math.js`* .

Apesar de podermos definir um retorno com `mockReturnValue` , há casos em que é útil ir além dessa capacidade de retornar valores e *criar um novo comportamento* para a função simulada. O método `mockImplementation(func)` faz isso. Ele aceita uma função que deve ser usada como implementação.
```javascript
const math = require('./math');
jest.mock("./math"); // mocka todo um pacote de dependências ou módulo de uma vez

test("#somar", () => {
  // math.somar vai usar uma funcao x q serah usada como implementacao
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2); // math.somar vai usar os valores 1 e 2

  expect(math.somar).toHaveBeenCalled(); // a funcao deve ser chamada
  expect(math.somar).toHaveBeenCalledTimes(1); // a funcao deve ser chamada 1 vez
  expect(math.somar).toHaveBeenCalledWith(1, 2); // a funcao deve ser chamada com os valores 1 e 2
  expect(math.somar(1, 2)).toBe(3); // espera que math.somar(1,2) deve retornar o valor 3
});
```

- `toHaveBeenCalledWith(...args)` , valida quais parâmetros foram passados para a função.

Assim como o `mockReturnValueOnce` , podemos também implementar uma funcionalidade para apenas uma chamada com `mockImplementationOnce`.