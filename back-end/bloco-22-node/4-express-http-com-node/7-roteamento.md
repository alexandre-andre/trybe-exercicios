# Roteamento
O aspecto mais básico de uma API HTTP se dá através de suas **rotas**, também chamadas de endpoints. Uma rota ou endpoint é definida pelo **método HTTP e caminho**.

Na aplicação de '`Hello, World!`', por exemplo, registramos uma **rota** `GET /hello`.Se tentarmos utilizar qualquer outro método ou qualquer outro caminho para acessar essa rota, vai receber um erro do Express, juntamente com um *status 404 - Not Found*.

A forma que o Express trabalha com rotas é a seguinte: ao registrar uma rota, dizemos ao Express o que fazer com requisições que contenham aquele método e caminho. Voltando para o exemplo da cozinha, é como se estivesse definindo, no quadro de pedidos, que os pedidos que levam carne devam ser preparados pela pessoa responsável pela chapa, enquanto pedidos que sejam compostos apenas de vegetais (como saladas) devam ser preparados pela pessoa responsável pelo corte de legumes e verduras.

No **Express**, uma rota é registrada utilizando a assinatura `app.METODO(caminho, callback)`, onde a função de callback recebe três parâmetros: `request`, `response` e `next`.
- `request`: contém as informações enviadas pelo cliente ao servidor;
- `response`: permite o envio de informações do servidor de volta ao cliente;
- `next`: função que diz para o Express que aquela callback terminou de ser executada, e que ele deve prosseguir para executar a próxima callback para aquela rota. Este parâmetro é opcional e você entenderá melhor o uso do `next` em breve.

**As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho.**
```js
const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
```
