// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(nomes, letra) {
  // escreva seu código aqui
  let letraLowerCase = letra.toLowerCase();
  let letraUpperCase = letra.toUpperCase();
  return nomes.reduce((acc, item) => {
    return acc + // add no acumuludador o valor do acumulador contador
    
    item.split('').reduce((contador, letra) => {
      if (letra == letraLowerCase || letra == letraUpperCase) {
        return contador + 1 // itera 1 no contador
      }
      return contador // retorna contador
      
    }, 0)

  }, 0)
  
}
console.log('Questão 5', containsA(names, 'A'))