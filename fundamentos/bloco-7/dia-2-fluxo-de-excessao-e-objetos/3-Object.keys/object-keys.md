# Objetos: Parte II - Object.keys
Podemos acessar propridades (chaves) de objetos com `for in`
```javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
for (let porperty in coolesTvShow) {
    console.log(porperty);
}
// name
// genre
// author
// favoriteCharacter
// quote
// seasons
```

Da mesma forma é possível acessar as propriedades (chaves) com o método `Objet.Keys`
```javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.Keys(coolesTvShow))
// name
// genre
// author
// favoriteCharacter
// quote
// seasons
```


```javascript
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
        // index = chave, student[arrayOfSkills[index]] = valor da chave
        console.log(`${index}, Nível : ${student[arrayOfSkills[index]]}`) 
    }
}
listSkills(student1)
// "Html, Nível Muito Bom"
// "Css, Nível Bom"
// "JavaScript, Nível Ótimo"
// "SoftSkills, Nível Ótimo"

listSkills(student2)
// "Html, Nível Muito Bom"
// "Css, Nível Bom"
// "JavaScript, Nível Ótimo"
// "SoftSkills, Nível Ótimo"
```

### Documentação
[Object.Keys](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)