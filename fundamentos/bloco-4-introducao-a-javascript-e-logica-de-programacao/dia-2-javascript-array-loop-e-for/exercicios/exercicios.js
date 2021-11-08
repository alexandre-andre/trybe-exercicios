// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/**
 * Exercício 1. 
 * Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
 */
console.log('exercicio 1')
for ( num of numbers){
    console.log(num);
}


/**
 * Exercicio 2. 
 * Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 */
console.log('exercicio 2')
let soma = 0

// soma de elementos do array com for
for ( let i = 0; i < numbers.length; i++){
    soma += numbers[i]
}
console.log(soma + 'usando for')

// soma de elementos do array com reduce
let somaa = numbers.reduce((somaa, i) => {
    return somaa + i;
})
console.log(somaa + ' usando reduce()')


/**
 * Exercicio 3. 
 * Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
 * // A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
 */
console.log('exercicio 3')
let soma3 = 0
for ( let i = 0; i < numbers.length; i++){
    soma3 += numbers[i];
}

let media = soma / numbers.length
console.log(media)

/**
 * Exercicio 4. 
 * Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". * Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 */
console.log('Exercício 4')
if (media > 20){
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}

/**
 * Exercício 5. 
 * Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 */
console.log('Exercício 5')

let ordenaArray = numbers.sort((a, b) => b - a);
console.log(ordenaArray[0] + ' opção 1 - ordena o próprio array com .sort')

let maior = Math.max(...numbers);
console.log(maior + ' opção 2 - procura o maior valor com Math.max()')

