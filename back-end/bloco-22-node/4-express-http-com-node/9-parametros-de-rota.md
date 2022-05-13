# Parâmetros de Rota
URLs no seguinte formato *`http://<site>/noticias/489`* ou *`http://<site>/pedidos/713`*. Esses valores que são passados nas rotas geralmente devolvem uma página seguindo o mesmo template, porém com um conteúdo diferente. Tal configuração é implementada graças ao parâmetro de rota. Imagina se para cada nova notícia ou pedido você tivesse que criar uma rota específica exatamente com *`/noticias/489`* ou *`/pedidos/713?`*. Para facilitar esse processo, é utilizado **parâmetros de rota**, que no Express, podem ser definidos da seguinte forma: `/<rota>/<:parametro>` onde `:parametro` vai servir para qualquer valor que vier na URL com aquele prefixo específico.

No caso da API de receitas, você pode montar uma rota que recebe o id como um parâmetro de rota da seguinte forma:
```js
// const express = require('express');
// const app = express();
//
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];
//
// app.get('/recipes', function (req, res) {
// 	res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });
```

No código acima, o que fizemos foi adicionar uma rota `/recipes/:id`. Qualquer rota que chegar nesse formato, independentemente do `id` ser um número ou string, vai cair na segunda rota (ao invés de cair na rota `/recipes` definida no tópico anterior). Para acessar o valor do parâmetro enviado na URL é feita a desestruturação do atributo `id` do objeto `req.params`. O objeto `req` traz informações a respeito da requisição. É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que está sendo desestruturado. Por exemplo, se na definição da rota estivesse escrito `/recipes/:nome` teríamos que usar `const { nome } = req.params`.

⚠️ Atenção: Perceba que na linha com o `if` possui um `return`. Isso serve para indicar para o Express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe);. Caso não tivesse o return, a requisição funcionaria mas apareceria uma erro no terminal.
```
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```

Esse erro significa que o Express entendeu que estamos tentando retornar duas respostas para o cliente:
- uma com o código `HTTP 404`, para quando a receita não foi encontrada;
- outra com o código `HTTP 200`, com a receita encontrada.

Faça uma requisição para esse endpoint passando um id qualquer.
```
http :3001/recipes/1
```

O retorno da nossa requisição será algo parecido com o seguinte conteúdo:
```js
{
    "id": 1,
    "name": "Lasanha",
    "price": 40,
    "waitTime": 30
}
```

Se passarmos um id que não existe nosso retorno vai ser diferente:
```
http :3001/recipes/777
> { message: 'Recipe not found!'}
```
