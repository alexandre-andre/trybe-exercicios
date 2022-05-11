# Escrevendo testes
O primeiro passo é compreender, através dos requisitos, a *estrutura* que desejamos ter e os *comportamentos esperados*. Retomando-os temos:
- *Estrutura*:
  - Nossa função deverá receber um parâmetro "media";
  - Responder com "reprovado" ou "aprovado".
- *Comportamentos esperados*:
  1. Se passado um valor menor que 7, por exemplo 4, a resposta deve ser "reprovado";
  2. Se passado um valor maior que 7, por exemplo 9, a resposta ser "aprovado";
  3. E, não podemos esquecer do "OU", sendo assim, se passado 7, a resposta deve ser "aprovado";


## Estruturando testes com o `Mocha`
O mocha é um framework de testes para JS, ele nos ajuda a arquitetar os nossos testes, nos fornecendo a estrutura e interface para escrevermos os nossos testes.

**Comportamentos**, da mesma forma como descrevemos os comportamentos acima, temos que fazê-lo nos testes para dizermos o que estamos testando naquela caso específico. Para isso, o `mocha` nos fornece duas palavras reservadas o **describe** e o **it**.
- **describe** - permite adicionar uma descrição para um teste específico ou um grupo de testes.
- **it** - permite sinalizar exatamente o cenário de teste que estamos testando naquele ponto.
```js
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});
```
