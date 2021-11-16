// 2 - Crie uma função que receba um arr de inteiros e retorne o índice do maior valor.
let arr = [2, 3, 6, 7, 10, 1];

function mostValue(arr) {

    let biggerNum = 0; 

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > biggerNum) {
            biggerNum = arr[i]
        }
    }

    return arr.indexOf(biggerNum);
}
console.log(mostValue(arr))