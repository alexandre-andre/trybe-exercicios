# Objetos: Parte IV - Object.entries
Retorna uma array dos próprios pares  [key, value].

Ao aplicar o `Object.entries` no objeto, o retorno é um array de arrays. Onde a *primeira entrada* de cada array é a *chave* do objeto em formato de string , e, o *segundo valor* é seu respectivo *valor*.
```javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));
// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]
```

Outros exemplos
```javascript
let obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// objeto array-like
let obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// objeto array-like com ordenação aleatória de chave (key)
let an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
let my_obj = Object.create({}, { getFoo: { value: function() {return this.foo} } }) 
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
        // "a 5"
        // "b 7"
        // "c 9"
}

// Ou, usando array extras
// pega o objeto -> transforma em um array de chave, valor -> passa o forEach
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value)
        // "a 5"
        // "b 7"
        // "c 9"
})
```

Outro Exemplo
```javascript
const paises = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
// [["França", "Paris"], ["Brasil", "Brasília"], ["Espanha", "Madrid"], ["Portugal", "Lisboa"]]

for (let index in pairKeyValue) {
    console.log(`País: ${pairKeyValue[index][0]}`);
    console.log(`Capital: ${pairKeyValue[index][1]}`);console.log()
}
// "País: França"
// "Capital: Paris"
// "País: Brasil"
// "Capital: Brasília"
// "País: Espanha"
// "Capital: Madrid"
// "País: Portugal"
// "Capital: Lisboa"

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
// "--------"
// "País:"
// "França"
// "Capital:"
// "Paris"
// "--------"
// "País:"
// "Brasil"
// "Capital:"
// "Brasília"
// "--------"
// "País:"
// "Espanha"
// "Capital:"
// "Madrid"
// "--------"
// "País:"
// "Portugal"
// "Capital:"
// "Lisboa"
```


### Documentação
[Obect.entries](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)