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