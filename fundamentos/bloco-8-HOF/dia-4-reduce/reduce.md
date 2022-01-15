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


# Pegando o maior valor de um array com reduce
## pegando maior valor
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


### COM `reduce`
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


#
### Curiosidade:
E se caso o valor inicial do acumulator seja maior que a a soma ?
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

#
## Concatenando elementos de arrays
```javascript
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  return array.reduce((acc, element) => acc.concat(element), [])
}
console.log(flatten(arrays)); // ['1', '2', '3', true, 4, 5, 6 ]
```
#
### `map` e `reduce`
Mostrando na tela um relatório que diz em qual matéria o estudante foi melhor. 
```javascript
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
    return (acc.nota > materia.nota) ? acc : materia
};

const reportBetter = (array) => array.map((student) => (
    {
        name: student.name,
        materia: student.materias.reduce(getBestClass).materia,
        nota: student.materais.reduce(getBestClass).nota
    }
))
console.log(reportBetter(estudantes));
// [
//   { name: 'Jorge', materia: 'Português', nota: 79 },
//   { name: 'Mario', materia: 'Biologia', nota: 92 },
//   { name: 'Jorge', materia: 'Português', nota: 90 },
//   { name: 'Maria', materia: 'Química', nota: 92 },
//   { name: 'Natalia', materia: 'Português', nota: 70 },
//   { name: 'Wilson', materia: 'Português', nota: 82 }
// ]
```

#
### reduzindo a um tipo de dado tipo lista
Lista de jogos e preços
```javascript
const game = [
  { jogo: 'PES', price: 95.03 },
  { jogo: 'Mario', price:  101.09 },
  { jogo: 'CoD', price: 112.03 },
  { jogo: 'NSFU', price: 85.01 },
  { jogo: 'SONIC', price:  0.05 },
  { jogo: 'DIABLO', price: 0.03 }
]

const productList = game.reduce((acc, { jogo, price }) => `${acc} - ${jogo}, R$${price}\n`, '')
console.log(productList);
//  - PES, R$95.03
//  - Mario, R$101.09
//  - CoD, R$112.03
//  - NSFU, R$85.01
//  - SONIC, R$0.05
//  - DIABLO, R$0.03
```

#
### contagem de reicidência de alguma dado
```javascript
const people = [
  { name: 'Jorge', age: 18, materia: 'Português', nota: 79 },
  { name: 'Mario', age: 19, materia: 'Biologia', nota: 92 },
  { name: 'Jorge', age: 20, materia: 'Português', nota: 90 },
  { name: 'Maria', age: 18, materia: 'Química', nota: 92 },
  { name: 'Natalia', age: 18, materia: 'Português', nota: 70 },
  { name: 'Wilson', age: 19, materia: 'Português', nota: 82 }
]

const ageFrequency = people.reduce((acc, { age }) => {
    acc[age] = acc[age] + 1 || 1
    return acc
}, {})

console.log(agesFrequency)
// { 18: 3, 19: 2, 20: 1}
```

#
## `map, filter e reduce juntos`
```javascript
const movies = [
    { title: 'Vingadores Ultimato' , peopleamount: 19_686_119 , distributedBy: 'Disney' },
    { title: 'Titanic' , peopleamount: 17_050_000, distributedBy: 'Paramount / 20th Century' },
    { title: 'O Rei Leão' , peopleamount: 16_267_649, distributedBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita' , peopleamount: 14_572_181, distributedBy: 'Disney' },
    { title: 'Tubarão' , peopleamount: 13_035_000, distributedBy: 'Universal' },
    { title: 'Nada a perder' , peopleamount: 11_944_090, distributedBy: 'Paris Filmes' },
    { title: 'Os Dez Mandamentos' , peopleamount: 11_259_821, distributedBy: 'Paris / DowntownFilmes' },
    { title: 'Tropa de Elite 2' , peopleamount: 11_204_009, distributedBy: 'Zazen' },
    { title: 'Os vingadores' , peopleamount: 10_968_065, distributedBy: 'Disney' },
]

console.log(
    movies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce((acc, { peopleamount}) => acc + peopleamount, 0)
); // 61494014
```

```javascript
const pets = [
    { name: 'chico' , age: 3 , type: 'Dog' },
    { name: 'Titanic' , age: 1, type: 'Cat' },
    { name: 'Leão' , age: 5, type: 'Dog' },
    { name: 'chicó' , age: 12, type: 'Dog' },
    { name: 'Tubarão' , age: 7, type: 'Cat' },
    { name: 'cachorro' , age: 7, type: 'Cat' },
    { name: 'mouse' , age: 6, type: 'Cat' },
    { name: 'Tropa' , age: 3, type: 'Dog' },
    { name: 'doidao' , age: 8, type: 'Dog' },
]

const getDogs = ({ type }) => type === 'Dog'
console.log(pets.filter(getDogs));
// [
//   { name: 'chico', age: 3, type: 'Dog' },
//   { name: 'Leão', age: 5, type: 'Dog' },
//   { name: 'chicó', age: 12, type: 'Dog' },
//   { name: 'Tropa', age: 3, type: 'Dog' },
//   { name: 'doidao', age: 8, type: 'Dog' }
// ]

const convertToHumanAge = ({ name, age }) => (
  {
      name,
      convertedAge: age * 7
  }
)
console.log(
  pets
  .filter(getDogs)
  .map(converToHumanAge)
)
// [
//   { name: 'chico', convertedToHumanAge: 21 },
//   { name: 'Leão', convertedToHumanAge: 35 },
//   { name: 'chicó', convertedToHumanAge: 84 },
//   { name: 'Tropa', convertedToHumanAge: 21 },
//   { name: 'doidao', convertedToHumanAge: 56 }
// ]
```


### Documentação
- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [map, reduce e filter](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
- [video](https://www.youtube.com/watch?v=D_MExaVe95w)