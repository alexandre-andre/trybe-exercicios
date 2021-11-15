// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array = [2, 4, 6, 7, 10, 0, -3];

function lessValue(x) {

    let lessNum = Math.min(...x)
    return lessNum;
}
console.log(lessValue(array))