# Array.find
### `Array.find(item, index, array)`
- *item* - (mandatory) - pega o valor do item do momento
- *index* - (optional) - pega o índice do item
- *array* - (optional) - pega o aray inteiro

`find` é utilizado para achar o primeiro elemento que satisfaça a condição. Essa função que deverá ser passada precisa retornar true ou false.
Quando o primeiro elemento que atender a condição for acahado, a função (callback) retornará `true` e o `find` irá retornar esse elemento.
[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);
console.log(isEven); // 30
console.log(verifyEven(9)); // false
console.log(verifyEven(10)); // true

// opção 2 - sem precisar criar uma nova função
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30
```
- Primeiro passamos a função `verifyEven`, ela verifica se o número recebido é par. (par) ? 'true' : 'false'
- Quando passamos a `callback`, o `find` executará a função para cada um dos elementos do array, até achar o primeiro que atender a condição.



## find verificando duas condições
primeiro número do array que é divisível por 3 e 5 , caso ele exista:
```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3and5 = (number) => number % 3 === 0 && number % 5 === 0
const divisibleBy3and5 = numbers.find(findDivisibleBy3and5)
console.log(divisibleBy3and5)

// opção 2
const divisibleBy3and5_2 = numbers.find(number => number % 3 === 0 && number % 5 === 0)
console.log(divisibleBy3and5_2); // 30
```


## find procurando a primeira de 5 nomes
```javascript
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWith5letters = (name) => name.length === 5
const nameWith5letters = names.find(findNameWith5letters)
console.log(nameWith5letters); // 'Irene'

// opção 2
const findNamesWith5Letters_2 = names.find(name => name.length === 5)
console.log(findNamesWith5Letters_2); // 'Irene'
```


## find para encontrar a música com id igual a 31031685 , caso ela exista:
```javascript
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
    return musicas.find(item => item.id === id)
}

console.log(findMusic('31031685'))
// { id: '31031685', title: 'Partita in C moll BWV 997' }
```