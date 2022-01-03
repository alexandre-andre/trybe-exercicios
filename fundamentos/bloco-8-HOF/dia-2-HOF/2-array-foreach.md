# Array.forEach()
### `Array.forEach((item, index, array))`
- *item* - (mandatory) - pega o valor do item do momento
- *index* - (optional) - pega o índice do item
- *array* - (optional) - pega o aray inteiro

Uma simples tabuada com forEach
```javascript
const numbers  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multipliesFor2 = (element) => console.log(`${element} * 2 = ${element * 2}`);
const multipliesFor7 = (element) => console.log(`${element} * 7 = ${element * 7}`)
numbers.forEach(multiplesFor2);
numbers.forEach(multipliesFor7);

// "0 * 2 = 0"
// "1 * 2 = 2"
// "2 * 2 = 4" ...
// "0 * 7: 0"
// "1 * 7: 7"
// "2 * 7: 14" ...
```
Foi executado para cada elemento do array a função `multipliesFor2` e `multipliesFor5`.
Agora estamos tratando de uma HOF, sendo assim é possível uilizar também os demais parametros para resolver um problema.
Exemplo com o uso de index no forEach :
```javascript
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
    names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
```


### Mostrando lista de e-mails
```javascript
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} está já cadastrado no banco de dados`)
};

emailListInData.forEach(showEmailList);
// "O email roberta@email.com esta cadastrado em nosso banco de dados!"
// "O email paulo@email.com esta cadastrado em nosso banco de dados!"
// "O email anaroberta@email.com esta cadastrado em nosso banco de dados!"
// "O email fabiano@email.com esta cadastrado em nosso banco de dados!"
console.log(emailListInData);
// ["roberta@email.com", "paulo@email.com", "anaroberta@email.com", "fabiano@email.com"]
```

### [Para leirura](https://codepen.io/pen/?template=LYZPEwV)

