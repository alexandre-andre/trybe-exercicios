# Fetch API

No contexto do Front-end, a maioria dos casos em que utilizamos funções assíncronas são em requisições.

Um bom exemplo é a função `fetch()` da *Fetch API* !

A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch() , utilizada para fazer chamadas às URL's das APIs . Trata-se de uma função assíncrona, baseada em uma promise.

A função `fetch` pode receber **dois** parâmetros:
1. `URL` do serviço alvo da requisição;
2. E, opcionalmente, pode ser passado um `objeto` contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica.

> A função fetch é responsável por enviar requisições a APIs . Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.


## Gestão de fluxo

Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono: o `.then()` e o `.catch()`.

Vamos criar uma função que faz um fetch apenas para um *endpoint* específico.
- *endpoint* , em se tratando de APIs, como sendo o caminho (url) que retorna alguma informação específica da API. Para isso, vamos usar como endpoint uma **url** que nos retorna elogios sobre Chuck Norris.

Antes de ir para o código, como vamos rodar o código direto no Node e não no browser, será necessário instalar o `node-fetch` . Execute o comando abaixo caso você ainda não tenha o `package.json` :
```
npm init -y
npm i node-fetch@^2
```
Note que foi utilizado o `@^2` ao final do nome do pacote para especificar que deve ser instalado a versão `mais atual`, mas que `não seja maior que a 2 `. Essa especificação ocorre visto que a versão **3** do `node-fetch `foi alterada para ser usada através de `módulos do JS`, podendo ser importada apenas através do import e não mais do require .

Agora crie um arquivo `fetch.js` e insira o código abaixo para testar sua funcionalidade:
```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();
```
Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.


### Agora vamos corrigir esse problema:
```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
```
Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em no console.
Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
- Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do `fetch` .
- O `.then()` é usado "em cadeia", um conceito chamado de **chaining** . Assim, podemos colocar vários `.then()` em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o `.then()` espera a resposta do `fetch` (ou o `.then()` anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

> A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.


### E se der erro em alguma requisição ? `CATCH`
```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
```
Note que para forçar o erro retiramos o https:// do início da url .

O `.then()` recebe o retorno caso a requisição seja bem sucedida.

O `.catch()` recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna.

Assim, quando o fetch retorna algum erro, todos os `.then()` são pulados e é executado o primeiro `.catch()` encontrado. E tem mais! O `.catch()` também "pega" qualquer erro que acontecer dentro de qualquer `.then()` anterior a ele. Por esse motivo ele é geralmente usado no final.