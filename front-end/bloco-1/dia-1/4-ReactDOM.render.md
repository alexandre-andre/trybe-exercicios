# ReactDOM.render

O `ReactDOM.render` é o responsável por renderizar e atualizar 0 código dentro do HTML , exibindo os elementos `React` .

Todas as vezes que fizermos alguma alteração no código, seja através de uma função ou interação de quem usa, o React DOM compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário para levar a aplicação ao estado desejado. Vamos ver um exemplo:

Crie um novo projeto `React` usando o `create-react-app` , ou use o projeto criado na seção inicial, e insira o seguinte código no arquivo `index.js `.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
Neste exemplo, estamos chamando a função tick que chama o ReactDOM.render a cada segundo, e injeta no elemento pai com id root um 'Hello World' e o horário. Inspecionando o codigo em execução no navegador visualizamos o seguinte evento:
<img src="./../../img/ReactDOM-28f81dbff8339ee84d24a5cad9910a30.gif">

Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. Pela atualização precisa do DOM, e pela sua composição, o React apresenta grandes avanços na velocidade de processamento.

Tudo bem até agora, mas como faremos a manipulação do DOM? Da mesma maneira como fazemos com JavaScript puro?

A resposta é... Não! A forma como fazemos manipulação de elementos vai mudar um pouco. Inclusive é considerado uma má prática manipular o DOM no React diretamente como no JavaScript puro.


## Então como fazemos para mudar o estilo de elementos se não podemos manipular o DOM diretamente?
Resumidamente, no JavaScript puro você costuma pegar os elementos via querySelector , por exemplo, e com algum addEventListener escutar um evento, chamar uma função e atribuir ou mudar uma propriedade desse elemento, certo? E no React como funciona?

No React temos o conceito de estado, e dependendo desse estado podemos definir classes no CSS, tudo isso dinamicamente!
