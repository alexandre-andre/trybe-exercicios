# NodeJS Assert
O módulo *Assert* é uma ferramenta que testa expressões. Esse módulo já vem instalado com o *NodeJs*. Podemos entender o `assert` como uma expressão booleana que será sempre `true`, a menos que haja uma falha.
Teste simples com `assert`:
```javascript
const assert = require('assert'); // sintaxe para incluir o modulo assert

assert.strictEqual(50, 50); // sem erros: 50 === 50 
assert.srtictEqual(50, 70); // AssertionError: 50 !== 70
```


### Documentação
[NodeJs](https://nodejs.org/api/assert.html)