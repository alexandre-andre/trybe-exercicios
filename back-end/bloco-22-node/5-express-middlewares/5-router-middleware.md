# Router middleware
O `Router` é um *middleware* que "agrupa" várias rotas em um mesmo lugar, como se fosse uma versão mini do `app` do Express. Ele é depois "*plugado*" no "*app principal*".

Vamos utilizar o `Router` para organizar o código que desenvolvemos no conteúdo anterior.
```js
/* recipesRouter.js */
const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name '') return res.status(400).json({ message: 'Invalid name!' });
  next();
}

router.get('/', (req, res) => {
  res.status(200).json(recipes);
});

router.get('/pesquisar', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.findIndex((e) => e.name.includes(name) && e.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((e) => e.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  res.status(200).json(recipe);
});

router.post('/', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;
```

```js
/* index.js */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
```

Repare no uso de mais um parâmetro na chamada à função `app.use`. Isso diz ao Express que queremos que aquele *middleware* (no caso o router) seja executado para qualquer rota que comece com aquele caminho. Repare que, ao registrar uma rota no `router`, não precisamos repetir a parte do caminho que já passamos para `app.use`. É por isso que a rota que definimos com `router.get('/:id')` na verdade se torna acessível através de `/recipes/:id`.

`Routers` *suportam que qualquer tipo de middleware* seja registrado. Veja abaixo:
```js
/* recipesRouter.js */
// const express = require('express');
// const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

// ...

// module.exports = router;
```

```js
/* index.js */
// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
	res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/fechado', authMiddleware, function (req, res) {
	res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });


// app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
```
