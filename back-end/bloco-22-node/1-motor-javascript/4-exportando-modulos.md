# Exportando módulos
Para exportar algo no sistema CommonJS, utilizamos a variável global `module.exports`, atribuindo a ela o valor que desejamos exportar:
```js
// brlValue.js
const brl = 5.37;

module.exports = brl;
```

Note como utilizamos as palavras-chave `module.exports`: como vimos anteriormente, um módulo possui um escopo isolado, ou seja, suas funções, variáveis, classes e demais definições existem somente dentro do módulo. O `module.exports` nos permite definir quais desses "objetos" internos ao módulo serão **exportados**, ou seja, estarão acessíveis para os arquivos que importarem aquele módulo.

**O `module.exports` pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins**.

No arquivo acima estamos exportando do nosso módulo o valor da constante `brl`, que é `5.37`. Ao importarmos esse módulo, receberíamos o valor `5.37` como resposta. Apesar disso funcionar, exportar um único valor constante assim não é comum. *O mais frequente é*:
```js
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
```

Agora estamos exportando uma função, de modo que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.

O uso desse nosso módulo se daria da seguinte forma:
```js
// index.js
const convert = require('./brValue');

const usd = 10;
const brl = convert(usd);
console.log(brl); // 53.7
// podemos dar o nome que quisermos para a função depois que a importamos, independente de qual o seu nome dentro do módulo.
```

Suponha que agora desejamos exportar tanto a função de conversão quanto o valor do dólar (a variável `brl`). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:
```js
// brValue.js
const brl = 5.37;
const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl
};
```

Desse modo, ao importarmos o módulo receberemos o seguinte objeto como resposta:
```js
// index.js
const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }
console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7
```

Como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:
```js
const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7
```
