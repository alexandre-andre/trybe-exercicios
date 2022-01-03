# Array.filter()
O `filter` é parecido com o `find`. A diferença é que o `filter` em vez de retornar apenas um elemento do array, o `filter` retorna um array com todos os elementos que satisfaçam a condição.
No exemplo abaixo, apenas substituiremos o find por filter .
```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) = number % 2 === 0;

const isEven = numbers.filter(verifyEven);
console.log(isEven); // [30, 22]

// opção 2 - sem precisar criar uma nova função
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2); // [30 , 22]
```


## filter em array de objetos
Outro exemplo de apenas pegar os elementos que não possuem alguma condição. Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:
```javascript
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => {
    arrayOfPeople.filter((person) => person.age < 18)
}
console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
```

### filter para remover um elemento
Retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.
```javascript
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const remPerson = (array, pessoa) => {
  return array.filter((person) => person !== pessoa)
}
console.log(rem(arrayMyStudents, 'Ricardo'));
// ['Maria', 'Manuela', 'Jorge', 'Wilson']
```
`filter` foi usado dentro de uma função que recebe **dois parâmetros**, o _array_ de valores e uma _string_, a _que será removido_. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado.



### Exemplo em filtragem de array e envio de mensagem
```javascript
const listaDeAprovados = [
  {nome: 'André', email: 'andre@email.com', nota: 51},
  {nome: 'Danielle', email: 'danielle@email.com', nota: 61},
  {nome: 'Sofia', email: 'sofia@email.com', nota: 100},
  {nome: 'Rafael', email: 'rafael@email.com', nota: 71},
  {nome: 'Tassia', email: 'tassia@email.com', nota: 51},
  {nome: 'Davi', email: 'davi@email.com', nota: 91},
];

/* EMAIL PARA CADA PESSOA APROVADA */
const enviarEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  console.log(mensagem);
};

/* FILTRA O ARRAY CRIANDO UM OUTRO QUE ATENDA DETERMINADA CONDIÇÃO */
const pessoasFiltradas = listaDeAprovados.filter((pessoa) => pessoa.nota >= 60)
console.log(pessoasFiltradas);
// [[object Object] {
//   email: "danielle@email.com",
//   nome: "Danielle",
//   nota: 61
// }, [object Object] {
//   email: "sofia@email.com",
//   nome: "Sofia",
//   nota: 100
// }, [object Object] {
//   email: "rafael@email.com",
//   nome: "Rafael",
//   nota: 71
// }, [object Object] {
//   email: "davi@email.com",
//   nome: "Davi",
//   nota: 91
// }]

/* PEGA ESSE NOVO ARRAY E PARA CADA ELEMENTO CHAMA A FUNÇÃO ENVIAREMAIL() PARA CADA ELEMENTO */
pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));
// "danielle@email.com: Parabéns Danielle, sua nota foi {pessoa.nota}"
// "sofia@email.com: Parabéns Sofia, sua nota foi {pessoa.nota}"
// "rafael@email.com: Parabéns Rafael, sua nota foi {pessoa.nota}"
// "davi@email.com: Parabéns Davi, sua nota foi {pessoa.nota}"
```