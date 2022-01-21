# Promises

As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:

1. As Promises são `assíncronas` , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções;
2. As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono;
3. As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um `Construtor` .

## Promises possuem 3 estados:
- `Pending` (pendente): estado inicial, significa que ela está em execução;
- `Fulfilled` (resolvida): estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso;
- `Rejected` (rejeitada): estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição.

Então quando nos depararmos com um `Promise { <[estado]> }` em um `console.log()` pode significar que tentamos acessar o valor de uma Promise antes dela ter finalizado sua execução.


## Quando saber sobre Promise para usar o **fetch** ?

No caso do fetch temos dois possiveis retornos: em caso de sucesso, recebemos a response (que também é uma Promise e contém o dado final que queremos acessar), e caso algo dê errado com a nossa requisição, recebemos as informações sobre o erro.

Mas toda promessa é assíncrona e para termos o retorno dela devemos esperar um tempo até essa promessa ser resolvida.

#### Para resolver esse problema temos duas opções, `.then() .catch()` e `async/await com try/catch` . 

Esses métodos vão garantir que o código que estamos desenvolvendo aguarde o retorno de uma Promise antes de executar os próximos passos.

