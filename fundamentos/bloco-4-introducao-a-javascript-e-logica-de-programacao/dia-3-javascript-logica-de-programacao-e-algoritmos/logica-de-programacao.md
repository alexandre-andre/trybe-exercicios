# Algorítmos
Assim como em uma receita de bolo, na programação, devemos passo a passo utilizar comandos para resolver um problema. Essa sequência de comandos se chama algoritmo . Para criar um algoritmo, temos que desenvolver uma capacidade analítica para transformar grandes problemas em pequenos e encadeados comandos lógicos. Desenvolvemos essa forma de raciocinar com a lógica de programação.

O algoritmo é uma série de comandos encadeados de forma lógica, que busca resolver algum problema.

Pense no leite com achocolatado que você toma pela manhã. Simples fazê-lo, não? Vejamos o passo a passo:
1. Pegar um copo
2. Colocar o copo em cima da mesa
3. Abrir a porta da geladeira
4. Pegar o leite
5. Fechar a porta da geladeira
6. Colocar determinada quantidade de leite no copo
7. Abrir o armário
8. Pegar o achocolatado
9. Fechar a porta do armário
10. Colocar determinada quantidade de achocolatado no copo
11. Pegar uma colher
12. Mexer no copo com a colher

Existe também, no processo de criação de um algoritmo, um conceito muito importante chamado baby steps ou "passos de bebê".

Antes de falarmos dos baby steps , vamos analisar o seguinte exercício:

> Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
```javascript
let fruits = [3, 4, 10, 1, 12];
```
A resolução do problema acontece em 3 etapas:
1. Interpretação
2. Criação do algorítmo
3. Codificação do algorítmo

Analisando o enunciado, sabemos que:
- devemos utilizar o array `fruits` ;
- o termo _percorra_ indica uma estrutura de repetição, ou loop;
- _somando todos os valores_ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
- o termo _caso_ indica uma estrutura `condicional`, ou `if` ;
- _imprima_ o valor final indica um `console.log` ;

Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps . Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

1. Adicioanr o array
2. Criar uma variável com o valor 0
3. Criar um loop que percorre o array
4. Incrementar a variável com o valor correspondente a cada loop
5. Criar um if com a condição da variável ser maior que 15;
6. caso a varável obedeça a condição
   1. Imprimir a variável
7. Caso não obedeça a condição
   1. Imprimir a mensagem "Valor menor que 16"

No momento já interpretamos o problema e já criamos um algoritmo, baseado nos baby steps , para ele. Como última etapa, vamos codificá-lo, seguindo nosso algoritmo:
```javascript
// 1
let fruits = [3, 4, 10, 1, 12];
// 2
let sum = 0;
// 3
for (let index = 0; index < fruits.length; index += 1) {
// 4  
  sum += fruits[index];
}
// 5
if (sum > 15) {
// 6.1
    console.log(sum);
// 7
} else {
// 7.1
  console.log('valor menor que 16');
}
```

Após escrever cada algoritmo, responda novamente as seguintes perguntas:
- Eu resolvi o problema?
- Havia outras maneiras de resolver o problema?
- A maneira que eu escolhi foi a mais eficiente possível?
- Seria possível inverter ou retirar algum passo?
- Se eu fosse um computador, conseguiria entender todas as intruções?

> ### Lembre-se sempre: se você travar em algum exercício, recomece seu raciocínio com baby steps! Certamente você será capaz de dividir algum passo em outros passos menores.


# Complexidade de código
__Um código muito complexo não é uma boa prática no mundo da programação__. Isso dificulta não só o acompanhamento do código, mas também a testagem ou a implementação de mudanças.

Para medir a complexidade de um código, existe a **complexidade ciclomática** , que é uma métrica de software que considera os caminhos independentes que o algoritmo pode tomar. E, quanto maior for a **complexidade ciclomática** , mais difícil é fazer o acompanhamento do código, sua manutenção e testagem.

Caso o seu código apresenta apenas uma condicional (somente um `if/else` ), ele tem dois caminhos, ou faz isso ou faz aquilo. E, quanto mais caminhos tiver, mais complexo será. Existem várias formas de aumentar a quantidade desses caminhos, _não só usando condicionais_. Pode-se, também, por exemplo, aumentar usando laços de repetição, como `for`.


## Recursos adicionais
- [W3Schools JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [Grasshopper - um aplicativo para praticar o básico de programação](https://grasshopper.app/)
- [Step up your coding game - The new way to improve your programming - skills while having fun and getting noticed](https://www.codingame.com/start)
- [Code.org - treinando lógica de programação de maneira lúdica](https://code.org/learn)
- [The 9 Best Coding Games to Build Your Programming Skills](https://www.makeuseof.com/tag/best-programming-games/)
- [CheckiO - Coding games for beginners and advanced programmers](https://checkio.org/)