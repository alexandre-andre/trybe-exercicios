# Componentes Route com passagem de parâmetro (rotas dinâmicas)

Em rotas dinâmicas utilizamos o mesmo componente para renderizar vários caminhos diferentes.

Para fazer uso de parâmetro de URL em `Route` , é preciso fazer uso da sintaxe `:nome_do_parametro` **dentro** da propriedade `path` . `<Route path="/movies/:movieId" component={Movie} />` vai definir um **parâmetro** chamado **movieID** , e o componente `Movie` é mapeado a qualquer um dos seguintes caminhos de URL :
- /movies/1
- /movies/2
- /movies/thor