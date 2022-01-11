const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
      releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
function reduceToNames(array) {
  // escreva seu código aqui
  // o reduce cria uma string somente com os nomes dos autores
  const string = array.reduce((acc, { author }) => acc + author.name, '')
  console.log(string)
}
reduceToNames(books)

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;
function averageAge(array) {
  // escreva seu código aqui
  const qtdAutores = array.map(element => element).length;
  const sumIdadeLancamento = array.reduce((acc, element) => acc + (element.releaseYear - element.author.birthYear), 0); 
  const calcIdadeMediaPublicacao = sumIdadeLancamento / qtdAutores;
  console.log(calcIdadeMediaPublicacao);
}
averageAge(books)

/** SEGUNDA FORMA */
function reduceFunction(acc, book) {
  const age = book.releaseYear - book.author.birthYear;
  return Math.round(acc += age / books.length);
}

const teste = books.reduce(reduceFunction, 0);
console.log(teste)





// 4 - Encontre o livro com o maior nome.
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook(array) {
  // escreva seu código aqui
  const getBiggerName = array.reduce((acc, { name }) => name.length > acc ? name : acc )
  console.log(getBiggerName)
}
longestNamedBook(books)
