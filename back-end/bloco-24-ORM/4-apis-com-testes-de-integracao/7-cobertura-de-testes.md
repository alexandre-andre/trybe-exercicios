# Cobertura de testes
Uma forma de acompanhar o quão bem estamos conseguindo exercitar testes no nosso sistema é através de relatórios de cobertura.

Boa parte das suites de teste das linguagens de programação possui uma forma de gerar um relatório desse tipo. No caso do Node.js, conseguimos gerar esses relatórios no `mocha`, utilizando uma ferramenta chamada `nyc`.

Esses relatórios checam, se para um escopo de arquivos definidos, os seus testes são capazes de rodar todas as linhas dos arquivos relacionados, o que gera uma porcentagem total de cobertura para aquele escopo.


## Critérios relevantes
De forma geral, suites de testes geram relatórios de cobertura segundo alguns critérios básicos, os mais relevantes para nosso contexto são:
- `Cobertura de Funções / Function Coverage` : Cada função/sub-rotina do script foi acionado/chamado?
- `Cobertura de Afirmações / Statement Coverage` : Cada afirmação/definição/comando do script foi executado?
- `Cobertura de Ramificações / Branch Coverage` : Cada situação de ramificação do código (aqui podemos assumir um script condicional, como um if { /*situação A*/ } else { /*situação B*/ }) foi executada?

No nosso contexto, o `nyc` vai utilizar relatórios do Instanbul.

Exemplo: Imagine que temos uma pequena API express, que trata textos que são mandados no corpo da requisição, e que em cada requisição ele loga esses eventos (`concat` - concatena, `invert` - inverte textos e `logger` pra logar).

Agora, imagine que nesse contexto, nós tenhamos feito testes de integração que contemplem mais a parte de concatenação do que a parte de inversão da API.

- File (Arquivo): Retorna a estrutura do escopo analisado, cada linha é referente à pasta ou arquivo específico.
- Stmts (Statements/Afirmações): Retorna os percentuais da cobertura de afirmações executadas que citamos anteriormente.
- Branch (Ramo): Retorna o percentual de situações de ramificação cobertos

Detalhe, o relatório vai considerar uma branch, mesmo que não haja nenhuma situação de else para ela, ex:
```js
// ./src/middlewares/logger.js
const debug = true;

module.exports = (req, res, next) => {
  if(debug){
    res.on('finish', () => {
      console.log({
        method: req.method,
        endPoint: req.originalUrl,
        status: res.statusCode
      })
    });
  }
  /*
    No caso desse `if`, não existe cobertura pra uma situação onde `debug`
    é falso, então, ainda que um teste cubra 100% desse código, o retorno
    em `% Branch` para esse arquivo, será 50%;
  */

  next();
}
```

- Funcs (Functions/Funções): Retorna o percentual de funções executadas nos arquivos.
- Lines (Linhas): Retorna o percentual de linhas executadas nos arquivos, no caso de All files.


## Como gerar uma cobertura de testes no meu ambiente?
No `nyc`, é possível gerar um relatório de cobertura padrão. E a depender da forma da utilização dessa ferramenta, é possível ainda trazer relatórios em diferentes formatos (como em html, por exemplo).

A princípio, vamos passar pelos comandos básicos para execução e a descrição de cada um, após isso, passaremos pela API de exemplo, gerando um relatório de cobertura utilizando o `nyc`:


## Comando básico
No `mocha`, antes, temos que instalar a biblioteca `nyc` (que é a cli - interface de linha de comando, do Instanbul):
```
npm i -D nyc
```

Após isso, a utilização também é bastante simples: utilizaremos o `nyc`, passando como parâmetro o comando que utilizaremos para os testes em `mocha`, exemplo: `nyc mocha ./tests --recursive`. Dessa forma, conseguimos fazer uma configuração de um script próprio para gerar esse relatório, que rodamos com `npm run test:coverage`.:
```json
...
"scripts": {
    ...
    "test": "mocha ./tests --recursive",
    "test:coverage": "`nyc` npm test",
    ...
},
...
```


## Personalizando o escopo de cobertura
Por padrão, os `reporters` vão fazer a cobertura dos arquivos que são referenciados nos testes.

Para trazer a porcentagem de cobertura dentro de um escopo fixo no `nyc`, podemos tratar de duas formas:

### 1ª forma
Utilizando um arquivo de configuração `nyc.config.js` na raiz do projeto. Esse arquivo pode receber uma propriedade `include`, contendo o padrão a ser respeitado;

Utilizando o mesmo comando, via `cli: --include`, da seguinte forma:
```json
...
"scripts": {
    ...
    "test": "mocha ./tests --recursive",
    "test:coverage": "`nyc` --include='src/**/*.js' npm run test",
    ...
},
...
```


É possível ainda, via `cli`, utilizar o parâmetro `--all` para coletar a cobertura de TODOS os arquivos (mesmo os que não tem referência nos testes).

⚠️ Nota-se que estamos colocando o código fonte que deve ser coberto (no nosso contexto - seriam: **/api, /config, /controllers, /migrations, /models e /seeders**) dentro de uma pasta `./src` na raiz, motivo esse que não seja necessário criar uma lista de exclusão de cobertura (para pasta node_modules ou a própria pasta tests, por exemplo). A partir daí, também é importante manter a pasta tests na raiz e o uso do arquivo `.sequelizerc`, que é responsável por mudar os caminhos padrão das pastas do Sequelize. Para isso, crie um arquivo `.sequelizerc` na raiz do projeto, e adicione o seguinte conteúdo:
```js
// ./.sequelizerc
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};
```

Após isso, não se esqueça de ajustar os caminhos de referência, tanto no package.json (script start) quanto na pasta ./tests para se adequar aos novos caminhos.


## Rodando um teste de cobertura no projeto atual
Seguindo os passos anteriores, basta adicionar um script no package.json contendo o escopo de cobertura:
```json
...
"scripts": {
    ...
    "test": "mocha ./tests/**/*$NAME*.test.js --exit",
    "test:coverage": "`nyc` --include='src/**/*.js' npm run test",
    ...
},
...
```

Após isso, basta rodar o comando `npm run test:coverage`;
