# Escrevendo dados em arquivos
Escrever dados em arquivos é um processo bem parecido com a leitura de dados! Assim como o módulo ('fs').promises disponibiliza o método readFile para a leitura, há também o método `writeFile` para a escrita.

Observação: O módulo `fs` também disponibiliza um método `writeFile`, que funciona utilizando callbacks. Vamos utilizar diretamente o módulo `('fs').promises`, já que o uso de Promises é bem mais encorajado que o uso de callbacks.
```js
// io-local/writeFile.js
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
```

Rode o script com `node writeFile.js`. Repare que o conteúdo do `meu-arquivo.txt` foi alterado para "Meu textão".
