# Mockando funções com Jest
O método `jest.fn()` configura-se como a forma mais simples de se mockar algo: ele transforma uma função em uma **simulação**.

Fazendo o teste para saber se a função é chamada, temos:
```javascript
test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});
```
Esse teste deveria passar, não? Afinal, a função foi chamada logo acima dele. Mas ele não passa e o erro nos indica o que fazer:
> **Matcher error** : received value must be a mock or spy function

Esse erro acontece porque a propriedade `toHaveBeenCalled` , assim como outras que serão ensinadas a seguir, são **exclusivas para funções simuladas**. Ou seja: *se você não simula uma função, a propriedade não funciona corretamente* .

Portanto, vamos utilizar o `jest.fn()` para testar a chamada dessa função:
```javascript
test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois = jest.fn(); // simula a chamada da funcao

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});
```
Ao declarar `divisivelPorDois = jest.fn()`; , estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função *divisivelPorDois* e que ela será uma *simulação* da função original.

**Por ser uma simulação, podemos especificar qual será o retorno da função**. Duas propriedades nos permitem fazer essa declaração: 
- `mockReturnValue(value)` - define um valor padrão de retorno
- `mockReturnValueOnce(value)` - retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes

```javascript
test("#divisivelPorDois", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true); // simula a funcao e define um valor padrao como retorno

  divisivelPorDois(); // chamada manaual da funcao, para o toHaveBeenCalled funcionar
  expect(divisivelPorDois).toHaveBeenCalled(); // verifica se a funcao eh chamada
  expect(divisivelPorDois()).toBe(true); // verifica se qdo a funcao eh executada o retorno é true
});
```

No exemplo acima, estamos manualmente chamando a função **divisivelPorDois()**; . Caso isso não seja feito, o teste `expect(divisivelPorDois).toHaveBeenCalled()` **irá falhar**.

Isso acontece porque **mockar uma função redefine seu comportamento, mas não a executa**. A propriedade `toHaveBeenCalled()` espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, utilizamos a propriedade `toHaveBeenCalledTimes(number)` :

```javascript
test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  // simulamos a chamada da funcao e definimos valores de acordo com a chamada
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0); // como n houve chamada o argumente eh 0

  expect(divisivelPorDois()).toBe("first call"); // primeira chamada - o retorno deve ser o da primeira chamada "first call"
  expect(divisivelPorDois).toHaveBeenCalledTimes(1); // chamado 1 vez

  expect(divisivelPorDois()).toBe("second call"); // segunda chamada - o retorno deve ser o da segunda chamada "second call"
  expect(divisivelPorDois).toHaveBeenCalledTimes(2); // chamado 2 vezes

  expect(divisivelPorDois()).toBe("default value"); // terceira chamada - o retorno deve ser o "default value""
  expect(divisivelPorDois).toHaveBeenCalledTimes(3); // chamado 3 vezes
});
```
