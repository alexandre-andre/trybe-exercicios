# Rodando promessas simultaneamente com `Promise.all`
O `Promise.all` é um método da Promise que nos permite passar um *array de Promises* e receber de volta *uma única Promise*. Ela será resolvida com todos os resultados das outras Promises assim que as demais já tenham também sido resolvidas. Esse método também nos permite utilizar um único `catch`, que será chamado caso qualquer uma das Promises seja rejeitada.

Suponha que em um código todos os arquivos serão lidos ao mesmo tempo e, portanto, não teremos uma forma de saber quando cada um vai terminar de ser lido.

Mas e se precisarmos do resultado da leitura dos três arquivos? `Promise.all`!

Vamos reescrever quase o mesmo código que vimos em Promisse, evitando assim um callback hell. Desta vez, vamos escrever no final a soma do tamanho de todos os arquivos. Além disso, utilizar o módulo `('fs').promises` para usarmos os métodos já com a implementação de `promises` internamente, dispensando assim o tratamento das `callbacks`.
```js
const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.reddFile('file3.txt')
])
  .then(([file1, file2, file3]) =>{
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  })
```

Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso `.then` será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.
