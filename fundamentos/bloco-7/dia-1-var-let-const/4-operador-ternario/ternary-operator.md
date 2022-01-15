# ternary operator
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;`
A sintaxe do operador ternário é bem simples: x ? y : z .
- O x é uma condição que será avaliada como verdadeira ou falsa;
- O y é o retorno se a condição for verdadeira;
- O z é o retorno se a condição for falsa;
 
Ele funciona muito bem com as sintaxes simplificadas, como arrow functions, por exemplo:
```javascript
const trueExpression = (1 + 1 === 2) ? 'verdade' : 'mentira'
console.log(trueExpression) // verdade

const falseExpression = (2 + 2 === 22) ? 'verdade' : 'mentira'
console.log(falseExpression) // mentira
```

é bom saber que o operador ternário não substitui as expressões condicionais tradicionais! Em qualquer situação onde exista mais de uma condição a ser avaliada, gerando três ou mais resultados possíveis, esqueça o ternário.
```javascript
// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
        return 'Di maior'
    } else {
        return 'Di menor'
    }
};

checkTernary = age => (age >= 18) ? 'Di maior' : 'Di menor'

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary = (fruit === 'maçã') ? 'Essa fruta é vermelha' : ((fruit === 'banana') ? 'Essa fruta é amarela' : 'Não sei a cor');
