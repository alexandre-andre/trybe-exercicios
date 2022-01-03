# Array.map
Na função `map`, o que muda é o retorno, ele não altera o array original.
Diferença entre `for` e `map`.

### for
```javascript
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const full = [];

for (let i = 0; i < persons.length; i ++) {
    full.push(`${persons[i].firstName} ${persons.[i].lastName}`)
};

console.log(full);
// ["Maria Ferreira", "João Silva", "Antonio Cabral"]
```

### map
```javascript
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
console.log(fullNames);
// ["Maria Ferreira", "João Silva", "Antonio Cabral"]
```
O `for` foi substituído por apenas uma linha de código.



Outro exemplo é o de realizar um cálculo utilizando os valores dos elementos e retornar um array novo sem alterar o anterior.
### for
```javascript
const numbers = [1, 2, 3, 4, -5];
const numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
    numbers2.push(numbers[i] * 2)
}
console.log(numbers); // [1, 2, 3, 4, -5];
console.log(numbers2); // [2, 4, 6, 8, -10];
```


### map
```javascript
const numbers = [1, 2, 3, 4, -5];
const numbers2 = numbers.map((number) => number * 2);
console.log(numbers); // [1, 2, 3, 4, -5];
console.log(numbers2); // [2, 4, 6, 8, -10];
```


## Unindo arrays com map
Outra forma de usar o `map` é unir arrays para criar um novo.
```javascript
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
```

O objetivo seria juntá-los assim: 
```javascript
const listProducts = [{ Arroz: 2.99 },...]
```

A solução é:
```javascript
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (arrProducts, arrPrices) => arrProducts.map((product, index) => (
    /* cria um objeto para cada produto com seu preço
        onde, no objeto, usamos a [] para acessar o valor do elemento 
    */
    { [product]: arrPrices[index] }
));
console.log(listProducts(products, prices));
// [[object Object] {
//   Arroz: 2.99
// }, [object Object] {
//   Feijão: 3.99
// }, [object Object] {
//   Alface: 1.5
// }, [object Object] {
//   Tomate: 2
// }]
```

#### Qual a diferença, afinal, de map para o forEach ? São duas principais:
- `map` -> aplica sobre os elementos de uma array uma função e retorna um array novo, _sem modificar o original_.
- `forEach` -> pode modificar o array original e por padrão não retorna nada, ele pode criar um array novo a partir de um antigo. Pode simplesmente buscar por um elemento e retorná-lo como pode não retornar nada, enfim, tem diversas utilidades.


### Para ficar mais claro
```javascript
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((number => number * 2))); // [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
    if (numero < 5 && numero % 2 == 0) {
        paresMenoresQueCinco.push(numero)
    }
})
console.log(paresMenoresQueCinco); // [2, 4]
```
O `forEach` faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!


# HOFs junto com o map. 
Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.
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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];
```

Exemplos de funções apenas usando `for` e depois como refatorá-las para quem usem HOFs .

Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
### com `for`
```javascript
const turnoManha = [];

for (let index = 0; index < estudantes.length; index++) {
    if (estudantes[i].turno === 'Manhã') {
        turnoManha.push(`${estudante[i].nome} ${estudante[i].sobrenome}`);
    };
};
console.log(turnoManha);
// ["Jorge Silva", "Jorge Santos", "Maria Silveira", "Natalia Castro", "Wilson Martins"]
```


### com `map` e `filter`
```javascript
const turnoManha = eestudantes.filter((estudantes) => (estudantes.turno == 'Manhã')).map((estudantes) => `${estudante.nome} ${estudante.sobrenome}`);
console.log(turnoManha);
// ["Jorge Silva", "Jorge Santos", "Maria Silveira", "Natalia Castro", "Wilson Martins"]
```
- Primeiro utilizamos o `filter` para filtrar todos os estudantes que estudam no período da manhã. Como o retorno do filter é um array de elementos, usamos o `map` logo em seguida para retoranr os nomes completos dos estudantes em cada posição desse novo array. 
- o `map` nesse caso, é usado para retornar as informações pedidas, o nome completo, enquanto o `filter` é usado para filtrar o array.


## Agora vamos usar um map com um find .
- Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

### apenas com `for`
```javascript
const findStudents = (name, students) => {
    for (let index = 0; index < students.length; index++) {
       if (students[i].nome === name) {
           return students[index];
       }
    };
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index< getStudent.materias.length; index++) {
    if (getStudent.materias[index].nota >= 60) {
      report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
      report.push(`${getStudent.materias[index].name} Reprovado`);
    }
  }
}



```

### com `map` e `find`
```javascript
const reportStatus = (students, name) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.map((materia) => {
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  })
}
console.log(reportStatus(estudantes, 'Natália'));
// ["Matemática Aprovado", "Português Aprovado", "Química Aprovado", "Biologia Reprovado"]
```
1. fizemos um `find` para buscar e retornar os dados do estudante.
  - o objeto foi retornado e salvo na variável studenteInfo
2. depois usamos o `map` para percorrer as matérias do objeto retornado e salvar o dado desejado em um array. 
