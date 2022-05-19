# Exercícios

## Exercício 1 🚀
Crie uma rota `POST /sales` que receba uma requisição que envie `productName` e `infos` no `body` da requisição, como na imagem abaixo.
```json
{
  "productName": "SmarTV",
  "infos": {
    "saleDate": "19/02/2022",
    "warrantyPeriod": 3
  }
}
```

As seguintes validações deverão ser realizadas:
1. `productName` deve ser obrigatório e ter mais de 4 caracteres.
2. Caso o campo `productName` não seja passado, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo `productName` é obrigatório" }` ;
3. Caso o campo `productName` possua menos de 4 caracteres, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo `productName` deve ter pelo menos 4 caracteres" }`;
4. `infos` deve ser um objeto obrigatório contendo duas chaves: saleDate e warrantyPeriod;
5. Caso o campo `infos` não seja passado, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo infos é obrigatório" }` ;
6. `saleDate` deve conter uma data válida no padrão `dd/mm/aaaa;`
7. Caso o campo `saleDate` não seja passado, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo saleDate é obrigatório" }` ;
8. Caso o campo `saleDate` não seja uma data válida no formato `dd/mm/aaaa`, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo saleDate não é uma data válida" }` ;
9. `warrantyPeriod` deve ser um número inteiro entre 1 e 3;
10. Caso o campo `warrantyPeriod` não seja passado, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo warrantyPeriod é obrigatório" }` ;
11. Caso o campo `warrantyPeriod` não seja um número entre 1 e 3, deve ser retornado o código `status 400` e um `JSON` com a mensagem `{ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" }` ;
12. Caso todos os campos sejam válidos, deverá ser retornado uma resposta com o código de `status 201` e um `JSON` contendo uma mensagem de sucesso `{ "message": "Venda cadastrada com sucesso" }`;


## Exercício 2 🚀
1. Na mesma API criada no Exercício 1, adicione uma rota `POST /signup`
- A rota deve receber, no body da requisição, os campos `email, password, firstName e phone`;
- Caso algum dos campos não esteja preenchido, a response deve possuir `status 401 - Unauthorized` e o JSON `{ message: 'missing fields' }`;
- Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o `status 200 - OK`, e o JSON `{ token: '<token-aleatorio>' }`.

Dica: Para gerar o token você pode utilizar a função `randomBytes`, do módulo `crypto` do Node, dessa forma:
```js
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```

2. Adicione autenticação ao endpoint `POST /sales` criado no Exercício 1
- A autenticação será validada através do token gerado ao realizar o signup;
- O token deve ser encontrado no header `Authorization`;
- O token deve ter exatamente 16 caracteres;
- Caso o token seja inválido ou inexistente, a resposta deve possuir o `status 401 - Unauthorized` e o JSON `{ message: 'Token inválido!' }`.
