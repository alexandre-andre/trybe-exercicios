# Importância das HOFs
Imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops :
```javascript
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.grade >= 60) {
            student.approved = 'Aprovado'
        } else {
            studente.approved = 'Reucperação'
        }
    }
}
verifyGrades()
console.log(students)
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
```


# Usando `forEach`
### `Array.forEach()`
```javascript
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyStudents() {
    students.forEach((student, index) => {
        if (student.grade >= 60) {
            students[index].approved = 'Aprovado'
        } else {
            student.approved = 'Recuperação'
        }
    })
}
verifyStudents()
console.log(students)
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
```



## Vamos a mais um exemplo. Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
### com for
```javascript
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        firsMultipleOf5 = number[i]
        break
    }
}
console.log(firsMultipleOf5); // 50
```

### com `find`
### `Array.find()`
```javascript
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const fistMultipleOf5 = numbers.find(item => item % 5 === 0 )
})
console.log(firstMultipleOf5); // 50
```
Ponto de observação: note que o parâmetro passado para numbers.find(), number => number % 5 == 0 , é uma arrow function, igual no primeiro exemplo de forEach, em que foi passada a função verifyGrade .
