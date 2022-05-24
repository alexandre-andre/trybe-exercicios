# Consumindo APIs
Vamos utilizar a biblioteca `node-fetch`, que implementa no `Node.JS` todas as funcionalidades do `fetch` usadas no navegador. Neste exemplo, vamos consumir a [Postman Echo API](https://learning.postman.com/docs/developer/echo-api/), que é uma API mantida pelo Postman para fins de aprendizagem. Ela simplesmente retorna para nós tudo o que enviamos para ela. 

## Passo a passo
1. Vamos começar criando nosso pacote `Node.js` e instalando o `node-fetch`.
- Faremos isso em uma nova pasta chamada `hello-http-methods`.
```
mkdir hello-http-methods && cd hello-http-methods && npm init -y && npm i node-fetch@2
```

2. Vamos criar o arquivo `index.js`, onde escreveremos nosso código:
```js
// index.js

const fetch = require('node-fetch');

// Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/get?param1=teste')
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }

    // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
```

Executando o código acima, temos o seguinte resultado no terminal:

```js
{
  args: { param1: 'teste' },
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-6048162b-72d5940c2e1fce1c1bd9ece7',
    accept: '*/*',
    'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'accept-encoding': 'gzip,deflate'
  },
  url: 'https://postman-echo.com/get?param1=teste'
}
```

Observe, por meio da execução do código, dois pontos:
- A resposta nos entrega os parâmetros que enviamos na *query string* por meio da propriedade `args`, e os *headers* que enviamos por meio da propriedade `headers`.
- Não existe uma propriedade `body`, nem mesmo como um objeto vazio, pois requests do tipo `GET` **NÃO possuem** `body`.

1. Vamos adicionar alguns `headers` próprios, isso será útil quando precisarmos, por exemplo, enviar um `TOKEN DE AUTENCICAÇÃO`. Altere o index.js, de acordo com o código abaixo.
```js
// index.js

// const fetch = require('node-fetch');

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN});

// // Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/get?param1=teste', {
  // Passamos o objeto de headers como parâmetro para o fetch
  headers})
//   .then((response) => {
//     // Ao receber a resposta, verificamos se correu tudo bem
//     if (!response.ok) {
//       // Caso não, forçamos a Promise a ser rejeitada
//       return Promise.reject(response);
//     }

//     // Caso esteja tudo OK, lemos o body como JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Por fim, escrevemos o body no console
//     console.log(data);
//   })
//   .catch((errorOrResponse) => {
//     // Em caso de falha simples (a request completou com um status diferente de 2xx)
//     // simplesmente logamos o status no console
//     if (errorOrResponse.status) {
//       return console.error(`Request failed with status ${errorOrResponse.status}`);
//     }

//     // Caso tenha acontecido um erro de rede (não foi possível completar a request)
//     // logamos o erro todo
//     console.error(errorOrResponse);
//   });
```

Agora, executando novamente o código, obtemos o seguinte resultado:

```js
{
  args: { param1: 'teste' },
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-60481786-09532220660034a96956e705',
    authorization: '2d635ea9b637ea0f27d58985cc161d64',
    accept: '*/*',
    'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'accept-encoding': 'gzip,deflate'
  },
  url: 'https://postman-echo.com/get?param1=teste'
}
```

A resposta é muito parecida, entretanto, agora temos na chave `headers`, a chave `authorization` que enviamos!
Agora o `token` está sendo enviado para a API!


## Utilizando outros verbos HTTP
Agora que vimos como utilizar headers, vamos aprender o que é preciso fazer para utilizarmos um verbo HTTP diferente.

1. Altere o arquivo index.js, de acordo com o código abaixo:
```js
// const fetch = require('node-fetch');

// // Armazenamos o token numa variável.
// // Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
// const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// // Criamos um novo objeto de Headers
// const headers = new fetch.Headers({
//   Authorization: API_TOKEN,
// });

// // Para aquecer, vamos começar com uma requisição do tipo `GET`
   fetch('https://postman-echo.com/post?param1=teste', {
//   // Passamos o objeto de headers como parâmetro para o fetch
//   headers,
     method: 'POST',
// })
//   .then((response) => {
//     // Ao receber a resposta, verificamos se correu tudo bem
//     if (!response.ok) {
//       // Caso não, forçamos a Promise a ser rejeitada
//       return Promise.reject(response);
//     }

//     // Caso esteja tudo OK, lemos o body como JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Por fim, escrevemos o body no console
//     console.log(data);
//   })
//   .catch((errorOrResponse) => {
//     // Em caso de falha simples (a request completou com um status diferente de 2xx)
//     // simplesmente logamos o status no console
//     if (errorOrResponse.status) {
//       return console.error(`Request failed with status ${errorOrResponse.status}`);
//     }

//     // Caso tenha acontecido um erro de rede (não foi possível completar a request)
//     // logamos o erro todo
//     console.error(errorOrResponse);
//   });
```

2. Vamos substituir na URL o endpoint da API que queremos chamar e adicionar a propriedade `method` com valor `POST` às opções da `request`.
Executando o código agora, temos o seguinte resultado:
```js
{
  args: { param1: 'teste' },
  data: {},
  files: {},
  form: {},
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-60481884-5a7755d35f884dad157968d7',
    'content-length': '0',
    authorization: '2d635ea9b637ea0f27d58985cc161d64',
    accept: '*/*',
    'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'accept-encoding': 'gzip,deflate'
  },
  json: null,
  url: 'https://postman-echo.com/post?param1=teste'
}
```

Dessa vez, temos mais propriedades além de `args: Data, files, form e json` também estão presentes, embora estejam todas vazias, pois não enviamos nada do tipo para a API ainda.

O que nos leva para o nosso próximo passo!


## Enviando um Body
Nosso próximo passo será aprender como enviar informações no corpo da requisição. Mas antes, é importante lembrar que o **tipo de conteúdo de uma request** é determinado pelo `header Content-Type`. Por isso, além de fornecer o conteúdo que o `fetch` deve enviar, precisamos também configurar esse header.
```js
// const fetch = require('node-fetch');

// // Armazenamos o token numa variável.
// // Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
// const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// // Criamos um novo objeto de Headers
// const headers = new fetch.Headers({
//   Authorization: API_TOKEN,
    // Precisamos adicionar o header `Content-Type` e defini-lo como `application/json`
    'Content-Type': 'application/json',
// });

// Depois, criamos o body
// Utilizamos o `stringify` para que possamos enviar esse body como JSON
const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

// // Para aquecer, vamos começar com uma requisição do tipo `GET`
// fetch('https://postman-echo.com/post?param1=teste', {
//   // Passamos o objeto de headers como parâmetro para o fetch
//   headers,
//   method: 'POST',
     // Adicionamos o body às opções da request
     body,
// })
//   .then((response) => {
//     // Ao receber a resposta, verificamos se correu tudo bem
//     if (!response.ok) {
//       // Caso não, forçamos a Promise a ser rejeitada
//       return Promise.reject(response);
//     }

//     // Caso esteja tudo OK, lemos o body como JSON
//     return response.json();
//   })
//   .then((data) => {
//     // Por fim, escrevemos o body no console
//     console.log(data);
//   })
//   .catch((errorOrResponse) => {
//     // Em caso de falha simples (a request completou com um status diferente de 2xx)
//     // simplesmente logamos o status no console
//     if (errorOrResponse.status) {
//       return console.error(`Request failed with status ${errorOrResponse.status}`);
//     }

//     // Caso tenha acontecido um erro de rede (não foi possível completar a request)
//     // logamos o erro todo
//     console.error(errorOrResponse);
//   });
```

Agora, se executarmos o código, o resultado é o seguinte:
```js
{
  args: { param1: 'teste' },
  data: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
  files: {},
  form: {},
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-60481a4f-6fe65f3d723405ca6c6c7536',
    'content-length': '66',
    authorization: '2d635ea9b637ea0f27d58985cc161d64',
    'content-type': 'application/json',
    accept: '*/*',
    'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'accept-encoding': 'gzip,deflate'
  },
  json: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
  url: 'https://postman-echo.com/post?param1=teste'
}
```

Dessa vez, a API do Postman nos envia de volta um objeto na propriedade data, e o mesmo objeto na propriedade json. Isto quer dizer que o corpo da mensagem foi lido e interpretado com sucesso!

Para utilizar outros verbos HTTP, basta alterar o valor da propriedade `method`.

Aqui utilizamos o `node-fetch` e o `Node.js` para executar os exemplos no terminal, entretanto o código acima utiliza o `fetch`, compatível com o `fetch do navegador`. Isso quer dizer que você pode utilizar esse conhecimento para realizar requests no front também, quando estiver integrando front-end e back-end.