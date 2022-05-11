# Mocha
Feito isso, vamos escrever nosso arquivo test.js. Começaremos estruturando os requisitos em forma de testes com o mocha:
```js
// io-test/test.js
describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        //
      });

      it('é igual ao conteúdo do arquivo', () => {
        //
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a "null"', () => {
        //
      });
    });
  });
});
```
