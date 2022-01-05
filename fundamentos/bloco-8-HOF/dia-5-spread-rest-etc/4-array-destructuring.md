# Array destructuring
Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring .

Podemos utilizar a desestruturação para acessar valores de um objeto e atribuí-los a variáveis. 
## sem destructuring
```javascript
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```


## COM destructuring
```javascript
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```


## Para Fixar
### sem destructuring
```javascript
const saudacoes = ['Olá', (saudadao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá
```

### COM destructuring
```javascript
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)]
const [ string, print ] = saudacoes
print(string); // Olá
console.log(string) // Olá
console.log(print) // (saudacao) => window.runnerWindow.proxyConsole.log(saudacao)
```
#

### sem destructuring
```javascript
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
```

### COM destructuring
```javascript
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log([comida = 'arroz', animal = 'gato', bebida = 'água'])
// ["arroz", "gato", "água"]
```

#
### sem destructuring
```javascript
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];
```


### COM destructuring
```javascript
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [,,,seis,oito,dez,doze] = numerosPares
console.log([seis, oito, dez, doze]); // [6, 8, 10, 12]
```