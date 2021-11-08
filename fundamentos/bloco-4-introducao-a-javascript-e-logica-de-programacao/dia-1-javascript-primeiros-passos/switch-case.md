# Switch e Case
Outra forma de criarmos `estruturas condicionais` com o switch/case (além do if/else).

A estrutura `switch/case` é utilizada quando queremos executar diferentes ações. A expressão que passamos para o `switch` é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em `default`.

Exemplo:
1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada'. Como default , imprima a mensagem de 'não se aplica'.
```javascript
let situacao = 'Lista';

switch(situacao){
    case "Aprovado":
        console.log('Aprovado');
        break;
    
    case "Lista":
        console.log('Lista');
        break;

    case "Reprovada":
        console.log('Reprovada');
        break;

    default:
        console.log('Não se aplica');
}
```