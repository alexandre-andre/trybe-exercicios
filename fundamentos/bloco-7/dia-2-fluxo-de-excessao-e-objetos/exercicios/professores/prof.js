const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. função que add chave e valor a um objeto 
const addChave = (obj, key, value) => obj[key] = value;
addChave(lesson2, 'turno', 'noite');
console.log(lesson2)

// 2. lista as chaves de um objeto
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1))

// 3. mostra tamanho do objeto
const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson1))

// 4. listar valores de um objeto
const listValues = obj => Object.values(obj);
console.log(listValues(lesson2))

// 5. cria um novo objeto com todos os objetos
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons)

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const calcEstudantes = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (let value in array) {
        // value = indice acessado
        // array[value] = objeto acessado
        // array = todos os objetos
        // obj[array[value]].numeroEstudantes = no objeto, acessa o objeto no indice x e acessa a propriedade numeroEstudantes
        total += obj[array[value]].numeroEstudantes
    }
    return total
}
console.log(calcEstudantes(allLessons));

// 7. função que obtenha o valor da chave de acordo com a sua posição no objeto
const getValueByNumber = (obj, key, number) => {
  // transforma objeto em array de entradas e valores
  const objArray = Object.entries(obj)
  for (keyArray of objArray) {
    if (keyArray.includes(key)) {
      // pega o valor dentro do array do objeto na posicao number
      const valorIndiceDentroDoOBjeto = Object.keys(keyArray[1])[number];
      console.log(valorIndiceDentroDoOBjeto);
      return valorIndiceDentroDoOBjeto
    }
  };
};
getValueByNumber(allLessons ,'lesson1', 0);

// 8. verifica se o par (chave / valor) existe na função
const verifyPairValue = (obj, key, value) => {
  // transf obj em array de chave e valor
  const object = Object.entries(obj);
  for (keyObject of object) {
    if (keyObject.includes(key) && keyObject.includes(value)) return true
  }
  return false
}
console.log(verifyPairValue(lesson3, 'turno', 'noite'));
console.log(verifyPairValue(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPairValue(lesson2, 'professor','Carlos'));
// console.log(verifyPairValue(allLessons, 'professor','Carlos')); 
// nao se aplica, precisa refatorar


// BONUS
// em cima do exercicio 5
// 1. contar qts alunos assistiram tal aula
const calcAlunos = (obj, materia) => {
  const arrayObject = Object.keys(obj);
  let total = 0;
  for (key in arrayObject) {
    if (obj[arrayObject[key]].materia == materia) {
      total += obj[arrayObject[key]].numeroEstudantes
    };
  };
  // const arrayObject = Object.values(obj);
  // arrayObject.filter(element => {
  //   if (element.materia.includes(materia)) {
  //     total += element.numeroEstudantes
  //   }
  // })
  return total
};
console.log(calcAlunos(allLessons, 'Matemática'));

// 2. relotario do professor
const createReport = (obj, professor) => {}

console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

