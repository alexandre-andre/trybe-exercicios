# Array.sort
### `Array.sort((item, index, array))`
## Em string 
```javascript
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
```

## Em números
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

Para ordenar corretamente numeros, deemos usar parametros
### Ordem crescente
```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
```


### Ordem decrescente
```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
```



### Ordenando um array por determinado parametro
````javascript
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

/** ORDENANDO POR IDADE CRESCENTE */
people.sort((a, b) => a.age - b.age)
console.log(people);
// [[object Object] {
//   age: 16,
//   name: "José"
// }, [object Object] {
//   age: 18,
//   name: "Mateus"
// }, [object Object] {
//   age: 19,
//   name: "Bruna"
// }, [object Object] {
//   age: 20,
//   name: "Cláudia"
// }, [object Object] {
//   age: 23,
//   name: "Ana"
// }]

/** ORDENANDO POR IDADE DECRESCENTE */
people.sort((a, b) => b.age - a.age)
console.log(people)
// [[object Object] {
//   age: 23,
//   name: "Ana"
// }, [object Object] {
//   age: 20,
//   name: "Cláudia"
// }, [object Object] {
//   age: 19,
//   name: "Bruna"
// }, [object Object] {
//   age: 18,
//   name: "Mateus"
// }, [object Object] {
//   age: 16,
//   name: "José"
// }]

/** ORDENANDO POR ORDEM ALFABÉTICA */
people.sort()
console.log(people)
// [[object Object] {
//   age: 23,
//   name: "Ana"
// }, [object Object] {
//   age: 20,
//   name: "Cláudia"
// }, [object Object] {
//   age: 19,
//   name: "Bruna"
// }, [object Object] {
//   age: 18,
//   name: "Mateus"
// }, [object Object] {
//   age: 16,
//   name: "José"
// }]
```

