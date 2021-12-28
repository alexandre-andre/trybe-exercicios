Muitas vezes quando escrevemos em javascript, passamos funções de um lado para outro da aplicação, ou seja, função como parâmetro de função, função armazenadas em variáveis e por aí vai. 
Nesses casos, estamos tratando funções como valores, conhecido por lambda, e usamos inline-lambda dentro de invocações de funções em javascript

```javascript
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const printName = () => myName = 'Tata';
console.log(printName());
```


Exemplo com soma de valores
```javascript
function soma (num1 , num2) {
    return num1 + num2
}
console.log(soma(2, 2)); // 4

// em arrow
const soma = (num1, num2) => num1 + num2;
console.log(soma(2,2)); // 4


// em arrow
const soma = (num1, num2) => {
    return num1 + num2
}
console.log(soma(2, 2)); // 4
```


Exemplo contagem de palavras
```javascript
function contaPalavras (frase) {
    frase.split(' ').length;
}
console.log(contaPalavras('koe meu cumpadi')); // 3

// em arrow 
const contaPalavras = frase => frase.split(' ').length 
console.log(contaPalavras('koe meu cumpadi')); // 3
```


Exemplo criando objeto
```javascript
function objetoPessoa (nome, idade) {
    return {
        nome,
        idade
    }
}
console.log(objetoPessoa('Hanna', 20)); // {nome: 'Hanna', idade: 20}


// em arrow 
const objetoPessoa = (nome, idade) => ({nome, idade})
console.log(objetoPessoa('Hanna', 20)); // {nome: 'Hanna', idade: 20}
```


Exemplo com multiplicação 
```javascript
function mul(num) {
    return num * 2
}
console.log(mult(5)); // 10

// em arrow
const mult = num => num * 2
console.log(mult(5)); // 10


function mult2 (num1, num2) {
    return num1 * num2
}
console.log(mult2(10, 2)); // 20

// em arrow
const mult2 = (num1, num2) => num1 * num2
console.log(mult2(10, 2)); //20
```


Arrow com função de callback
```javascript
const myFunc = callback => {
    const value = 77;
    callback(value)
}
// callback recebe por argumento valor de const value dentro da função 

myFunc((num) => { console.log(num) }) // 77
myFunc((num) => { console.log(num / 2) }) // 38.5
// quando myFunc é acionada ela já tem nela o valor da callback, só espera uma ação
```


## Arrow function com HOF
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. 

Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
```javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// map, pega o array e reduz a um dado
console.log(materials.map(material => material.length)
// Array [8, 6, 7, 9]
```


## Sintaxe Básica
```javascript
(param1, param2, ..., paramN) => {statements}
(param1, param2, ..., paramN) => expression
// equivalente a: { return expression; }

// Parenteses são opcionais quando só há um nome de parametro
(param) => { statements }
param => { statements }

// A lista de parametros para uma função sem parâmetros deve ser escrita com um par de parênteses
() => { statements }
```

## Sintaxe Avançada
```javascript
// envolva o corpo da função em parênteses para retornar uma expressão literal de objeto
params => ({foo: bar})

// parâmetros rest e parâmetros padrões são suportados 
(param1, param2, ...rest) => { statements } 
(param1 = defaultValue1, param2, ..., paramN = defaultValueN) => { statements }

// Desestruturação dentro da lista de parâmetros também é suportado
let f = ([a,b] = [1,2], {x: c} = {x: a + b}) => a + b + c
f(); // 6
```

- [rest](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [default parameters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [destructuring](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


## Funções mais curtas
```javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
elements.map(element => element) // ["Hydrogen", "Helium", "Lithium", "Beryllium"]
// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Neste caso, porque só precisamos da propriedade length, podemos usar o parâmetro de destruição (destructing parameter):
// Note que a string `"length"` corresponde a propriedade que queremos obter enquanto que a obviamente propriedade não especial `lengthFooBArX` corresponde ao primeiro parametro do metodo
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
```

## Sem *this* separado
Antes das arrow functions, toda nova função definia seu próprio valor de *this*. Este comportamento é inportuno com um estilo de programação orientado a objeto
```javascript
function Person(){
    // o constructor Person() define `this` como uma instância dele mesmo
    this.age = 0;

    setInterval(function growUp() {
        // Em modo não estrito, a função growUp() define `this`
        // como o objeto global (porque é onde growUp() é executado.),
        // que é diferente ao `this`
        // definido pelo construtor Person().
        this.age++;
    }, 1000);
}
let p = new Person();
```

Uma arrow function _não tem seu próprio this_; o valor this do contexto léxico encapsulado é usado.
```javascript
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // `this` corretamente refere-se ao objeto Person
    }, 1000)
}
let p = new Person()
```

## Relação com strict mode
```javascript
let f = () => { 'use strict': return this };
f() === windows; // ou o objeto global  
```

Continua em...
### Documentação
[MDN - arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

