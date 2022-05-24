# Exercícios
Criar uma aplicação que faz **CRUD** (Create, Read, Update e Delete) de usuários. A entidade que representa um usuário se chamará user.

Utilize a camada de Model para realizar a interação da aplicação com o MySql.

Com isso em mente, prossiga para a realização dos exercícios:
1. Crie o endpoint `POST /user`;
  - Seu endpoint deve receber o seguinte conteúdo no body da request:
```
{
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com",
	"password": "d496d5ea2442"
}
```

- Todos os campos são obrigatórios;
- O campo `password` deve ser uma string de 6 ou mais caracteres;
- Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
```
{
	"error": true,
	"message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```

- Caso o usuário seja criado com sucesso, retorne os campos `id`, `firstName`, `lastName` e `email` em JSON, no formato abaixo, com o status `201 Created`';
```
{
	"id": 1,
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com"
}
```

2. Crie o endpoint `GET /user`;
  - O endpoint sempre deve retornar um array;
  - Quando não houver nenhum usuário cadastrado, retorne um array vazio;
  - Deve sempre retornar o status `200 OK`;
3. Crie o endpoint `GET /user/:id`;
  - O endpoint deve retornar o usuário cujo `id` seja igual ao parâmetro `id` informado na URL. O status deve ser `200 OK`;
  - Caso um usuário com o `id` informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status `404 Not Found`;
```
{
	"error": true,
	"message": "Usuário não encontrado"
}
```

4. Crie o endpoint `PUT /user/:id`;
  - O endpoint deve receber, no `body` da `request`, os seguintes dados, em **JSON**:
```
{
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com",
	"password": "d496d5ea2442"
}
```

- Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
```
{
	"error": true,
	"message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```

- Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo `id` foi especificado na URL;
- Depois de alterar os dados do usuário no banco, retorne os novos dados com o status `200 OK`, no seguinte formato:
```
{
	"id": 1,
	"firstName": "Calebe",
	"lastName": "Junior",
	"email": "calebe.junior@gmail.com"
}
```

- Caso o usuário em questão não exista, retorne o status `404 Not Found` e os seguintes dados em JSON no corpo da resposta:
```
{
	"error": true,
	"message": "Usuário não encontrado"
}
```
