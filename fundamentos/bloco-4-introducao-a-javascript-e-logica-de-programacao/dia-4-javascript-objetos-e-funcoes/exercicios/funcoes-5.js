// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let array = [2, 3, 2, 5, 8, 2, 3];

function mostRepeat(x){
    let countRep = 0;
    let countNum = 0;
    let indexRepNum = 0;

    // for in em array percorre todo o array
    for (let index in x) {

        // vai guardar o valor do numero que está passando no índice
        let verificaNumero = x[index];
        console.log('let verificaNumero: ' + verificaNumero)

        // vai percorrer por todo o array verificando se encontra o valor do indice armazenado pelo primeiro for
        for (let index2 in x) {
            console.log('compara valor de index: ' + verificaNumero + ' - compara com valor de index2: ' + x[index2])

            // se verificaNumero = o valor do indice que está sendo comparado
            if ( verificaNumero == x[index2]) {
                countNum ++
            }
        }

        if (countNum > countRep) {
            countRep = countNum;
            // indexRepNum recebe o valor do indice
            indexRepNum = index;
        }

        // countNum tem teu valor zerado, para nova verificacao
        countNum = 0;
    }

    return 'o numero mais repetido é: ' + x[indexRepNum]    
}
console.log(mostRepeat(array))


// METODO 2
function maisRepetido(numeros) {
    let num = {};

    for (let i = 0; i < numeros.length; i++) {
        let valor = numeros[i]
        console.log('guarda valor no indice do momento, let valor: ' + valor);

        if (num[valor] == undefined) {
            num[valor] = 1;
        
        } else {
            num[valor] ++
        }
    }

    let contRepetido = 0;
    let contNumero = 0;

    // pecore o obejeto num
    for (let index in num) {
        
        // se o valor de contRepetido < que o valor que está no indice em num[index]
        if (contRepetido < num[index]) {
            console.log('contRepetido: ' + contRepetido + ' - num[index]: ' + num[index])
            // guarda o numero q está sendo repetido
            contRepetido = num[index]
            // guarda a qtd de vezes que o o numero foi repetido
            contNumero = index
        }
    }

    return contNumero;
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))
