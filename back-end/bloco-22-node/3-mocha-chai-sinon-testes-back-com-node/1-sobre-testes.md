# Testes não são de outro mundo!
Durante o processo de testes é comum executar o mesmo código várias e várias vezes para ver se seu comportamento é o mesmo que esperamos. Muitas vezes realizamos o mesmo teste alterando os dados de entrada (input) para garantir que a saída (output) é condizente com aquilo que foi codificado. Muitas das vezes o resultado não será positivo por falta de um **if**, é preciso de mais um parâmetro ou até mesmo um retorno não tratado como deve ser.


# Por que testar?
Nos testes reexecutamos o código algumas vezes buscando validar se o comportamento que queremos está sendo realizado corretamente e também alteramos os parâmetros de entrada para tentarmos garantir que tal funcionamento se mantenha mesmo com essas variações.

Imagine que queremos criar uma função que receba a média das notas de uma pessoa e responda se ela foi aprovada ou não segundo a seguinte regra:
| Média |	Situação |
|-------|----------|
| Menor que 7 |	Reprovado |
| Igual ou maior que 7 | Aprovado |

O primeiro passo que precisamos dar é pensar na estrutura da nossa função:
- Quantos e quais parâmetros ela irá esperar?
- Qual tipo de resposta ela irá retornar?

Nesse caso, nossa função deverá receber um parâmetro "média" e responder com "reprovado" ou "aprovado".

Tendo em mente esses questionamentos poderíamos partir para a implementação e chegar ao seguinte código:
```js
// examples/calculaSituacao.js
function calculaSituacao(media) {
  if (media > 7) return 'aprovado';
  return 'reprovado';
}
module.exports = calculaSituacao;
```

Agora vamos testar essa função de acordo com os comportamentos que ela deveria ter segundo a proposta, nesse caso precisamos garantir que:
- Se passado um valor menor que 7, por exemplo 4, a resposta deve ser "reprovado";
- Se passado um valor maior que 7, por exemplo 9, a resposta ser "aprovado";
- E, não podemos esquecer do "OU", sendo assim, se passado 7, a resposta deve ser "aprovado";


### Validando o cenário
Para validar esses cenários que pensamos podemos escrever algumas chamadas a nossa função:
```js
const calculaSituacao = require('./examples/calculaSituacao');
console.log(calculaSituacao(4)); // reprovado
```

Melhorando as respostas
```js
const calculaSituacao = require('./examples/calculaSituacao');
console.log('Quando a média for menor que 7, retorna "reprovado":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok`);
} else {
  console.error('Resposta não esperada');
}

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'reprovado') {
  console.log(`Ok`);
} else {
  console.error('Resposta não esperada');
}

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'reprovado') {
  console.log(`Ok`);
} else {
  console.error('Resposta não esperada');
}
```
# Temos um bug aqui! 🐞
