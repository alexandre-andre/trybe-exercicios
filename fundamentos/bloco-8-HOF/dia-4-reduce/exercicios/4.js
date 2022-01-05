// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  /** MAP com REDUCE  */
  // // 1- cria um array de objetos a partir do array de estudantes 
  // const nameAndAverage = students.map((student, index) => ({
  //   name: student, // 2- name recebe o estudante do momento
  //   // 3- grades[index] pega o array acessado no momento
  //   // 4- aplica o recude nele para pegar seus valroes e reduzir a um tipo de dado
  //   average: grades[index].reduce((acc, item) => (acc + item)) / grades[index].length,
  // }));
  // return nameAndAverage;

  /** REDUCE com MAP */
  const sumGrades = (acc, item) => acc + item
  const calcAvarage = (index) => {
    return grades[index].reduce(sumGrades, 0) / grades[index].length
  }
  return students.reduce((acc, student, index) => {
    const obj = {
      name: student,
      avarage: calcAvarage(index),
    }

    acc.push(obj)
    return acc
  }, [])
}
console.log(studentAverage())
// [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];