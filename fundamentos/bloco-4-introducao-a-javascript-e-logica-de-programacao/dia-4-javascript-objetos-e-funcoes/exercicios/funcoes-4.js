// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function mostCarateres(x) {

    let most;

    for (let i = 0; i < x.length; i++) {
        if (x[i].length > x[x.length - 1].length) {
            most = x[i]
        }
    }
    return most + ' ' + most.length + ' caracteres'
}
console.log(mostCarateres(array));