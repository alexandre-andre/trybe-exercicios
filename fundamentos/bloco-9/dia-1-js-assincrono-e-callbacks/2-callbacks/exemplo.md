Qquando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro ( `callback` ).

```javascript
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName)); // Hello! My name is Ivan Ivanovich
```
1. Definimos a função `userFullName` ;
2. Definimos a função `getUser`
3. Definimos que o parâmetro que a nossa `getUser` vai receber se chama "`param`".
4. Ao **executar** a função `getUser` , passamos a função `userFullName` como **parâmetro**.

Ou seja, o parâmetro "param" de dentro da `getUser` é igual à função `userFullName` . Isso significa que, ao definirmos nossa função, `o parâmetro é dinâmico`, ele vai assumir o valor que passarmos no momento em que `executarmos` a função.
