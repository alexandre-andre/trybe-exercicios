# Testes automatizados
## Ferramentas
Para implementar testes no back-end iremos utilizar a dupla `mocha` e `chai`. Apesar de serem duas ferramentas diferentes, elas se completam.


## Instalação
```
npm install -D mocha chai
```


## Tipos de teste
Uma coisa importante para se ter em mente na hora de produzir é o escopo e a interação dos testes. Para isso, existem algumas divisões arbitrárias que nos ajudam a pensar uma ordem de desenvolvimento de testes, sendo as mais comuns:
- `Testes unitários`: 
  - Presumem um escopo limitado a um pequeno fragmento do código com interação mínima entre recursos externos.
  - Ex: Uma função com um fim específico, como uma função que soma dois números:
```js
// ./funcoes/calculo/soma.js
// Aqui podemos escrever testes pensando somente o comportamento esperado para função `soma`
const soma = (valorA, valorB) => valorA + valorB;

module.exports = soma;
```

- `Testes de integração`:
  - Trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles.
  - Ex: Uma função de calculadora que usa funções menores que eu posso testar isoladamente/ de forma unitária:
```js
// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`
const { soma, subtracao, multiplicacao, divisao } = require('./calculo');

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case 'soma':
      soma(valorA, valorB);
      break;
    case 'subtracao':
      subtracao(valorA, valorB);
      break;
    case 'multiplicao':
      multiplicacao(valorA, valorB);
      break
    case 'divisao':
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};

module.exports = calculadora;
// Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações
```

- `Testes de Ponta-a-ponta`:
  -  Chamado de `End-to-End` ou  `E2E`, esses testes pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra. Aqui, poderíamos pensar uma API que utiliza nossa calculadora - assim como diversas outras funções mais complexas - na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo pois garante que todos os demais testes estão ou serão desenvolvidos (pensando na prática do TDD).

Evidentemente isso pode variar a depender do contexto e da forma como os grupos trabalham, mas no geral, existe sempre uma relação de escopo/interação que é definida durante o desenvolvimento de testes, e quanto maior o número de escopos diferentes e situações de interação prevista dentro desses escopos, maior a coesão e a confiabilidade do seu projeto.