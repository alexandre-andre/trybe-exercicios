# Operações assíncronas
Operações em JavaScript são tradicionalmente síncronas.
Em uma linha de produção de automóveis por exemplo, várias etapas de produção são codependentes. Podemos relacionar estas etapas de produção às operações síncronas em JavaScript.
```javascript
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');
```

O `setTimeout`, neste exemplo, executa uma função 2000 milisegundos após a execução do código, independente do proceso sendo feito, quando se passar 2000 milisegundos o `setTimeout` executará sua função.
```javascript
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
```

Esta função está sendo utilizada para simular comportamentos assíncronos.
Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados.

### Um pouco da prática.
```javascript
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // [1, 2, 3]
```

```javascript
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
```

### Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
```javascript

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber((numbers, 1)), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => console.log(numbers), 3000); // [3, 2, 1]
```
Além de adicionar o `setTimeout`, o array `[1, 2, 3]` foi modificado para `[2, 3, 1]`.
Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1.


[setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)

