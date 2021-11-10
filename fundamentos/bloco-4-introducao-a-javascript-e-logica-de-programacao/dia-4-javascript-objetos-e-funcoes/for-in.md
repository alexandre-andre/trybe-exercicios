# FOR/IN
`for/in` pode ser usado tanto em *objeto* quanto em *array* já `for/of` apenas em *array*.


## EM ARRAY
- `for/of` vai percorrer o array e vai retornar o valor de cada elemento do **array**

- `for/in` vai percorrer o array e vai retornar o índice de cada elemento do **array**
```javascript
let array = ['eu', 'vou', 'aprender']

for (let key of array) {
    console.log('key of ' + key)
}
// key of eu
// key of vou
// key of aprender

for (let key in array) {
    console.log('key in ' + key)
}
// key in 0
// key in 1
// key in 2
```


## EM OBJETO
`for/in` vai percorrer o objeto pode trazer tanto as propriedades de um obeto quanto os valores das propriedades, dependendo da chamada 
```javascript
let person = {
    firstName: 'Alexandre',
    lastName: 'André',
    age: 32,
    canDrive: true,
    favoritesMovies: ['John Wick', 'Duelo de Titãs']
}

// key vai acessar somente as propriedades de um objeto
for (let key in person) {
    console.log(key)
}
// firstName
// lastName
// age
// favoritesMovies
// adress


//key[key] vai acessar os valores das propriedades de um objeto
for (let key in person) {
    console.log(person[key])
}
// Alexandre
// André
// 32
// [ 'John Wick', 'Duelo de Titãs' ]
// { street: 'Cadete Polonia', number: '524' }
```


### Outros exemplos
O let sendo passado em uma chave após o array, vai retornar os valores do array.
```javascript
let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
    console.log(cars[key]);
}
// Saab
// Volvo
// BMW

for (let key in cars) {
    console.log(key);
}
// 0
// 1
// 2
```


o let sendo passado solo, vai retornar a propriedade já sendo passado em um colchete após o objeto, retorna o valor do objeto.
```javascript
let car = {
    type: 'Ford',
    model: 'Raptor',
    color: 'Dark blue'
}

for (let key in car) {
    console.log(key, car[key])
}
// type Ford
// model Raptor
// color Dark blue
```


É importante ressaltar que existe uma **diferença** entre o `For/in` e o `For/of`. O `For/in` percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades.

Se percorrermos um objeto, também teremos o mesmo resultado. O `For/in` irá percorrer a propriedade declarada, e não o seu valor em si.
Já o `For/of` percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o `For/in` .