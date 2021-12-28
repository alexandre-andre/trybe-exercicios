# Objetos: Parte V - Object.assign
Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.
```javascript
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
```

Exemplo:
```javascript
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family);
console.log(person);
/* 
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } 
*/
```

APenas para verificação:
```javascript
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }
```

Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o `próprio objeto destino`, que foi alterado adicionando as novas propriedades.

Observe:
```javascript
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);
clone.name = 'Maria';
console.log('Mudando a propriedade ame através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }

person.lastName = 'Ferreira';
console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }n
```


Outra forma de copiar objeto
```javascript
const obj = { value1: 10, value2: 11 }
const cloneObj = obj;
```
Se modificarmos o cloneObj, teremos o mesmo resultado anterior, de forma que o obj também é alterado.

Para resolver esse problema, podemos passar como primeiro parâmetro do `object.assign` um objeto vazio `{}` e armazenar seu retorno em uma variável.
```javascript
const person = {
    name: 'tatu'
};

const lastName = {
    lastName: 'bolinha'
};

const newPerson = Objetc.assign({}, person, lastName);
console.log(newPerson) // { lastName: "bolinha", name: "tatu" }
newPerson.name = 'kata'
console.log(newPerson) // { lastName: "bolinha", name: "kata" }
console.log(person) // { name: "ẗatu"}
```



