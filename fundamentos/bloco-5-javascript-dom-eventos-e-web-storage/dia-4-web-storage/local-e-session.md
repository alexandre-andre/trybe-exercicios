# Local Storage e Session Storage
HTML Web Storage provê dois objetos para armazenamento de dados no cliente ( browser da pessoa), no formato de chave-valor de um modo mais intuitivo do que nos Cookies
- `localStorage` - salva os dados **sem data de expiração**, ou seja, só são removidos pelo cliente.
- `addicionar` chave e valor ao localStorage -> `localStorage.setItem('chave', 'valor')`; // salva uma entrada com a key = 'firstname' e value = 'Adam'
- `recuperar` o valor de uma chave do localStorage -> `localStorage.getItem('chave')` // recebe o valor da chave
- `limpar tudo` - `localStorage.clear()`
```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Dê uma olhada no seu console para checar os exemplos sendo impressos.<br />;)</h1>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
console.log(localStorage.length); // // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('fisrtname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // possui duas entradas, então o retorno é o valor: 2
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // possui uma entrada, então o retorno é o valor: 1
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

localStorage.key(1); // acessa a chave 'ins-storage-version' pelo indice
localStorage.getItem('ins-storage-version'); // pega o valor da chave 'ins-storage-version'
```

- `sessionStorage` -  salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba ou o navegador.
```javascript
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sesstionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // possui duas entradas, então o retorno é o valor: 2
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // possui uma entrada, então o retorno é o valor: 1
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0

sessionStorage.key(1); // acessa a chave 'ins-storage-version' pelo indice
sessionStorage.getItem('ins-storage-version'); // pega o valor da chave 'ins-storage-version'
```

É possível salvar outras estruturas em localStorage e sessionStorage :
```javascript
let person = {
    name: 'André',
    birthDate: 1989,
}

let storage = localStorage;
storage.setItem('person', JSON.stringify(person));

let org = JSON.parse(storage.getItem('person')); // o JSON.parse recebe o valor da chave acessada por localStorage e converte em um objeto JSON
console.log(org); // {name: 'André', birthDate: 1989}

let classes = ['2019/set', '2019/oct'];
storage.setItem('classes', JSON.stringify(classes));

let cls = JSON.parse(storage.getItem('classes')); // o JSON.parse recebe o valor da chave acessada por localStorage e converte em um JSON
console.log(cls); // ['2019/set', '2019/oct']
```

"Application" para ver a parte de Local Storage e Session Storage
<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/web-storage/google-chrome-application-tab-2e4bad96c190ce3e82162d34d7ecb7a0.gif">

