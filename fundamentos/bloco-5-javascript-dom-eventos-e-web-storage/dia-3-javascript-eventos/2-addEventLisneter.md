# addEventListener
O código mais comum para criar um escutador de eventos em um elemento é através de uma função nativa do JavaScript , chamada addEventListener . Funções nativas são funções que já existem prontas dentro da linguagem e, como toda função, podem receber parâmetros.
No seu uso mais comum, addEventListener recebe dois parâmetros`:
`elemento.addEeventListener(1,2)`
1. o evento que será escutado: `click`, `change`, `mouseover` etc.
2. a função que será executada quando o evento acontecer.

[todos os eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)
[evento interativos](https://codepen.io/johnatas-henrique/pen/jOEQQvZ)
Os mais comuns são: `click` , `change` , `mouseover` e `keyup` .

Todos os elementos podem receber eventos. Tudo depende apenas de sua necessidade. Você pode usar eventos em caixas de texto, botões e até mesmo elementos estáticos, como **div** e **p**.

- É possível colocar quantos event listeners quiser em um mesmo elemento ;
- O navegador passa para a função chamada no addEventListener o evento como um *parâmetro* , podendo ser acessado pela função. Veja mais sobre o assunto [aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/Event) , especialmente a parte sobre event.target.

```javascript
// HTML
<p id="clicar">Parágrafo para ser clicado</p>
<button id="mouse-over-leave">Botão para o mouse passar por cima</button>
// JS
// exemplo 1- click
let clickP = document.getElementById('clicar');

// add o evento de click
// mesma coisa que ao clickP receber um click, vai chamar a funcao recebeClick
clickP.addEventListener('click', recebeClick);
clickP.addEventListener('mouseover', mouseEmCima);

function recebeClick(eventoDeOrigem) {
    // objeto do evento
    // as duas principais propriedades
    // target: o elemento que originou esse mesmo evento
    // type: o tipo de evento que originou o click - mouse, keyboard, screen...
    console.log(eventoDeOrigem.target)
    console.log(eventoDeOrigem.type)
}

// exemplo 2- mouse over, mouse leave
let mouseOverLeaveButton = document.getElementById('mouse-over-leave');

// add o evento de mouse over
mouseOverLeaveButton.addEventListener('mouseover', mouseEmCima);

// add o evento de mouse leave
mouseOverLeaveButton.addEventListener('mouseleave', mouseSaiuDoElemento);

function mouseEmCima(evento) {
    console.log('mouse passou por cima');
    console.log(evento.target);
}

function mouseSaiuDoElemento(evento) {
    console.log('mouse saiu do elemento');
    console.log(evento.type);
}
```

outro exemplo:
```javascript
window.onload = function() {
    const button = ducument.querySelector('#nome id');

    button.addEventLIstener('click', function() {
        console.log('clicou');
    })
}
```
