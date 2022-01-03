# Array.reduce()
O `reduce` possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de `acumulador`. 
Função do accumulator: 
- Serve para acumular dentro de si os resultados das funções. 
Caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial do acumulator será a primeira posição do array. 
- Na primeira iteração ele realiza a função com o primeiro valor do array que está em acumulator com a segunda posição que está em seu segundo parâmetro curr , que é chamado de current. 
- Na segunda vez, acumulator conterá o retorno da primeira iteração
- Na terceira, o retorno da primeira e da segunda, e assim por diante.

## A função soma todos os valores de um array:
### com o `for`
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index++) {
    sumNumbers += numbers[index];
};
console.log(sumNumbers); // 113
```
- criamos uma variável para acumular o resultado de cada iteração do `for`, a soma de cada resultado - `let sumNumbers`
- setamos um valor inicial para a variável `sumNumbers`



### com `reduce`
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((accumulator, number) => accumulator + number);
console.log(sumNumbers); // 113

// ou seja
const getSum = (result, number) = result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
```
- a função passada por parâmetro recebe dois parâmetros, o `accumulator` (result) e o elemento do array de cada iteração, `number`
- como a função é um arrow function que possui apenas uma linha, o retorno de cada iteração será: `result + number`
- o retorno será salvo no primeiro parâmetro, `result`. É como se estivesse fazendo `sumNumbers = sumNumbers + numbers[index]`, mas nesse caso seria `result = result + number`.


```javascript
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator); // 1 3 6 10 15
    return accumulator + number
}

const sumNumbers = collection.reduce(getSum);
console.log(sumNum); // 15
```


## Outra diferença do reduce
O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Veja a seguir, será usado o último exemplo dado da soma dos números:
### sem a alteração
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 32 47 50 52 47 103
    return result + number
};

const sumNumbers = numbers.reduce(getSum)
console.log(sumNumbers); // 113
```


### com a alteração
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 0 32 47 50 52 47 103
    return result + number
};

const sumNumbers = numbers.reduce(getSum, 0);
console.log(sumNumbers); // 113
```
Dessa forma, com a alteração, o accumulator tem o valor inicial passado 


## Outra utilidade do reduce
Neste exemplo, serão comparados valores para buscar o maior valor em um array.
### com for
```javascript
const numbers = [50, 85, -30, 3, 15];
const bigger = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index > bigger]) {
        bigger = numbers[index]
    }
}
console.log(bigger); // 85
```


### com `reduce`
```javascript
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (
    (bigger > number) ? bigger : number
);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
```
Agora a função passada pode possuir dois tipos de retorno:
1. O retorno do próprio  acumulador `bigger` (no caso `true` do ternário), o que sgnifica que ele não será modificado; ou
2. O valor do elemento do array, `number`, que indica que possui um valor maior que `bigger`.
### Curiosidade, caso o valor inicial do acumulator seja maior que a a soma
```javascript
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (
    (bigger > number) ? bigger : number
);

const bigger = numbers.reduce(getBigger, 1000);
console.log(bigger); // 1000
```


## Somando os numeros pares
### com `filter` e `reduce`
```javascript
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filterPairs = numbers.filter(number => number % 2 === 0);
const sumPairs = filterPairs.reduce((acc, number) => acc + number, 0)
console.log(sumPairs); // 152


// ou
const getEven = (number) => number % 2 === 0;
const sumEven = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumEven)
console.log(sumNumbers(numbers)); // 152
```


### `só com reduce`
```javascript
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (currentValue, number) => (
    (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumEven);
console.log(sumNumbers); // 152
```


### Documentação
- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [map, reduce e filter](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
- [video](https://www.youtube.com/watch?v=D_MExaVe95w)