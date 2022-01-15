### documentação
[map, filter e reduce](https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47)


### Uso real
Função usando os dados dos estudantes, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. 
Usando `map` quanto, dentro dele, o `reduce`!

```javascript
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
```


## código
``` javascript
const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
};

const reportBetter = (students) => students.map((student) => (
    {
        name: `${student.nome} ${student.sobrenome}`,
        materia: student.materias.reduce(getBestClass).name,
        nota: student.materias.reduce(getBestClass).nota,
    };
));

console.log(reportBetter(estudantes));
// [[object Object] {
//   materia: "Português",
//   nome: "Jorge Silva",
//   nota: 79
// }, [object Object] {
//   materia: "Biologia",
//   nome: "Mario Ferreira",
//   nota: 92
// }, [object Object] {
//   materia: "Português",
//   nome: "Jorge Santos",
//   nota: 90
// }, [object Object] {
//   materia: "Química",
//   nome: "Maria Silveira",
//   nota: 92
// }, [object Object] {
//   materia: "Português",
//   nome: "Natalia Castro",
//   nota: 70
// }, [object Object] {
//   materia: "Português",
//   nome: "Wilson Martins",
//   nota: 82
// }]
```
