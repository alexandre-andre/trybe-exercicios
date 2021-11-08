# Operadores Lógicos
- `&&`	logical and
- `||`	logical or
- `!`	logical not
```javascript
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
```

```javascript
const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);
// false

console.log(conditionOne || conditionTwo);
// true
```

```javascript
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

```javascript

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
```


# Operador NOT
Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado `true` , podemos gerar o resultado oposto simplesmente fazendo `!variável` . Ou seja, `false`.
```javascript
console.log((2 + 2) === 4); //true
console.log(!(2 + 2) === 4); // false
```
Então, sabendo que o resultado original da operação ali em cima é true , quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final, que é false .

Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:
- Strings
```javascript
const maboulaLukunku = 'Melhor jogador do mundo';
console.log(!maboulaLukunku); // false
```

- Numbers
```javascript
console.log(!42); 
// false

console.log(!0);
// true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
```

- Valores nulos
```javascript
console.log(!null); // true
```

- Valores indefinidos
```javascript
console.log(!undefined); // true
```
...e em muitos outros elementos. As possibilidades são enormes!!!

