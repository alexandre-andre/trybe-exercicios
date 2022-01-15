# First-Class Functions
Significa que as funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções.
```javascript
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable); //  [Function: sum]
console.log(sumVariable(5, 10)); // 15
```
Vemos a declaração da função sum acontecendo e a atribuição da mesma função dentro de uma variável chamada sumVariable.

Da mesma forma:
```javascript
const sum = (number1, number2) => {
  return number1 + number2;
};
console.log(sum); //  [Function: sum]
console.log(sum(5, 10)); // 15
```
Quando utilizamos arrow functions , estamos justamente utilizando da capacidade do javascript de conseguir armazenar a função dentro de uma variável


### Passar funções como argumento para outras funções:
```javascript
const sayHello = () => `Hello moto`
const printGreeting = (callback) => {
    console.log(callback);
}
printGreeting(sayHello); // () => `Hello moto`
```


### Retornar uma função de outra função:
```javascript
const sumFixAmount = (amount) => {
    return (number) => amount + number
}

// ou 
// const sumFixAmount = (amount) => (number) => amount + number

const initialSum = sumFixAmount(3)
console.log(sumFixAmount(3)); // (number) => amount + number
console.log(initialSum(10)); // 13
```