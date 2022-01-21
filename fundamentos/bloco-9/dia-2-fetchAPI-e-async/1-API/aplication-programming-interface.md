# Application Programming Interface (API)

**API** permite que aplicações se comuniquem umas com as outras, servindo de "**ponte**" para elas. Uma API não é um banco de dados ou um servidor, **mas a responsável pelo controle dos pontos de acesso a eles**, através de um conjunto de rotinas e padrões de programação.

**API WEB** retornam dados em **response** (resposta) a um **request** (requisição) do cliente, permitindo acesso a dados de fontes externas.

APIs também nos permitem compartilhar dados com outros sites ou aplicações.


## Por que precisamos de APIs?

Imagine a seguinte situação: você está trabalhando em um blog e gostaria de exibir para os visitantes os tweets que fazem referência a ele.
Uma estratégia seria contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados em tempo real.

Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.


## Quem precisa criar e manter APIs?

APIs públicas e baseadas na web são desenvolvidas e aprimoradas constantemente por grandes empresas de tecnologia (principalmente de mídias sociais), organizações governamentais, startups de software ou qualquer outra empresa ou pessoa que colete dados e precise disponibilizá-los de algum modo.


## Como uma API se diferencia de um back-end padrão de um site?

> Toda API é um back-end, mas nem todo back-end é uma API.

Um back-end padrão de um site retorna templates (um arquivo HTML pronto, por exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response .

As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON .


## O que é JSON e por que o usamos?
J ava S cript O bject N otation
```javascript
{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
```


## Como utilizar APIs na minha aplicação?

APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
- Encontre uma API pública, que seja bem documentada e mantida;
- Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
- Entenda o formato dos dados disponíveis;
- Faça requests e receba responses da API com os dados que você deseja receber.


## Fazendo uma requisição a uma API

Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.

No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response .
```terminal
wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q
```
