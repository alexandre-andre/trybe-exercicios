# Visualizando o conteúdo das requisições no Console
É muito comum, durante a construção de uma API, que a gente tenha dificuldade para visualizar o que está sendo feito por cada endpoint em cada requisição.

Para resolver esse problema, é possível adicionar um middleware que imprimirá no console as informações recebidas no parâmetro `req`.
```js
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});
```

Adicionando o código acima, sempre que uma requisição http for executada, o *middleware* criado imprimirá no console as informações contidas no parâmetro `req`. Lembrando que isso só afetará as rotas que forem declaradas abaixo da definição do `app.use`.

❗Importante ressaltar que essa prática não deve ser utilizada em produção, pois serve apenas para dar visibilidade no momento do desenvolvimento.
