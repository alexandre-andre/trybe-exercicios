# Spread operator
Como você faria para adicionar itens a um array? Você pode ter pensado em usar o push , como no exemplo abaixo:
```javascript
const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]
```

### agora com `spread`
```javascript
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
```


## spread juntando arrays
```javascript
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */
```


## spread como parâmetro
Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
```javascript
const imc = (peso, altura) = (peso / altura) * 2;
const patientInfo = [60, 1.70]

console.log(imc(...patientInfo)); // 20.76
```


## spread em funções que recebem vários parâmetros
Math.max, por exemplo
```javascript
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumeros)); // 800
console.log(Math.min(...randomNumeros)); // 5
```


## spread com objetos
```javascript
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = {...people, ...about};
console.log(customer);
// [object Object] {
//   address: "Av. Getúlio Vargas, 1000",
//   age: 25,
//   id: 101,
//   name: "Alysson",
//   occupation: "Developer"
// }
```


## spread com função
```javascript
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mamão', 'abacate', 'cereja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return array = [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
// ["banana", "uva", "manga", "mamão", "abacate", "cereja"]
```