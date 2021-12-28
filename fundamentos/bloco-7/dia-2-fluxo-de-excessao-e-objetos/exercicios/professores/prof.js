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
// console.log(lesson2)

// 2. lista as chaves de um objeto
const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson1))

// 3. mostra tamanho do objeto
const objLength = (obj) => Object.keys(obj).length;
// console.log(objLength(lesson1))

// 4. listar valores de um objeto
const listValues = obj => Object.values(obj);
// console.log(listValues(lesson2))

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
const getValueByNumber = (obj, index) => {
    let array = Object.keys(allLessons)
    let all = Object.keys(allLessons)
    for (let val in array) {
        console.log(array[val] == 'lesson1') 
        if (array[val] == obj) {
            return `${obj}, Output: ${all[val]}`
        }
    }
}
console.log(getValueByNumber('lesson1', 0))