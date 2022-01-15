// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// vai pegar as propriedades e usá-las
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

/** objetos que serao usados como parametro da funcao planetDistanceFromSun */
const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log('A -', planetDistanceFromSun(mars)); // A
setTimeout(() => console.log('B 3_000 before A -', planetDistanceFromSun(venus)), 3000); // B
// setTimeout vai executar a acao de impressao da funcao planetDistanceFromSun recebendo venus como parametro, depois de 3000 que A for executada
setTimeout(() => console.log('C 2_000 before A -', planetDistanceFromSun(jupiter)), 2000); // C
// setTimeout vai executar a acao de impressao da funcao planetDistanceFromSun recebendo jupiter como parametro, depois de 2000 que A for executada
