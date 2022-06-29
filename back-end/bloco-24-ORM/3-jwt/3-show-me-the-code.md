# Show me the code!
Nesse exemplo, vamos trabalhar com as seguintes tecnologias:
- Nodejs;
- Express;
- Postman;
- Sequelize;
- MySQL;
- JWT.

Para começar, vamos usar um projeto base. Esse projeto é, basicamente, uma API Express sem autenticação JWT.


## Testando nossa API
Imagine que esse é um serviço real que você usará em produção. Tenha isso mente, pois nesses testes vamos abordar alguns problemas que o JWT nos ajudará a resolver!

Para começar a usar a nossa plataforma, precisamos criar um usuário. Para isso, faremos uma requisição *POST* para o *endpoint /api/users*, passando um nome de usuário e senha:

resposta:
```json
{
  "message": "Novo usuário criado com sucesso",
  "user": "italssodj"
}
```

Até aí, tudo certo. Não precisamos de autenticação para criar um usuário, mas para consultar as nossas postagens no blog, precisamos! Então, vamos fazer o login. Para isso, fazemos uma requisição *POST* para o endpoint */api/login*, passando o nome de usuário e senha usados no cadastro:

resposta:
```json
{
  "message": "Login efetuado com sucesso"
}
```

Legal, estamos logados. Agora já podemos pegar as postagens do nosso blog! Fazemos uma requisição *GET* para o endpoint */api/posts/*:

E recebemos os posts como resposta:
```json
{
    "mockPosts": [
        {
            "title": "título fake",
            "content": "conteúdo conteúdo conteúdo conteúdo conteúdo"
        },
        {
            "title": "título fake",
            "content": "conteúdo conteúdo conteúdo conteúdo conteúdo"
        },
        {
            "title": "título fake",
            "content": "conteúdo conteúdo conteúdo conteúdo conteúdo"
        },
        {
            "title": "título fake",
            "content": "conteúdo conteúdo conteúdo conteúdo conteúdo"
        }
    ]
}
```

Agora, note uma coisa: quando formos utilizar a API com nosso front-end, como é que sabemos que estamos autenticados? Podemos fazer essa verificação no front-end e, caso a requisição de login retorne "sucesso", fazemos uma requisição para obter os posts.

Outras perguntas possíveis são:

Mas e se alguém inspecionar as requisições do browser e descobrir o endpoint /api/post? Essa pessoa vai poder acessar dados que não deveria.

Além disso, se o browser for fechado, terá que logar novamente toda vez que precisar usar a API?

E se for um sistema de banco, em que só se pode ficar online por um determinado tempo, como saberemos que a sessão expirou?

No back-end, ao chegar uma requisição para /api/posts, como fazemos para retornar somente os posts de quem requisitou?

Se o acesso for a um recurso que requer um nível de autorização mais elevado, como fazemos para saber se a pessoa é, por exemplo, um admin?

É aí que o JWT entra. Agora vamos alterar um pouco a API para adicionar autenticação via JWT. No final, vamos poder saber se a pessoa usuária está de fato autenticada, quem essa pessoa é e definir um tempo de sessão para ela. Caso essa pessoa esteja autenticada e um JWT válido seja apresentado no header `Authorization`, ela será autorizada a acessar diversas rotas dentro da aplicação, de acordo com suas credenciais, sem a necessidade de uma nova autenticação a cada requisição.
