# Criar e inserir elementos
- `.createElement(elemento)`: cria um elemento e recebe por parametro a sua tag 
- `.appendChild()`: _onde.appendChild(qual?)_ insere elemento na página em algum lugar

Como criar uma lista de elementos do js para o html ?

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>  
  

  <ol class="ingredients-list"></ol>


  <script src="script.js"></script>
</body>
</html>
```

```javascript
// array de ingredientes
let ingredientesItems = [
    'arroz',
    'feijao',
    'batata', 
    'bife',
    'picole'
]

// acessa todos as classes ingredients-list
let ingredientsList = document.querySelectorAll('.ingredients-list');

// percorre o array de ingredientes de guarda
for (let i = 0; i < ingredientesItems.length; i++) {
    // guarda cada item do array em uma variavel
    let ingredient = ingredientesItems[i];

    // a variavel cria um elemento li
    let ingredientListItem = document.createElement('li');
    // cada elemento vai escrever nela o ingrediente armazenado
    ingredientListItem.innerText = ingredient;

    // a variavel vai criar dinamicamente um elemento filho contendo cada li
    ingredientsList.appendChild(ingredientListItem);
}
```
