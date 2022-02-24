# RTL - Testando React Router
- Primeiro, utilize o `create-react-app` com o nome que desejar.
- Depois disso, vamos instalar as dependências que utilizaremos nesse projeto, a `react-router-dom` , `history` e a `@testing-library/react` , com o comando abaixo.

```
npm i react-router-dom@v5
```

- Por último vamos copiar esse código para dentro do nosso arquivo App.js apagando tudo o que já estiver lá.

```javascript
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
```

- Repare que, para efeito de aprendizado, temos mais de um componente dentro do arquivo `App.js` , por isso o `export default` no componente `App` . Os outros componentes, que estão sendo exportados acima do component `App` , também terão os seus respectivos `exports` . Lembrando que isso **não é uma boa prática** . Estamos fazendo dessa forma para diminuirmos a complexidade da aplicação, com o intuito de facilitar o entendimento.

- Outro ponto de atenção é que, quando utilizamos o `export default` e o `export` , a maneira de importar os componentes sofre uma pequena alteração - que veremos na hora de realizar os testes.

- Ao terminar de instalar, vamos nos deparar com um problema! A nossa página dará o seguinte erro:

```javascript
You should not use <Link> outside a <Router>
```

- Esse erro acontece porque o `BrowserRouter` deve encapsular todos os itens chamados pelo `react-router-dom` e, no nosso caso, existem dois `<Link>` no `App.js` , o que nos leva a esse erro. Vamos resolver isso colocando a tag `<BrowserRouter>` no arquivo `index.js` , deixando-o da seguinte forma:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

- Agora sim! Vamos ao navegador entender o que esse código está fazendo. Basicamente, o nosso código cria um router básico com duas páginas, a **Home** e a **About** , além de criar uma página de **Not Found** para quando a pessoa digitar uma *URL* que não existe.

- Após isso, vamos usar a função `renderWithRouter` que é uma função **helper** ou **assistente**. Uma função **helper** *executa uma tarefa específica e não depende de outras funções*.

- No nosso caso, a **helper** irá criar um *histórico e renderizar o componente* que iremos testar. Para não ficarmos sem contexto de onde essa função veio, ela foi tirada da documentação oficial da `Testing Library` que você pode encontrar [aqui](https://testing-library.com/docs/example-react-router/#reducing-boilerplate). Vamos salvar a **helper** num arquivo `src/renderWithRouter.js` e entendê-la antes de escrevermos os testes:

```javascript
//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};
export default renderWithRouter;
```
- Aqui utilizaremos a biblioteca `history` para criar um histórico de navegação. A *helper* irá passar o histórico para o componente `Router` , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.

- Existe uma forma de fazer sem o `helper` , mas ela implica em escrever bem mais código. [Esse link](https://testing-library.com/docs/example-react-router/) tem um exemplo muito parecido com o que estamos fazendo, a grande diferença é que lá eles não utilizam uma função auxiliar. Repare que a sintaxe que utilizaremos será bem parecida com a do site, com a diferença de verbosidade que no exemplo do link acima será bem maior.

- Com a ajuda desta função, vamos escrever muito menos código na hora de testar, porque precisamos apenas chamar a renderWithRouter . Não podemos esquecer que devemos colocar o `<BrowserRouter />` encapsulando o componente `<App />` inteiro.

- Para fazermos isso, devemos colocá-lo no `index.js` . Isto é necessário porque queremos ter controle sobre o `BrowserRouter` nos testes. Se ele estiver dentro do componente que vamos testar, nós perderemos o controle sobre ele.

- Uma outra característica dessa função é que ela retorna tanto o componente que passamos como parâmetro, já encapsulado no router, quanto o histórico que geramos, o que também serve para nos levar a outras páginas com facilidade.