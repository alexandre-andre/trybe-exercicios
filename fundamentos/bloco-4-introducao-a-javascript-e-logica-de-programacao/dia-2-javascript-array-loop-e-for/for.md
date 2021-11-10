# For
Embora seja um recurso da linguagem, o uso do operador de incremento ( `++` ) não é recomendado. O maior problema é que, embora seu uso principal esteja na geração de um side effect , esse operador sempre irá retornar algum valor e, pra piorar, as expressões ( `++x` ) e ( `x++` ), embora sejam facilmente confundidas por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.

Levando isso em consideração, o uso desse operador pode gerar confusão e causar bugs inesperados. Sendo assim, uma vez que o `+= 1` substitui completamente o `++`, recomenda-se o uso exclusivo de `+= 1`, e é essa a regra que iremos adotar neste conteúdo daqui pra frente!

Suponha que temos uma lista com marcas de carros: para apresentar esses valores, o código que utilizariamos para executar essa tarefa seria:
```javascript
let cars = ['Sportage', 'Cruze', 'BMW'];
console.log(cars[0]); // Sportage
console.log(cars[1]); // Cruze
console.log(cars[2]); // BMW
```

Mas, agora que conhecemos o for , podemos melhorar o código para algo como:
```javascript
let cars = ['Sportage', 'Cruze', 'BMW'];

for (let i = 0; i < cars.length ; i++){
    console.log(cars[i]);
}
// Sportage
// Cruze
// BMW
```

