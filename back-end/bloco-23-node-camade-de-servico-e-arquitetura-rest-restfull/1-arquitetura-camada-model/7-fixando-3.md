# Fixando 3
1. Ainda usando a tabela books como referência crie uma rota `books` do tipo `POST`. Faça as seguintes validações:
  - Título não pode ser vazio;
  - Título precisa ter pelo menos três caracteres;
  - O campo `author_id` não pode ser vazio;
  - O campo `author_id` só é válido se existir uma pessoa autora com esse id;

- Se algum dos requisitos anteriores não for atendido, retornar um `json` no formato abaixo, com status `400`.
```sql
{
	message: 'Dados inválidos'
}
```

Caso contrário, insira o livro na tabela `books` e retorne o `json` no formato abaixo, com o status `201`.
```sql
{
	message: 'Livro criado com sucesso!'
}
```
