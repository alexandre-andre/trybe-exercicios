# Estruturando uma HOF
Para isto, é extremamente importante ter em mente que as HOF nos permitem compactar ações e não somente repassar valores.
```javascript
const repeat = (number, action) => {
    for (let i = 0; i <= number; i++) {
        action(i);
    }
};
repeat(5, console.log)
// 0
// 1
// 2
// 3
// 4
// 5
```
Essa função cria um laço de repetição entre 0 e um número especificado via parâmetro (`number`) e para mostrar no console o valor da variável `i` de 0 a N (`number`).


Outro exemplo:
```javascript
const repeat = (number, action) => {
    for (let count = 0; count <= number; count++) {
        action(count)
    }
};

repeat(4, (number)) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
});
// 0
// "is even"
// 2
// "is even"
// 4
// "is even"
```
Pegamos a implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função `repeat`:
1. um número até que ponto será testado, nesse caso 4
2. ação que será executada quando chamada `action(count)` na função `repeat`, neste caso uma função para testar os números.
O segunndo parâmetro é uma função que recebe o `count` como argumento, priveniente da execução do `action(count)` dentro da função `repeat`. Dese modo, caso o `count` passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atenderem os critérios.

Ajustando para par ou impar
```javascript
const repeat = (number, action) => {
    for (let count = 0; count <= number; count++) {
        action(count)
    };
};

const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is even`)
    };
};

const isOdd = (number) => {
    if (number % 2 !== 0) {
        console.log(`${number} is odd`)
    };
};
repeat(4, isEven); // testa numeros pares
repeat(4, isOdd); // testa numeros impares
```
Nesse caso transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções  chamadas `isEven` e `isOdd` . Após isso, só alteramos o segundo parâmetro ao chamar a função `repeat`.

A função recebida como argumento pela HOF, também é conhecida por `callback`. No exemplo, `repeat`é uma HOF que recebe `isEven` e `isOdd` como callback.
```javascript
const numberGenerator = () => {
    return Math.random() * 100;
}

// imprime a callback
console.log(numberGenerator); // [function]
```
Essa é a mesma lógica quando usamos callback dentro de outras funções. 


### Para fixar
1. função que retorne a string 'Acordando!!' ;
2. função que retorne a string 'Bora tomar café!!' ;
3. função que retorne a string 'Partiu dormir!!' ;
4. HOF chamada doingThings e configurada para que imprima no console o resultado da execução das funções anteriores.
```javascript

const wakegUp = () => 'Acordando';
const breackfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

// HOF em ação, chamando uma callback como parametro
const doingThings = (callback) => {
    // dentro executa a callback retornando sua saída
    console.log(callback())
}

// Ao chamar a função doingThings:
doingThings(wakeUp); // 'Acordando
doingThings(breackfast); // 'Bora tomar café!!'
doingThings(sleep); // 'Partiu dormir!!'
```