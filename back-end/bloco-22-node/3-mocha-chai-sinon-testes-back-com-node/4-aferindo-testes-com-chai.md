# Aferindo testes com o `Chai`
O `chai` ajuda com as **asserções**, ou seja, ele fornece maneiras de dizermos o que queremos testar e então ele **validará** se o resultado condiz com o esperado.

Essa validação é o que chamamos de **assertion**, "*asserção*" ou, em alguns casos, "*afirmação*". Para nos ajudar com essa tarefa temos o `chai`, que nos fornece diversos tipos de validações diferentes.

Usaremos a interface `expect` do `chai` em nossos exemplos, que significa de fato o que é esperado para determinada variável:
```js
// tests/calculaSituacao.js
const { expect } = require('chai');
const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);
    expect(resposta).equals('reprovado');
  });
});
```
> Observe que o chai foi importado no início do arquivo, e o expect foi desconstruído a partir dele. Agora, perceba como o chai nos fornece uma função pronta, equals que irá comparar se o valor "esperado" na resposta é igual ao passado para ele, ou seja, igual a "reprovado".

[todas as assertions](https://www.chaijs.com/api/bdd/)

Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético. Por exemplo o to e o be, que nos permite escrever nossa assertion da seguinte maneira:
```js
// tests/calculaSituacao.js
const { expect } = require('chai');
const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);
    expect(resposta).to.be.equals('reprovado');
  });
});
```

[mais sobre *getters*](https://www.chaijs.com/api/bdd/#method_language-chains)