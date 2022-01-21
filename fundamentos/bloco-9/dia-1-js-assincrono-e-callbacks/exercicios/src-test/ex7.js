// 7 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const up = (str) => console.log(`mudou de: ${str},
para: ${str.toUpperCase()}`);

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str);
  }, 500);
};
uppercase('sol', up);

module.exports = uppercase;