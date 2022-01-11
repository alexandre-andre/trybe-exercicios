// 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser .
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => { // 1 => passamos o callback como parametro
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user)); // 2 => imprimimos a callback recebendo user como argumento
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// usamos em conjunto `callbacks` e `assincronicidade`, que nesse caso correspondem a:
// 1 operação assíncrona: retorno de `user` depois de um certo tempo
// 2 callbacks: as funções `userFullNames` e `userNationality`, que são chamadas depois que o usuário é retornado.