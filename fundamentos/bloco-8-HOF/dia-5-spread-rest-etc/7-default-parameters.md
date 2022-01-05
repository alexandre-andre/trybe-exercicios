# Default Parameters

Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera?
```javascript
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
```


### correção sem ES6
Corrigindo o problema da falta de argumento na chamda da função para que haja uma saída padrão caso a função não receba argumento.
```javascript
const greeting = (user) => {
    const userDefault = typeof user == 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDefault}!`);
};

greeting(); // Wecome usuário!
```


### correção COM ES6
```javascript
const gretting = (user = 'usuário') => console.log(`Welcome ${user}`);
greeting(); // Welcome usuário!
```

## Para Fixar
Uma função que multiply multiplique dois números passados como argumentos. Um dos parâmetros deve receber um valor default, caso não seja passado nenhuma valor.
```javascript
const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(1)); // 1
console.log(multiply(8)); // 8
```



