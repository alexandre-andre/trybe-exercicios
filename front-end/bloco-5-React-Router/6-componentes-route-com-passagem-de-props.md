# Componentes Route com passagem de props

- No que diz respeito ao componente `Route` , podemos associar um componente com o caminho da *URL* via `children` , `component` ou `render` ;
- Faz-se uso da prop `component` de `Route` quando **não é necessário** passar informações adicionais via props para o componente a ser mapeado. Ou seja, se temos um componente `About` que **não precisa de props setadas** para ser chamado, e precisamos mapeá-lo para o caminho de *URL* `/about` , podemos criar uma rota da seguinte forma: `<Route path="/about" component={About} />` ;
- Já a prop `render` de `Route` é **usada quando é necessário passar informações adicionais** via props para o componente a ser mapeado. Ou seja, se temos um componente `Movies` que *precisa receber uma lista* de filmes *via props movies* , e precisamos mapeá-lo para o caminho de *URL* `/movies` , poderíamos criar uma rota da seguinte forma: `<Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} />` ;
- Tanto component quanto `render` permitem que tenhamos **acesso a informações de rota** ( `match , location e history` ) via props do componente mapeado. Ou seja, temos a rota `<Route path="/about" component={About} />` , `About` **terá** `match , location e history` setadas via props.

```javascript
<Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} />
```
- `render`, é uma callback que no caso vai receber um parametro que são **props** (um array de props)
  - são props que o `Route` internamente estão passando para o compomente `Movies`
  - `{...props}`, está passando todas as pros do Route para o componente `Movies` 
  - Que props são essas ? `match , location e history`