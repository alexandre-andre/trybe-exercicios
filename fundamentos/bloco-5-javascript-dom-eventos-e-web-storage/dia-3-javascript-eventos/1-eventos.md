# Escutador de eventos
Criar um tipo específico de código, chamado escutador de eventos , ou event listener , em inglês.
- Da dinamismo à página
- Pode ser disparado por uma ação visível do usuário ou pelo próprio navegador

## Manipulação pelo DOM
```javascript
// dispara um alert quando o HTML for carregado
window.onload = jsCarregado

function jsCarregado() {
    alert('Página foi carregada')
}
```

## Eventos no HTML
Depende da interação do usuário
`onclick`
```javascript
// ------- HTML
<button onclick="maisInfos();">Mais informações</button>
<p id='chamaAqui'></p>
// ------- JS
function maisInfos() {
    let textoMaisInfo = document.getElementById('chamaAqui');
    textoMaisInfo.innerText = 'O método onclick disparou a função maisInfos() quando o usuário clicar no botão e vai escrever na tag p'
}
```

### Cenário
```javascript
// quando a pagina estiver pronta, vai chamar a funcao pizzaPronta
window.onload = pizzaPronta

function pizzaPronta() {
    alert('tocou a campainha');
    alert('peguei a pizza');
}

// mas como a pagina ainda nao estah pronta, vai chamar o alert('pedido da pizza')
alert('pedido da pizza');
```


O `onload` é um event listener que vem o objeto `window` do browser, e o método `onclick` dispara eventos a partid do click em um determinado elemento.

Utilizar atributos HTML de escutadores de eventos não é uma prática recomendada, por alguns motivos. Um deles é que o ideal é não misturar o seu código HTML com o código JavaScript. Outro motivo é que, se você precisar adicionar events listeners em muitos elementos, ou mesmo precisar mudar qual função é adicionada como resposta a esses eventos nesses elementos depois, fica complicado ter de adicionar manualmente a propriedade em cada um dos elementos. Por essas razões, utilizar eventos inline (como são chamados eventos adicionados diretamente no HTML) é considerada uma má prática.