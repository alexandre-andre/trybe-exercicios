# cookies x localStorage x sessionStorage 
Em regra geral, utilizamos Cookies quando precisamos dos dados no cliente ( browser ) e no servidor, pois os Cookies são enviados para o servidor a cada requisição. Caso contrário, utilizamos localStorage e sessionStorage.

Exemplo de utilização:
```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo WebStorage</title>
</head>
<body>
  <header>
    <h1>Diferenças de armazenamento entre LocalStorage e WebStorage</h1>
  </header>
  <main>
    <section>
      <h2>Frases armazenadas</h2>
      <input type="text" id="phrases-input" />
      <button id="add-button">Adicionar frase</button>
      <div>
        <ul id="phrases-list">
        </ul>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```


```javascript
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); // converte o valor da chave em objeto json
  const listLength = phrasesList.length - 1; // indice da ultima posicao do array
  const phraseText = phrasesList[listLength]; // valor da ultima posicao do array
  const phrase = document.createElement('li'); // cria li
  phrase.innerText = phraseText; // na li escreve o valor do indice
  list.appendChild(phrase); // insere em list o filho phrase
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases')); // converte o valor da chave em objeto json
  const phraseText = input.value; // guarda o valor do input
  oldList.push(phraseText); // oldList empurra o valor do input 
  localStorage.setItem('phrases', JSON.stringify(oldList)); // add em localStorage a chave e o valor dela convertido em um string JSON  
  insertPhraseInDOM(); // apos isso, chama a funcao insertPhraseInDOM()
}

function initialRenderization() {
  // se o valor da chave recuperada for null
  if (localStorage.getItem('phrases') === null) {
    // add na chave phrases um array vazio
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    // converte o valor da chave em objeto JSON
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index < listLength; index++) {
      const listElement = document.createElement('li');
      listElement.innertText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
}
```

O próximo script tem a mesma funcionalidade que o anterior. 
A diferença se dá no momento em que o navegador é fechado.
```javascript
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innertText = phraseText;
  list.appendChild(phrase); 
}

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);
```