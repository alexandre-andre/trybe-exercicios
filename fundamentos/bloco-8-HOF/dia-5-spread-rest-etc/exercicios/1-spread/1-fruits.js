// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamão', 'abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['cereja', 'manga', 'melancia'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ... additional]
};

console.log(fruitSalad(specialFruit, additionalItens));