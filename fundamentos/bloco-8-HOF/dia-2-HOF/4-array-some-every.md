# Array.some e Array.every
### `Array.some(item, index, array)`
- retorna `true` se ao menos *um* elemento do array satisfizer a condição.
- [documentação some](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [CodePen](https://codepen.io/pen/?template=abZoOZz)
  
### `Array.every(item, index, array)`
- retorna `true` se *todos* os elementos satisfizerem a condição.
- [documentação every](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [CodePen](https://codepen.io/pen/?template=NWrKqME)

## Array.some
```javascript
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// recebe 2 param, 1- a letra; 2- o proprio array
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
```
## Array.every
```javascript
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// recebe 2 param, 1- a letra; 2- o proprio array
const verifyFirstLetter = (letter, names) => names.every((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // false
console.log(verifyFirstLetter('X', listNames)); // false
```


## Array.some
```javascript
const grades = {
    portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).some((grade) => grade === 'Aprovado')
)
console.log(verifyGrades(grades)); // true
```
> Quando tiver objeto ele deve ser transformado em array para que possa ser acessado
> Como queremos apenas aferir os valores, usamos `Object.values(obj)` para pegar os valores das chaves e colocá-las em um array
# Array.every
```javascript
const grades = {
    portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
)
console.log(verifyGrades(grades)); // false
```
> Quando tiver objeto ele deve ser transformado em array para que possa ser acessado
> Como queremos apenas os valores das chaves, usamos `Object.values(obj)` para pegar os valores das chaves e colocá-las em um array


# Para fixar
### Dado um array de nomes e um nome, retorne **true** se ele estiver `contido` e caso contrário, retorne **false**.
_Como a condição é para verificar se existe `algum`, usamos `some`_.
```javascript
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some(element => element === name)
}
console.log(hasName(names, 'Ana')); // true
console.log(hasName(names, 'Ananias')); // false
```


### Dado um array de pessoas e uma idade mínima retorne **true** se `todas` tiverem a idade maior ou igual a mínima e caso contrário **false** .
_Como a verificação é sobre `todos` os elementos do array, usamos `every`_.
```javascript
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, minimumAge) => {
    return array.every(person => person.age >= minimumAge)
}
console.log(verifyAges(people, 18)); // false
```
> Nesse caso, como os objetos estão dentro de um array, **NÃO** precisamos fazer transformação alguma, basta chamar o método que vai percorrer e verificar o array.


