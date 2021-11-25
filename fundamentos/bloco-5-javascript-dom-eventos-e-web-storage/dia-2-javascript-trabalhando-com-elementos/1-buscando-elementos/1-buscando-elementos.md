# Buscando elementos
A propriedade `parentNode` acessa o elemento pai do elemento sobre o qual a propriedade é chamada. Mas ela não é a única forma de, a partir de um elemento, navegar para outros.
Há, ao todo, as seguintes propriedades:
- `parenteNode`: retorna o nó pai
- `parentElement`: retorna o elemento pai
- `childNodes`: retorna um NodeList com todos os nós filhos
- `children`: retorna um HTMLCollection com todos os elementos filhos
- `firstChild`: retorna o primeiro filho
- `firstElementChild`: retorna o primeiro elemento filho
- `lastChild`: retorna o último nó filho
- `lastElementChild`: retorna o último elemento filho
- `nextSibling`: retorna o próximo nó do DOM
- `nextElementSibling`: retorna o próximo elemento
- `previousSibling`: retorna o nó anterior
- `previousElementSibling`: retorna o elemento anterior

```javascript
<!-- arquivo index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>  
  <main>
    <div id="start"></div>
    nó
    <p>elemento</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

#### nextSibling vs nextElementSibling
```javascript
console.log(document.getElementById('start').nextSibling) // nó
// a partir da div start, retorna o texto 'nó', que representa o proximo nó do DOM a partir da div

console.log(document.getELementById('start').nextElementSibling) // <p>elemento</p>
// a partit da div start, retorna o promixo elemento
```

