# Criando um script simples

## Criando o pacote Node.js
- Vamos começar criando uma nova pasta, chamada hello-world, onde colaremos nosso código.
- Dentro dessa pasta, execute o comando `npm init`. Deixe todas as perguntas com o valor padrão, a não ser o nome da pessoa autora (`author:`), onde você colocará seu nome.
- Pronto! Pacore criado. Abra a pasta hello-world no VSCode e vamos começar a criar nosso script.


## Criando o código do Hello, world!
- Crie um arquivo chamado `index.js`.
- No arquivo index.js execute 
  - console..log('Hello World');
- Pronto, nosso script de "Hello, world!" está criado! Mas nosso pacote ainda não está pronto. Vamos criar um script start para estarmos aderentes às convenções do Node.js.


### Criando o script `start`
Para criar um script precisamos alterar o `package.json` da nossa aplicação. Sendo assim:
- abra o `package.json` da pasta `hello-world` e altere a linha destacada para criar o `script start` dessa forma:
```json
// {
//   "name": "hello-world",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node index.js"
//   },
//   "author": "Seu nome",
//   "license": "ISC"
// }
```


## Executando o script
- Entre na pasta hello-world no terminal e execute `npm start`.


## Lendo input do terminal
Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros: o [readline-sync](https://www.npmjs.com/package/readline-sync).


Por tratar-se de um *módulo de terceiros*, precisamos primeiro instalar o `readline-sync` pra podermos utilizá-lo no código.

Para fazer isso, basta executarmos:
- `npm i readline-sync` dentro da pasta hello-world. 
  - A letra i aqui é um atalho para install. Ela também funciona com a flag -D para devDependencies, e sem parâmetro nenhum, para instalar as dependências listadas no package.json.

Uma vez instalado o pacote, podemos utilizá-lo em nosso script. Para isso, precisamos, primeiro, importá-lo desse jeito:
```js
const readline = require('readline-sync');
// console.log('Hello, world!');
```

Apesar do pacote chamar-se `readline-sync`, podemos dar qualquer nome para a `const` que usamos para importá-lo.

Agora, com o pacote em mãos, podemos utilizar as funções `question` e `questionInt` disponibilizadas por ele para perguntar à pessoa usuária seu nome e idade:
```js
// const readline = require('readline-sync');
const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
// console.log('Hello, world!');
```

A função `question` interpreta a resposta como uma string comum, ao passo que a função `questionInt` converte a resposta para número utilizando o `parseInt` e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.

Pronto, agora o último passo é utilizarmos essas novas variáveis para compor nossa mensagem de olá. Bora fazer isso então:
```js
// const readline = require('readline-sync');

// const name = readline.question('What is your name? ');
// const age = readline.questionInt('How old are you? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
```

Se executarmos novamente, veremos o resultado: perguntamos qual o nome e idade da pessoa e depois exibimos uma mensagem personalizada.

💪 Execute novamente o script com npm start para vê-lo em ação!