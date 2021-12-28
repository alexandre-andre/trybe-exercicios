# Objetos: Parte III - Object.values
Lista os valores de cada chave.
Acessando os valores das chaves com `for in`
```javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
```

Acessando os valores das chaves com `Object.values`
```javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
console.log(Object.values(coolestTvShow))
// [
//   'BoJack Horseman',
//   'adult animation',
//   'Raphael Bob-Waksberg',
//   'Princess Carolyn',
//   'Princess Carolyn always lands on her feet.'
//    6
// ]
```

Diferença dos métodos em um código
```javascript
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithForIn = (student) => {
    const skills = []
    for (let skill in student) {
        skills.push(student[skill]);
    }
    return skills;
}

const listSkillsValuesWithObject = (student) => Object.values(student)

console.log(listSkillsValuesWithForIn(student))
// ["Muito Bom", "Bom", "Ótimo", "Ótimo"]
console.log(listSkillsValuesWithObject(student))
// ["Muito Bom", "Bom", "Ótimo", "Ótimo"]
```







### Documentação
[Object.values()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values)