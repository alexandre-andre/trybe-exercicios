// 1 - Adicione uma callback como parâmetro da funcão getUser .

// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(userToReturn);
};


const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`
console.log(getUser(userNationality));

console.log(getUser(userFullName));
