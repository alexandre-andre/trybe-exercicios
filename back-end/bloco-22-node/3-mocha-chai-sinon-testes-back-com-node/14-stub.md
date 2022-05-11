# Stub
```js
// is-test/test.js
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});
```

Perceba que no nosso `stub` definimos para retornar o mesmo valor que esperamos na nossa **asserção**, ao rodar esse teste teremos o seguinte resultado:
```
2 passaram 1 falhou
```

Perceba que os testes, que esperavam o valor retornados pelo stub, funcionaram. Porém, onde o valor esperado era outro, o teste passou a quebrar.

Isso aconteceu porque criamos um *comportamento falso* único para a função, que é aplicado para todos os testes. Em cada situação é esperado um valor diferente:
- Quando o arquivo passado existe é esperado que ela retorne o valor;
- Quando o arquivo passado não existe é esperado um erro;

Sendo assim, o ideal é sempre criarmos `Tests Doubles` para o escopo de cada cenário de teste.

O `mocha` nos fornece duas funções chamadas `before` e `after`. Como o nome diz, são funções que serão executadas "*antes*" e "*depois*" daquele "*bloco*" de testes, ou seja, daquele `describe`.

Vamos adicionar esse conceito ao nosso teste:
```js
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});
```

**Antes** de cada cenário de teste nós alteramos o comportamento do método do `fs` criando um `stub` e, depois da execução do teste, utilizamos a função `restore()` que o `sinon` atribui aos `stubs` para retornarmos o comportamento padrão daquela função.

Ao rodar nosso teste agora, temos todos os comportamentos esperados devidamente testados!

Não foi necessário fazer nenhum IO de verdade, não precisamos criar um arquivo real com o conteúdo do teste. Devemos ter esse conceito sempre em mente quando estivermos falando sobre testes.
