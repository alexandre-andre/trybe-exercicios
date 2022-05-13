# Criando middlewares globais com `app.use`
Outra forma de utilizar *middlewares* é quando precisamos reaproveitar um *middleware* para todas as rotas da aplicação. Vamos criar uma forma de autenticar se um determinado usuário pode ter acesso a API de receitas. Para isso, será necessário enviar as informações de nome de usuário e senha pelo `Header` da requisição 
> (⚠️ Este é um exemplo didático, na prática vamos utilizar abordagens mais seguras de fazer esse tipo de autenticação, por exemplo utilizando `JWT`).

Vamos começar definindo o *middleware* em um arquivo separado: `auth-middleware.js`.
```js
/* auth-middleware.js */
const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

module.exports = authMiddleware;
```

Caso nenhuma dessas opções seja verdadeira, uma resposta é enviada ao client dizendo que não foi possível realizar a autenticação. Ao enviarmos uma resposta para o client, impedimos que qualquer outro middleware seja executado depois desse. Caso esteja tudo certo com o `header`, o middleware chama a função `next`.

Para utilizarmos esse middleware de autenticação, vamos alterar o arquivo `index.js`.
```js
// const express = require('express');
// const bodyParser = require('body-parser');
const authMidleware = require('./auth-middleware'); // importa o arquivo auth-middleware

// const app = express();
// app.use(bodyParser);

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

// const recipes = [
// 	{ id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
// 	{ id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
// 	{ id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
// ];
// ...
```

Adicionamos uma rota, antes do `app.use`. O `app.use` *só afeta as rotas que vem abaixo da sua definição*. Ou seja, todas as rotas do nosso *CRUD* de receitas vão passar pelo *middleware de autenticação*, enquanto a rota `/open` **não**, **por que foi definida antes** da linha do `app.use`. Vamos testar: Tente fazer uma requisição para as rotas `GET /open` e `GET /recipes`.
```
http GET :3001/open # execute apenas essa linha
> HTTP/1.1 200 OK
> Connection: keep-alive
> Content-Length: 55
> Content-Type: text/html; charset=utf-8
> Date: Sun, 22 Aug 2021 21:12:24 GMT
> ETag: W/"37-ZXNKqzv8YdcuUTIY0Egz9o2J97U"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> Esta rota não passa pelo middleware de autenticação!
http GET :3001/recipes # execute apenas essa linha
> HTTP/1.1 401 Unauthorized
> Connection: keep-alive
> Content-Length: 60
> Content-Type: application/json; charset=utf-8
> Date: Sun, 22 Aug 2021 21:13:36 GMT
> ETag: W/"3c-p35mvWqky25aPCJVo0WioEMrIRQ"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Nome de usuário e senha não podem ser vazios"
> }
```

Para poder fazer a requisição para os nossos endpoints que começam com /recipes, precisamos mandar os dados de autenticação no body da requisição. Abaixo estão alguns exemplos.
```
# listar receitas
http GET :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn 

# cadastrar um novo receita
http POST :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn name=Churrasco id:=5 price:=30 

# editar um receita
http PUT :3001/recipes/2 username:MestreCuca password:MinhaSenhaSuperSeguraSqn name=Lasanha price:=45 
```

**Para enviar parâmetros no `header`** de uma requisição, utiliza-se o formato `<chave>:<valor>` enquanto **no `body` da requisição usa-se** `<chave>=<valor>` ou `<chave>:=<valor>` como já vimos. No exemplo para `request` do tipo `POST` e `PUT` podemos ver como enviar informações no `header` e no `body` ao mesmo tempo.

Agora, entendemos como usar o app.use para criar `middlewares genéricos`, geralmente utilizados para operações de **autenticação** ou algum tipo de **tratamento prévio** dos dados recebidos na requisição.
