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

// 1 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

function oldBooksOrdered(array) {
  // escreva seu código aqui
  const dataAtual = new Date().getFullYear()
  const oldBooks = array.filter(element => {
    if (dataAtual - element.releaseYear > 60 ) {
      return element
    }
  })
  const ordemCrescente = oldBooks.sort((a, b) => a.releaseYear - b.releaseYear)
  console.log(ordemCrescente)
}
oldBooksOrdered(books);

// 2 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];


function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui
  const getFic = array.filter(element => element.genre == 'Ficção Científica' || element.genre == 'Fantasia');
  const getNames = getFic.map(element => element.author.name);
  const orderNamer = getNames.sort();
  console.log(orderNamer);
}
// fantasyOrScienceFictionAuthors(books);

// 3 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];
function oldBooks(array) {
  // escreva seu código aqui
  const data = new Date().getFullYear();
  const filterBigger60 = array.filter(({ releaseYear }) => (data - releaseYear > 60) ? releaseYear : false);
  const getNames = filterBigger60.map(({ name }) => name);
  console.log(getNames);
};
// oldBooks(books);

// 4 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(array) {
  // escreva seu código aqui
  const getName = array.filter(({ name, author }, index) => (author.name[1] == '.' && author.name[4] == '.' && author.name[7] == '.') ? name : false )
  getName.forEach(element => console.log(element.name));
};
authorWith3DotsOnName(books);