# SELETORES
## SELETOR DE ID
- `document.getElementById('<id name>')`
- `document.getElementById('<id Name>').innerHTML` - acessa todo o conteúdo no elemento
- `document.getElementById('<id Name>').innerText` - acessa todo o texto no elemento

```javascript
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```
1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
3. Por fim, recupere o subtítulo e altere-o também.

```javascript
// documento js
document.getElementById('page-title').innerText = 'John Wick'
document.getElementById('second-paragraph').innerHTML = 'Essa parada mermo.'
document.getElementById('subtitle').innerHTML = 'Subtitulo alterado via js'
```

## SELETOR DE CLASSE
- `document.getElementsByClassName('nome da classe')` - acessa o conteúdo da classe

```javascript
<!DOCTYPE html>
<html>
  <body>
    <p class="lenda">Ayrton Senna</p>
    <p class="piloto-f1-atual">Louis Hamilton</p>
    <p class="piloto-f1-atual">Sebastian Vettel</p>
    <p class="piloto-f1-atual">Lando Norris</p>

    <script src="script.js"></script>
  </body>
</html>
```

```javascript
// documento js
let lenda = document.getElementsByClassName('lenda')
```

Como temos varias chamadas da classe `piloto-f1-atual` podemos dizer que temos um `array` dessas classes. Para conseguir acessar a posição desejada para alteração podemos fazer de duas formas:
```javascript
// pelo indide, diretamente
let pilotosDeF1 = document.getElementsByClassNameAll('piloto-f1-atual')[0].innerText = 'Jamanta n#ao morreu'

ou 

// percorrer esse array de classes
for (let i = 0; i < pilotosDeF1; i++) {
    // vai pegar cada valor desse array de classes em suas respectivas posicoes 
    console.log(pilotosDeF1[i])
    // para trocar todos os valores dos indices do array de classes fazemos
    pilodoDeF1[i].innerText = 'Lewis Hamilton';
}
```
> Por mais que tenha apenas UMA ocorrência de uma classe, no caso `lenda`, ainda assim deve ir ao formato de lista e ser tratada como uma lista (`array`). 


# Alterando propriedades de um elemento
```javascript
// documento js
const title = document.getElementById('page-title')
title.style.color = 'red';
```

# SELETOR DE TAG
- `document.getElementsByTagName()` __sempre__ é retornado no formado de __lista__ de elementos, e __nunca__ no formado de __um elemento__. É uma função que acessa os elementos da página.
- Quando fazemos uma busca por tag name, só vamos retornar aquela tag.
- Retorna um `HTMLColecttion`, em forma de lista todas as tags p, mesmo que haja apenas uma.
- Para acessar uma posição: passar a posição dessa tag na lista
```javascript
<!DOCTYPE html>
<html>
  <body>
    <p class="lenda">Ayrton Senna</p>
    <p class="piloto-f1-atual">Louis Hamilton</p>
    <p class="piloto-f1-atual">Sebastian Vettel</p>
    <p class="piloto-f1-atual">Lando Norris</p>
    <div class="piloto-f1-atual">George Russel<div>
    <div class="piloto-f1-atual">Daniel RIccardo<div>
    <span class="piloto-f1-atual">Kelvin Magnussen<span>

    <script src="script.js"></script>
  </body>
</html>
```

```javascript
document.getElementsByTagName('p')
// retorna um HTMLColecttion, lista todas as tags p 

document.getElementsByTagName('span')[0].innerText = 'Schummacker é o Senna alemão'
// na lista de de tag span, vai pegar o que está na posicao 0 e atribuir o texto
```


# QUERYSELECTOR
Diferente do `getElement`, o `querySelector` retorna apenas **UM** elemento e o **PRIMEIRO** elemento que for encontrado a partor da chamada dessa função.


## REFERÊNCIAS
[seletores](https://www.w3schools.com/cssref/css_selectors.asp)