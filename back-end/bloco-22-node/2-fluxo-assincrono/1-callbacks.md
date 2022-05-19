# Callbacks
Pode até parecer um sonho, mas é possível não bloquearmos a execução do código enquanto outra atividade é executada! Como? Fazendo uma chamada de retorno que em JavaScript conhecemos por callback.

Vamos analisar um exemplo com a função `readFile` do módulo `fs` do Node.js!? Assim teremos o entendimento deste conceito de forma prática.
```js
const fs = require('fs');
fs.readfile('./arquivo.txt', (err, content) => {
  if (err) {
    console.log(`Erro ao ler o arquivo: ${err.mesage}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
```

Note que o exemplo acima realiza a leitura de um arquivo e após o término, chama uma função de callback. Essa função recebe dois parâmetros:
- O *primeiro parametro*, que chamamos de `err`, é um erro que pode ter ocorrido durante a leitura do arquivo.
    - Caso nenhum erro tenha ocorrido, esse parâmetro será `undefined`.
- O *segundo parâmetro*, nesse caso, é o `content` do arquivo, que está em forma de uma sequência de bytes, chamados de content.
    - Caso ocorra um erro na leitura do arquivo, esse parâmetro será undefined.


## Entendo o código funciona
1. Primeiro, pedimos que o Node.js leia o arquivo e passamos uma função de callback;
2. Quando a leitura do arquivo é concluída ou um erro acontece, a função callback é chamada;
3. Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o `return`;

Caso nenhum erro tenha acontecido, sabemos que nosso arquivo foi lido com sucesso e, portanto, seu conteúdo está no segundo parâmetro, que chamamos de `content`.

Formatos de Callback que recebem dois parâmentros: *erros* e *resultado*, como visto acima, são chamados de **node-style** callbacks e são, por convenção, a melhor maneira de se estruturar uma callback.

> Observação: **Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks**.


## Pontos negativos do uso de Callbacks
A principal desvantagem do uso das callbacks é que o resultado de uma operação só existirá dentro daquela callback, ou seja, se precisarmos executar um comando depois de outro teremos que colocar uma callback dentro de outra. À medida que vamos realizando essa ação, aumentamos o nível de indentação necessária resultando assim na dificuldade de ler e de fazer manutenção no código.

Precisamos ler, sequencialmente, três arquivos de forma assíncrona, garantindo assim que o nosso servidor não trave. Dentro desse contexto, o código ficaria similar a essa estrutura:
```js
const fs = require('fs');

fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);
  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Erro ao ler arquivo 2: ${err.message}`);
    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Erro ao ler arquivo 3: ${err.message}`);
      console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
    });
  });
});
```

Note que no exemplo acima, já temos três níveis de indentação, resultando em um código menos legível. Imagina como seria se tivéssemos ainda mais níveis de callbacks aninhadas? *callback hell*.

Uma hipótese de resolução desse problema é quebrar o código em infinitas funções menores, entretanto, essa ação não faz nada além de chamar a próxima callback. Além disso, essa ação não é simples, organizada e resultante de um código bom, ou seja, acaba não funcionando. Observe como isso ocorre no exemplo abaixo:
```js
const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);
  console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);
  console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);
  fs.readFile('file3.txt', file3Callback);
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);
  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);
  fs.readFile('file2.txt', file2Callback);
};

fs.readFile('file1.txt', file1Callback);
```

Perceba que depois de uma ou duas funções "aninhadas", podemos perder a linha do raciocínio. Além disso, temos mais dificuldade em entender facilmente o fluxo em que o código acontece.
