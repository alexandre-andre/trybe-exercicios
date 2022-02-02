# Componente `Switch`

`Switch` é usado para **encapsular** um *conjunto de rotas* definido via `Route` 

Dada a URL atual da aplicação, o `Switch` procura **de cima para baixo pelo primeiro** `Route` que possuir correspondência entre seu caminho definido na prop `path` do componente e a URL atual da aplicação.

```javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>
```

Ao mudarmos a URL da aplicação para que seu caminho seja `/contact` , **SOMMENTE** o componente `Contact` será renderizado.

Todos os filhos de um `Switch` **DEVEM** ser `Route` ou `Redirect` . O primeiro filho que corresponder ao local atual será renderizado. 

Sem o `Switch` mais de um componente poderia ser renderizado na mesma rota de forma errada.

Em uma comparação direta, é como o `switch/case` do javascript :

**É apenas uma comparação, NÃO UTILIZE O EXEMPLO ABAIXO.**
```javascript
switch (rota) {
  case '/about':
    return <About />;
  case '/contact':
    return <Contact />;
  case '/movies':
    return <Movies />;
  default:
    return <Home />
}
```
