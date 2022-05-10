# Lendo arquivos com métodos assíncronos
O método fornecido pelo módulo `fs` para leitura assíncrona de arquivos é o `fs.readFile`. Na versão padrão do `fs`, a função `readFile` aceita um callback, chamado quando a leitura do arquivo termina.

Vamos criar um arquivo chamado readFile.js dentro da nossa pasta io-local e vê-lo em ação com o seguinte código:
```js
// io-local/readFile.js
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf-8', (err, data) => {
  if (err) {
    console.log(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});
```


## Método `fs.readFile`
Esse método também é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.

Ele recebe três parâmetros:
- O nome do arquivo;
- Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
- Uma callback que permite receber e manipular os dados lidos do arquivo.

> **OBS**: A callback é uma função que recebe dois parâmetros: `err` e `data`. Caso ocorra um erro durante a leitura do arquivo, o parâmetro err virá preenchido com as informações referentes ao erro. Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo ocorreu sem problemas. Nesse caso, o segundo parâmetro, `data`, virá preenchido com o conteúdo do arquivo.

Agora, rode o comando node readFile.js,você deverá obter uma saída semelhante a esta:
```
Conteúdo do arquivo: Meu texto! Meu texto! Meu texto! Meu texto!.
```

O tipo de encoding que escolhemos é muito importante. Se não for especificado, por padrão, o arquivo será lido como raw buffer, um formato muito útil quando estamos enviando dados através de requisições HTTP. Entretanto, neste caso, queremos manipular o conteúdo do arquivo como uma string, então o certo é especificar o encoding.
> **NOTA**: É importante lembrar que esses dados ficam armazenados em memória. Por exemplo: caso você tenha um arquivo de 1GB de texto, você trará 1GB de dados para a memória RAM.

Contudo, essa não é a única forma de usar o método `readFile`. O módulo `fs` possui um segundo modelo de API que, em vez de trabalhar com callbacks, retorna Promises.
> Observação: Para utilizar a interface de Promises do `fs`, precisamos alterar a importação do módulo `fs` para `('fs').promises`.


## Com Promises
```js
// io-local/readFile.js
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => { console.log(`Conteúdo do arquivo: ${data}`)})
  .catch((err) => {
    console.log(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
```

Dessa forma, sempre que precisarmos ler arquivos de forma assíncrona, podemos utilizar o método `readFile` do módulo `('fs').promises`.
