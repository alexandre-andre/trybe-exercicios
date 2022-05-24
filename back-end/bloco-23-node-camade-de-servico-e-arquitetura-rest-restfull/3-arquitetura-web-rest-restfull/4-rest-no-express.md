# REST no Express
De modo geral, os princípios devem ser seguidos independente da tecnologia que utilizamos na implementação da nossa API. Ela pode ser escrita em `Node.js, Python, Perl`, *entre outros*.

Entretanto, uma das vantagens de se usar o `Express` para construção de APIs é a **organização das rotas**. Podemos definir N controllers (funções callback que lidam com as requisições) para a mesma rota, separando-as apenas pelo verbo HTTP da requisição.
Além disso, torna-se mais simples retornar um formato específico solicitado pelo cliente e/ou retornar um status HTTP.
```js
app.route('/user')
  .get((req, res) => {
    // Realiza uma operação
    res.status(401).send({
      message: 'Usuário não autorizado'
    })
  })
  .post(...)
  .put(...)
  .delete(...)
```