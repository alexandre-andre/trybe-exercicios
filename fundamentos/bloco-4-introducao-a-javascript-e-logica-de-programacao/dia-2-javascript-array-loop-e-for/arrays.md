# Array
É uma "lista" que engloba um conjunto de informações. Representado por `[]`.
Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil.

Sem Array
```javascript
let pizza1 = '4 Queijos'; 
let pizza2 = 'Calabresa';
let pizza3 = 'Marguerita';
let pizza4 = 'Frango com Catupiry';
let pizza5 = 'Brigadeiro com Sorvete'
console.log(pizza1, pizza2, pizza3, pizza4, pizza5)
```

Com Array
```javascript
let pizzas = [];
pizzas = ['4 Queijos', 'Calabresa', 'Marguerita', 'Frango com Catupiry', 'Brigadeiro com Sorvete']
console.log(pizzas);
// (5) ['4 Queijos', 'Calabresa', 'Marguerita', 'Frango com Catupiry', 'Brigadeiro com Sorvete']

console.log(pizzas.length)
// 5 (numero de elemetos no array)

pizzas.push('Banana com Chocolate')
console.log(pizzas)
// (6) ['4 Queijos', 'Brigadeiro com Sorvete', 'Calabresa', 'Frango com Catupiry', 'Marguerita', 'Banana com Chocolate']

console.log(pizzas.length);
// 6 (numero de eleemtnos no array)

console.log(pizzas.sort());
// (6) ['4 Queijos', 'Banana com Chocolate', 'Brigadeiro com Sorvete', 'Calabresa', 'Frango com Catupiry', 'Marguerita']

console.log(pizzas[0]);
// vai buscar no array pizzas o valor que estiver no índice 0
// '4 Queijos'
```


- `.unshift()` **adiciona** o elemento ao **início** do array
- `.shift()` **remove** o elemento que está no **início** do array

- `push()` **adiciona** o elemento ao **final** do array
- `pop()` **remove** o elemento que está no **final** do array

- `.length` retorna a **quantidade de elementos** no array contando a partir de ZERO.
- `array[array.length -1]` retorna o valor do **último índice** do array
  
- `.sort()` **ordena** em posições alfanuméricas, ou seja, primeiro os números e depois as letras.
- `[]` busca pelo valor de um determinado índice no array

- `indexOf()` usado para procurar o **índice** de um elemento no array.



## Arrays em laços de repetição

```javascript
let pizzas = [];
pizzas = ['4 Queijos', 'Calabresa', 'Marguerita', 'Frango com Catupiry', 'Brigadeiro com Sorvete']

/* Em vez de usar 30 console.log usamos o for par percorrer o array */
// console.log(pizzas[0]);
// console.log(pizzas[1]);
// console.log(pizzas[2]);
// console.log(pizzas[3]);
// console.log(pizzas[4]);
// console.log(pizzas[5]);

for(let i = 0; i < pizzas.length ; i++){
    console.log(pizzas[i]);
}
// 4 Queijos
// Calabresa
// Marguerita
// Frango com Catupiry
// Brigadeiro com Sorvete
```

Dessa forma o `for` vai percorrer por todo o `array` e enquanto o valor da variável `i` for `menor` que o tamanho do array pizzas (`pizzas.length`) será incrementado + 1 ao valor dessa variável e vai imprimir o valor que estiver relacionado ao índice do array pizzas.  


### Praticando
Observamos que por meio do .length , conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3
```


O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1.
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForFirstTask = tasksList[tasksLists.length -1]
console.log(searchForFirstTask)
// Brincar com o cachorro
```

Repare que o método `.push()` adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o `.unshift()`. 
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList)
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
```

"Ok. Agora como faço para remover o último?"
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop() // remove o último elemento
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]
```

"Ok. Agora como faço para remover o primeiro?"
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift() // remove o primeiro elemento
console.log(tasksList);

// [ 'Reunião', 'Brincar com o cachorro']
```

Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array
```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
consone.log(indexOfTask);
// 1
```


[w3Scholls - tudo sobre Array](https://www.w3schools.com/jsref/jsref_obj_array.asp)