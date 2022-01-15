# Default Destructuring

O que acontece quando acessamos:
- uma propriedade que **não existe** em um objeto?
- um valor em uma posição que **não existe** em um array?
O valor retornado é undefined, veja:
```javascript
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality); // undefined
```


Se quisermos dar uma valor padrão para essa propriedade, podemos fazer isso utilizando o `default destructuring`:
```javascript
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
}

const { nationality = 'Brazilian' } = person
console.log(nationality); // 'Brazilian
```

Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
```javascript
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(x); // 1.0
console.log(y); // 2.0
console.log(z); // 0
console.log(position2d); // [1.0, 2.0]
console.log([x, y, z = 0]); // Uncaught TypeError: Assignment to constant variable.
```


## Para Fixar
Do jeito que está, quando passamos `person` para a função `GetNationality` o retorno é `João is undefined`. 

```javascript
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is undefined
```


## aplicando o default destructuring
Ajustando a função `GetNationality` para que a chamada `GetNationality(person)` retorne `João is Brazilian`.
```javascript
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian
```

