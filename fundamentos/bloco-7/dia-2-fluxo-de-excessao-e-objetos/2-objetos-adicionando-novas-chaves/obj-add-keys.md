# Objetos: Parte I - Adicionando novas chaves (keys)
```javascript
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

// opcao 1
customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
// opcao 2
customer2['lastName'] = 'Silva';
console.log(customer2);
```
- objeto.nomeDaPropriedade
- objeto[variavelQueContemONomeDaPropriedade]

Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
```javascript
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
```


Agora, uma função que recebe três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
```javascript
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Player',
};

const createKey(obj, key, value) {
    let keyName = key;
    let keyValue = value;
    obj.keyName = KeyValue;
    return `chave => ${keyName}: 
 valor => ${keyValue}`
}
console.log(create(customer, 'lastName', 'Carlos'))
// "chave => lastName: 
//  valor => Carlos"
console.log(customer)
// {
//   age: 22,
//   firstName: "Roberto",
//   job: "Player",
//   lastName: "Carlos"
// }
```
