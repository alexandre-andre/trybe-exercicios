# Recebendo dados no body da requisição.
Acabamos de ver que é possível receber dados da *URL* via *query string*, porém imagine que você precisa salvar dados sensíveis como uma senha ou o número de algum documento importante. Se enviar isso na URL qualquer pessoa que conseguir espiar o tráfego de rede entre o cliente e o servidor vai ter acesso a essas informações. Uma forma que o protocolo *HTTP* encontrou para resolver isso foi criando o tráfego através do corpo da requisição, onde o que acontece é uma compressão dos dados enviados que só serão descomprimidos do lado do back-end. Além de não deixar as informações trafegadas tão expostas, isso deixa a requisição um pouco mais rápida, já que ocorre um processo de serialização dos dados enviados.

Porém, para enviar dados no body da requisição, geralmente você precisa usar algum tipo específico de requisição, como por exemplo, utilizando o verbo *HTTP* `POST`.

Antes disso, precisamos fazer uma pequena etapa que é instalar o pacote `bodyParser`.
```
npm i body-parser
```

Agora no arquivo index.js, faça a modificação:
```js
// const express = require('express');
const bodyParser = require('body-parser');

// const app = express();
app.use(bodyParser.json());

// ...
```

Agora, implemente a rota que vai receber dados no body da requisição:
```js
// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
```

## Como fazer requisições ?
Como fazer requisições já que, por padrão, as requisições feitas ou no navegador ou no fetch api são do tipo GET?

Comece pelo `fetch-api`, usando o código abaixo:
```js
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringfy({
    id: 4,
    name: 'Macarrarão com Frango',
    price: 30
  })
});
```

Diferente do que foi feito para fazer uma requisição do tipo `GET`, dessa vez um segundo parâmetro é passado, que é um **objeto** formado pelos **atributos** `method, headers, body`.
- `method`: Método HTTP utilizado. Existem 4 que são mais utilizados (`GET`, `POST`, `PUT` e `DELETE`);
- `headers`: Define algumas informações sobre a requisição como o atributo `Accept` que diz qual o *tipo de dado esperado como resposta* dessa requisição e o `Content-Type` que *sinaliza que no corpo da requisição está sendo enviado um JSON*;
- `body`: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que você quer enviar para uma string JSON. Por isso que do lado do **back-end** é necessário utilizar o `bodyParser` para transformar as informações que foram trafegadas como *string JSON*, de volta para um *objeto* JavaScript.

Não é possível fazer requisições `POST` diretamente pelo navegador como foi feito para requisição para rota `GET /recipes`. Por isso, você deve utilizar aplicações como o `Insomnia` ou `Postman` para fazer requisições de qualquer tipo diferente do `GET`. Vamos usar o **HTTPie** para executar nossa requisição.
```
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Recipe created successfully!"
> }
```

Nos campos **id** e **price** foi utilizado `:=` enquanto em **name** apenas `=`. 
- `=` **envia os dados como STRING**
- `:=` **envia os dados como NUMBER**

⚠️ Observação: Como você está trabalhando com a lista de receitas através de um array, sempre que a aplicação é reiniciada, o array volta ao formato original, com os 3 objetos definidos direto no código. Portanto, caso as receitas que você cadastrou sumam repentinamente da listagem, provavelmente foi por essa causa, os dados estão apenas armazenados em memória.

Voltando para o código para entender a implementação:
```js
// ...

app.post('/recipes', function (req, res) {
	const { id, name, price } = req.body;
	recipes.push({ id, name, price});
	res.status(201).json({ message: 'Recipe created successfully!'});
});

// ...
```

Na primeira linha os atributos `id`, `name` e `price` foram desestruturados do objeto `req.body` para que, na segunda linha, esses valores sejam utilizados para inserir um novo objeto dentro do array `receitas`. Na terceira, e última linha, a resposta foi retornada com o **status 201**, que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um json com o atributo `message`. Pronto, agora você tem uma rota que permite cadastrar novos receitas no array!


## E o headers ?
Assim como é possível enviar informações no **body** da requisição, também é possível enviar informações no **header** dela. Imagine que você precisa ter uma rota que recebe um `token` para ser validada, a regra da validação é checar se o `token` possui 16 caracteres:
```js
// ...
app.get('/valiateToken', function(req, res) -> {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})
  res.status(200).json({message: 'Valid Token!'})
});
// ...
```

Para fazer um *request* enviando informações no `headers` por meio do HTTPie, você pode usar o seguinte comando:
```
http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido
```

Diferente de informações enviadas no corpo da requisição que usavam `=` ou `:=` para determinar o valor de um atributo, é definido os atributos do headers usando `:`, passando a chave `Authorization` que é uma chave bem comum de se utilizar nesse tipo de autenticação.


## Para Fixar
1. Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.
2. Modifique o código acima da rota POST /recipes para que receba e salve a receita com o atributo waitTime.