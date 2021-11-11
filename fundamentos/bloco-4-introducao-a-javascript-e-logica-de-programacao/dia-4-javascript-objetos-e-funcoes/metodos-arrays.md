# join()
O método `join` junto todos os elementos de um `array` (ou um array de objetos)  em uma `string` e retorna essa string. As conversões em string de todos os elementos de um array são juntados em apenas uma string.

```javascript
array.join([separator = ',']) 
// separador Optional
// Específica uma string para separar cada elemento adjacente do array
```

```javascript
const elements = ['Fire', 'Air', 'Water'];
console.log(elements) // ["Fire", "Air", "Water"]
console.log(elements.join()) // "Fire,Air,Water"
console.log(elements.join('-')) // "Fire-Air-Water"
console.log(elements.join(' ')) // "Fire Air Water"
```

# reverse()
Inverte a ordem de um `array`
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse()); // ["Mango", "Apple", "Orange", "Banana"]
```

# split()
`split()` divide uma `string` em uma matriz de substrings e retorna a matriz. Se `("")` for usado com separador, a string será dividida entre `palavras`. O split() não altera a string original.
```javascript
string.split(separator, limit)
```
- *separator* - Especifica o caractere ou a expressão regular a ser usada para dividir a string. Se omitido, toda a string será retornada (uma matriz com apenas um item)

- *limit* - Um número inteiro que especifica o número de divisões, os itens após o limite de divisão não serão incluídos na matriz
```javascript
let text = "How are you doing today?"

console.log(text.split()) // How are you doing today?
console.log(text.split("")) // H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
console.log(text.split(" ")) // How,are,you,doing,today?
console.log(text.split("o")) // H,w are y,u d,ing t,day?
console.log(text.split("o", 2)) // H,w are y
console.log(text.split("o", 4)) // H,w are y,u d,ing t
```
