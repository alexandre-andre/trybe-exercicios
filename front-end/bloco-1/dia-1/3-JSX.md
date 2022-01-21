# JSX

O `JSX` , ou `Javascript Syntax Extension` , como o próprio nome sugere, é uma extensão de sintaxe para Javascript. Sua utilização é recomendada pela documentação do React, pois ela demonstra como a interface deverá se comportar, de forma lógica e descritiva.

Exemplo:
```javascript
const element = <h1>Hello, world!</h1>;
```

> Os códigos com a sintaxe JSX só funcionam dentro do contexto do React, ou seja, não funcionam em JS puro ou rodando diretamente no console do navegador, por exemplo.
> [CodeSandbox](https://codesandbox.io/s/new?file=/src/App.js) para brincar em scripts .js ou .jsx que importam o React em projetos criados pelo comando `npx create-react-app `.

A construção de um elemento JSX é bem parecida com um elemento HTML, com pequenas diferenças para que não haja conflito do HTML com o JS. Um exemplo disso é a declaração de uma class no HTML, que é substituída por className no JSX, pois haveria conflito de sintaxe com as classes do JS.

Caso fossemos declarar a mesma variável sem o JSX, precisaríamos utilizar funções como o `createElement` que recebe como parâmetro um componente, um objeto com as `props` (veremos mais sobre elas nos próximos dias) e o conteúdo que será encapsulado por este componente. Seriam necessárias sequências relativamente longas de instruções de código para conseguirmos montar e manipular uma árvore de componentes. Para visualizarmos essa complexidade, vamos refazer o código acima sem o JSX:
```javascript
const element = React.createElement("h1", null, "Hello, world")
```

# Incorporando expressões no JSX
Por ser um código Javascript, o JSX permite que se faça injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, por exemplo:
```javascript
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;
```

E se aprofundarmos um pouco mais chamando uma função na nossa constante element?
```javascript
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;
```

Agora, vamos incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div :
```javascript
function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;
```

Lembra que falamos sobre a substituição de `class` por `className` em JSX? Podemos também utilizar expressões `Javascript` para atribuir valor à este atributo.
```javascript
const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;
```