# Async/await

Vamos refatorar a função anterior para usar async :
```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```

A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função fetchJoke .

Assim, junto com ela vem um bônus, o await . O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz a função esperar uma resposta para continuar sua execução. Vamos refatorar a fetchJoke :

## Temos duas maneiras de utilizar o async await , 
### a primeira é mesclando com o `.then() e o .catch()` :
then/catch usamos um await
```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```
> Usando o `await` , a `fetchJoke` espera o `fetch` terminar toda sua execução (até o último `.then()` ou `.catch()` ) para só depois executar o console.log() .


### A segunda é usando o `try e o catch` :
try/catch usamos 2 await
```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```
Quando usamos o `try/catch` , é executado o código inserido no escopo do `try` , e caso alguma parte desse código dê erro, você o trata no escopo do `catch(error)`.