# Promisses
As Promises foram introduzidas à especificação do JavaScript em 2015, como ferramenta de melhoramento da legibilidade do código, basicamente uma forma de resolver a "bagunça" que as callbacks causavam. Quando usamos Promises, ainda estamos utilizando um tipo de callback, mas que possui uma API mais legível e intuitiva.

Estudo de caso:
- A pessoa X se compromete a fazer algo para a pessoa Y, ou seja, faz uma promessa. Essa promessa pode ser cumprida e, portanto, resolvida, ou algo pode acontecer impedindo que a promessa seja cumprida, neste caso ela será rejeitada.

Em JavaScript, as *Promises* funcionam do mesmo jeito: uma promessa/função é criada e dentro dela existe código/ação a ser executado. Se o código é executado sem nenhum problema, a *Promise* é resolvida através da função `resolve`, se algo dá errado durante a execução do código, a *Promise* é rejeitada através da função `reject`.
> A relação entre callback e fluxo assíncrono é a forma como o sucesso e ou erro são tratados.

Em `callbacks`, temos apenas uma função que recebe tanto o sucesso quanto o erro, já nas `Promises` temos uma forma de registrar erro e sucesso em funções separadas, ou seja, uma callback para cada.

Para fazermos isso, utilizamos vários `.then` em uma mesma *Promise*. As funções que passamos para cada `then` serão executadas em sequência, e o resultado de uma será passado para a próxima.


## Exemplos
### Tratamento de erro de forma síncrona
```js
function dividirNumeros(num1, num2) {
  if (num2 ==) throw new Error("Não pode ser feito uma divisão por zero");

  const resultado = num1 / num2;
  return resultado;
};

try {
  const resultado = dividirNumeros(6,2);
  console.log(`resultado: ${resultado}`);
} catch (error) {
  console.log(error.message);
};

dividirNumeros(6,2);
```

### Tramento de erro de forma Assíncrona
```js
function dividirNumeros(num1, num2) {
  const promisse = new Promisse((resolve, reject) => {
    if (num2 === 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado);
  });
}

dividirNumeros(6,2)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((error) => console.log(`erro: ${error.message}`));
```

Quando pedirmos, por exemplo, para o que o *Node.js* leia um arquivo do disco, ele nos retornará uma *PROMISE* de que vai ler esse arquivo, daí esperamos o `resolve` ou o `reject`:

Sempre que precisarmos *criar* uma nova Promise, invocaremos o construtor através da palavra-chave `new`. Para esse construtor, devemos passar uma função chamada de executor, é essa função quem vai, de fato, tentar cumprir a promessa que estamos fazendo.
```js
const p = new Promise((resolve, reject) =>{
  // Aqui é onde vamos realizar a lógica que precisamos para "tentar cumprir" a promessa
});
```

Feito isso, o próximo passo é escrever o código que, de fato, resolve a Promise. Já combinamos anteriormente que nossa função promete ler um arquivo. Então, vamos colocar dentro da função executor o código que busca resolver essa promessa:
```js
const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile((fileName, (err, content)) =>{
      if (err) return reject(err);
      resolve(content);
    });
  });
}
```

1. Recebemos como parâmetro o nome do arquivo que queremos ler: `fileName` na função `readFilePromise(fileName)`;
2. Criamos e retornamos uma nova Promessa, `new Promise((resolve, reject) => {}`;
3. Chamamos o módulo nativo do node, `fs`, *para realizar a leitura* desse arquivo, `fs.readFile(fileName, (err, content) => {})`;
4. Dentro da callback `fs.readFile(fileName, (err, content) => {})` que passamos para a função `readFile`, verificamos se ocorreu um erro `(if (err))`. Se sim, *rejeitamos* a Promise e encerramos a execução - `reject(err)`;
5. Caso não tenha ocorrido nenhum erro, *resolvemos* a Promise com o resultado da leitura do arquivo - `resolve(content)`.


## Como consumir uma Promise
A função que passamos para a Promise só consegue retornar um resultado através da função `resolve` que ela recebe. Por isso, o fato de chamarmos return `reject(err)` não faz diferença, já que a Promise será rejeitada, e o retorno da callback passada para readFile é simplesmente ignorado. Como callbacks geralmente são chamadas para lidar com resultados, seu retorno raramente importa para a função que a chamou ou que recebeu esses resultados.

`resolve` e `reject` são os nomes das funções que a Promise passa para a função executor. No entanto, para nós, elas são apenas parâmetros que são passados pra nossa função. Logo, não importa muito o nome que damos a elas, pois para o JavaScript isso é indiferente. De qualquer forma, chamar essas funções de qualquer outra coisa não é considerado uma boa prática, pois pode dificultar a legibilidade do código.
```js
// ...
readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });
```

Essa funcionalidade nos permite criar estruturas de *pipeline*, em que uma operação recebe como entrada o resultado da operação anterior e todos esses resultados podem ser compostos e formar um único resultado de forma extremamente fácil!

Para exemplificar como isso ocorre, vamos reescrever o código que nos levou ao **callback hell mas, dessa vez, utilizando Promises**:
```js
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile((fileName, (err, content)) => {
      if (err) return reject(err);
      resolve(fileName);
    });
  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });
```
