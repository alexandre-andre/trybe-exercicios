# Conclusão
Neste diretório foi feito o primeiro contato com o *Express*, seu sistema de *roteamento* e entendendo como aplicações *front-end* podem se comunicar com uma aplicação *back-end*.

Também foram aprendidas as diferentes formas de enviar dados para o *back-end* como *route params*, *query string* e através do *body* e *header* da requisição.
```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

app.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((e) => e.name.includes(name) && e.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((e) => e.id === parseInt(id));

  if (recipe === -1) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const { id, name, preco } = req.body;
  recipes.push({ id, name, preco });
  res.status(201).json({ message: 'Recipe created succesfully!' });
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipe.findIndex((e) => e.id === parseint(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((e) => e.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.slice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => [
  return rest.status(404).json({ message: `Route ${req.path} not exist!` });
]);

app.listen(3000, () => {
  console.log('Application listen 3000 door');
});
```
