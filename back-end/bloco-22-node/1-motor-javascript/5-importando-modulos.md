# Importando módulos

## Módulos locais
Quando queremos importar um módulo local, precisamos passar para o `require` o caminho do módulo, seguindo a mesma assinatura. Por exemplo, `require('./meuModulo')`. Note que a extensão (.js) não é necessária: por padrão, o Node já procura por arquivos terminados em `.js` ou `.json` e os considera como módulos.

Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, mas desejamos importar todas as suas funcionalidades de uma vez só. Nesse caso, a pasta precisa conter um arquivo chamado `index.js`, que importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.

Exemplo:
```js
// meuModulo/funcionalidade-1.js
module.exports = function() {
  console.log('funcionalidade');
}
```

```js
// meuModulo/funcionalidade-2.js
module.exports = function() {
  console.log('funcionalidade2');
}
```

```js
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
```

Utilizamos a palavras-chave `module.exports`. Um módulo possui um escopo *isolado*, ou seja, suas *funções*, *variáveis*, *classes* e demais definições existem somente dentro do módulo. O `module.exports` nos permite definir quais desses "objetos" internos ao módulo serão **exportados**.

**O `module.exports` pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins.**

No exemplo acima, quando importarmos o módulo `meuModulo`, teremos um objeto contendo duas propriedades, que são as funcionalidades que exportamos dentro de `meuModulo/index.js`.

Para importarmos e utilizarmos o módulo `meuModulo`, basta passar o caminho da pasta como argumento para a função require, Ex:
```js
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');
console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }
meuModulo.funcionalidade1();
```


## Módulos internos
Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função `require`. Por exemplo, `require('fs')` importa o pacote `fs`, responsável pelo sistema de arquivos.

Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável da seguinte forma:
```js
const js = require('fs');
fs.readFileSync('./meuArquivo.txt');
```


## Módulos de terceiros
Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função `require`. A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los.

O registro oficial do Node.js, em que milhares de pacotes estão disponíveis para serem instalados, é o `npm`. Além disso, `npm` também é o nome da ferramenta de linha de comando (CLI - command line interface) responsável por baixar e instalar esses pacotes. O CLI `npm` é instalado juntamente com o Node.js.

Quando importamos um módulo que não é nativo do Node.js e que não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta `node_modules`. Caso um módulo não seja encontrado na `node_modules` mais próxima do arquivo que o chamou, o Node procurará por uma pasta `node_modules` na pasta que contém a pasta atual. Caso encontrado, o módulo é carregado. Caso contrário, o processo é repetido em um nível de pasta acima. Isso acontece até que o módulo seja encontrado ou até que uma pasta `node_modules` não exista no local em que o Node está procurando.
