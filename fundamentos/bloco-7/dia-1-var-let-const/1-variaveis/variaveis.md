```javascript
var userEmail = "maria@email.com";
let userId = 78945-6;
const userLocation = "Brasil";
```

Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o 'local' em que uma variável é visível e pode ser referenciada.
`a variável só é reconhecida dentro do escopo da função mesmo que seja trocada por qualquer dentre elas`
```javascript
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
```

<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript-es6/images/escopos-0945c242e80b8eb512adb7c89a37c72d.gif">

```javascript
if (true) {
  // inicio do escopo do if
  var userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20
```
Se trocarmos `var` por `let` ou `const` NÃO temos aceso a variável `userAge` fora do bloco do código if. Já o `var` vaza o escopo do bloco `if`.


Com o var é possível sobrescrever valores da variável sem gerar erro.
```javascript
var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas
```

O ES6 corrige esse problema ao introduzir o let e o const , fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo.
O const permite com que você declare constantes . Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let , podemos substituir o valor original atribuído à variável.
```javascript
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition
```

`const` em objeto, é possível atribuir valores sem reatribuir um novo objeto.
```javascript
const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
}
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }
```

Também aplica-se em array
```javascript
cosnt tec = ['js', 'css', 'html'];
tec.push('react');
console.log(tec); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

tec = ['Javascript', 'CSS', 'HTML', 'React']
console.log(tec); //Erro
```
