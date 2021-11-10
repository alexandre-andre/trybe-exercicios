// 1. Ordene o array numbers em ordem crescente e imprima seus valores;
// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;
// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] < array[secondIndex]) {
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position;
//         }
//     }
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. array crescente
console.log(numbers.sort((a,b) => a - b))



// 2. array decrescente
console.log(numbers.sort((a,b) => b - a))


// 3.
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)
let numbers2 = []

for ( let i = 0; i < numbers.length; i++ ) {

    if(i == numbers.length - 1) {
        
        numbers2.push(numbers[i] * 2)

    } else {

        numbers2.push(numbers[i] * numbers[i + 1])
    }

}
console.log(numbers2)