// ARRAY
let arrNome = []
// OBJETO
let arrObj = {}



let person = {
    firstName: 'Alexandre',
    lastName: 'André',
    age: 32,
    canDrive: true,
    favoritesMovies: ['John Wick', 'Duelo de Titãs']
}

console.log('person ' + person);
console.log('person.favoritesMovies ' + person.favoritesMovies[1])

person.adress = { street: 'Cadete Polonia', number: '524' }
console.log('person.adress ' + person.adress)


// DELETANDO PROPRIEDADE DO OBJETO
delete person.canDrive
console.log(person)



// FOR/IN
console.log('for in - imprimindo a chave')
for (let key in person) {
    console.log('- propriedade do objeto person - ' + key)
}


console.log('for in - imprimindo valor da chave')
for (let key in person) {
    console.log(person[key])
}



console.log('for in - trava após chegar a determinada chave')
for (let key in person) {
    console.log(person[key])

    if (key == 'lastName') {
        break;
    }
};

// let array = ['eu', 'vou', 'aprender']

// for (let key of array) {
//     console.log('key of ' + key)
// }

// for (let key in array) {
//     console.log('key in ' + key)
// }




// FUNCAO
console.log('FUNCAO')
let arrSalario = [3000, 4000, 5000];
let n = 3
function calculaIPRF(salario, base) {
    let resultado = (salario /  2) * salario;

    return resultado
}
calculaIPRF()
console.log('calculo IPRF:', calculaIPRF(1_000, 2))
console.log('calculo IPRF:', calculaIPRF(2_000, 3))
console.log('calculo IPRF:', calculaIPRF(3_000, 4))

for (let i = 0; i < n; i++) {
    console.log(calculaIPRF(arrSalario[i],4));
}