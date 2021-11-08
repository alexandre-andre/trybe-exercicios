# For/of

Com a chegada do ES6, ganhamos uma nova funcionalidade para iterar arrays e objetos. Objetos iteráveis são objetos ou uma estrutura de dados que permite acessar o seu conteúdo com um `for` . O `for/of` nos permite criar loops em objetos iteráveis como **strings, arrays, entre outros**, mas vamos focar somente nesses dois!


O laço `for/of` permite iterar os valores das propriedades, nos retornando os números dentro do array numeros.
```javascript
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
// 1
// 2
// 3
// 4
// 5


let word = 'Hello';

for (let letter of word){
    console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
```


Por fim, com o `for/of`, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:

É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.
```javascript
let numbers = [10, 20, 30]

for (let num of numbers){
    console.log(num)
}
// 10
// 20
// 30

for (let sum of numbers){
    sum ++
    console.log(sum)
}
// 11
// 21
// 31
```