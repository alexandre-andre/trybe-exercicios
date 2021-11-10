let pizzas = {
    sabor: 'Frango com Caupiry',
    preco: 39.90,
    bordaRecheada: false
};

for (let key in pizzas) {
    console.log(pizzas)
}
// { sabor: 'Frango com Caupiry', preco: 39.9, bordaRecheada: false }
// { sabor: 'Frango com Caupiry', preco: 39.9, bordaRecheada: false }
// { sabor: 'Frango com Caupiry', preco: 39.9, bordaRecheada: false }


for (let key in pizzas) {
    console.log(pizzas['preco'])
}
// 9.9
// 39.9
// 39.9


for (let key in pizzas) {
    console.log(pizzas[key]);
}
// Frango com Caupiry
// 39.9
// false


let pizzasDoces = ['chocolate', 'banana', 'prestigio']

for (let key in pizzasDoces) {
    console.log(key)
}
// 0
// 1
// 2


for (let key in pizzasDoces) {
    console.log(pizzasDoces)
}
// [ 'chocolate', 'banana', 'prestigio' ]
// [ 'chocolate', 'banana', 'prestigio' ]
// [ 'chocolate', 'banana', 'prestigio' ]


for (let key in pizzasDoces) {
    console.log(pizzasDoces[key])
}
// hocolate
// banana
// prestigio


for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key])
}
// 0 chocolate
// 1 banana
// 2 prestigiofina