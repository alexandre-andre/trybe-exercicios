// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  const elementos = array.map(element => element);
  return elementos.reduce((acc, el) => acc + el)
}
console.log(flatten(arrays))