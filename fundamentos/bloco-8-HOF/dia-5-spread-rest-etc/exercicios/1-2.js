// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// Sem o operador spread dentro do forEach
console.log('Sem o operador spread dentro do forEach')
rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});
console.log('-------------------')


// Com o operador spread dentro do forEach
console.log('Com o operador spread dentro do forEach')
rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle);
  console.log(rectangle[0] * rectangle[1]);
});

console.log('-------------------')

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
function sum(...args) {
  return args.reduce((acc, arg) => acc + arg) 
}
console.log(sum(...rectangle1));
console.log(sum(...rectangle2));
console.log(sum(...rectangle3));
console.log('-------------------')
console.log(sum(1, 2));
console.log(sum(3, 5));
console.log(sum(6, 9));