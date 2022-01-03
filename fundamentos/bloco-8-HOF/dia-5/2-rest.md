# Rest

O parâmetro `rest` é uma feature do ES6 que permite criar funções que recebam um número variável de argumentos. Assim, as funções ficam mais flexíveis. 

Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. 

Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest . Todos eles serão colocados dentro de um array, o que permite usar métodos como o `.length`:
```javascript
function params(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função`;
}; 

console.log(params(0, 1, 2)); //
// "parâmetros:"
// [0, 1, 2]
// "Você passou 3 parâmetros para a função"
// "parâmetros:"


/* no segundo console.log que passamos diferentes tipos de argumentos para a função quantosParams e todos foram colocados em um array. */
console.log(params('string', null, [1, 2, 3], {})); //
// ["string", null, [1, 2, 3], [object Object] { ... }]
// "Você passou 4 parâmetros para a função"
```


## `Rest com reduce`
```javascript
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
```
`reduce` é útil para somar os elementos de um array. 

No exemplo acima, a função sum calcula a soma de todos os argumentos passados a ela - independente do número. 

Como o parâmetro `rest` "empacota" todos os argumentos em um `array`, podemos utilizar o `reduce` para **somar** tudo o que estiver dentro deste **array**.

A função é muito mais flexível quando queremos passar múltiplos parâmetros com o rest pois você não precisa especificar quantos argumentos a função irá receber!
