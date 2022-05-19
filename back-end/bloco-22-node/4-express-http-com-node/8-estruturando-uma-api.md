# Estruturando uma API
Para entendermos na prática como utilizar o Express e o seu sistema de rotas para criar uma API funcional, vamos partir do seguinte cenário: temos uma aplicação que permite gerenciar uma lista de receitas disponíveis, com seus respectivos nomes, preços e tempos médio de preparo. Essa aplicação é uma API que implementa um `CRUD`, ou seja, um conjunto de *endpoints* que permite *listar*, *pesquisar*, *cadastrar*, *editar* e *remover* os itens dessa lista de receitas. Até o final do dia, você vai implementar uma API que permite fazer todas essas operações.

Vamos começar implementando o endpoint que retorna a lista de receitas na rota `/recipes` quando a requisição for do tipo `GET`. A lista de receitas virá de uma array definido no código. Siga o exemplo abaixo:
```js
/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
```

Agora, ao invés de utilizar o método `.send`, você vai utilizar o método `.json`. O método `.send `é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que será retornado. Mas, para deixar mais evidente que o que vai ser devolvido é um JSON, utilize o método `.json`.

Para testar a aplicação você pode fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes. Porém, como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. Os mais famosos são o *Postman* e o *Insomnia*.

Existe uma terceira possibilidade: usar um comando chamado [httpie](https://httpie.io/) que permite fazer uma requisição direto pelo terminal. Para instalar esse comando siga as instruções da [documentação](https://httpie.io/docs#installation).

Uma vez instalado, execute o comando abaixo:
```
http: 3001/recipes
```

Observe que não é preciso colocar a URL completa, já que o HTTPie assume que as requisições são feitas para localhost por padrão. Após rodar o comando você deve conferir que ele vai retornar uma resposta como mostrado abaixo:
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 205
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Aug 2021 22:06:58 GMT
ETag: W/"cd-wMzyMLQRx8RrJ9Bl5KB9X7VuhcA"
Keep-Alive: timeout=5
X-Powered-By: Express

[
    {
        "id": 1,
        "name": "Lasanha",
        "price": 40,
        "waitTime": 30
    },
    {
        "id": 2,
        "name": "Macarrão a Bolonhesa",
        "price": 35,
        "waitTime": 25
    },
    {
        "id": 3,
        "name": "Macarrão com molho branco",
        "price": 35,
        "waitTime": 25
    }
]
```

Esse `JSON` que foi retornado pode ser utilizado por uma aplicação front-end para renderizar essa lista no navegador utilizando o método fetch (bastante utilizado nos nossos exercícios e projetos no módulo de fundamentos e principalmente nos projetos de front-end). A diferença é que agora a requisição vai ser feita para uma API que você mesmo desenvolveu e que roda na sua máquina. A estrutura básica de uma requisição utilizando o `fetch` pode ser escrita da seguinte forma:
```js
fetch('http://localhost:3001/recipes')
	.then(resp => resp.json())
```


## Como ficaria em um component react ?
```js
class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading && <Loading />}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
```

⚠️ Observação: Para uma aplicação *back-end* receber requisições de uma aplicação *front-end*, ou qualquer outra aplicação, é preciso *instalar um módulo que libera o acesso da nossa API para outras aplicações*. Para isso basta instalar um módulo chamado `cors` usando `npm i cors` e adicionar as seguintes linhas no seu arquivo `index.js`.
```js
// const express = require('express');
// const app = express();
const cors = require('cors');

app.use(cors());
```
> Para testar integração entre front-end e back-end é necessário fazer esse ajuste no código da API.


## Fixando
1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
```js
const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
```
2. Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.
