# Escrevendo os testes da Aplicação
Agora que vimos o App que vamos testar e entendemos a função que vamos utilizar, iremos escrever os testes dentro do arquivo `src/App.test.js` :

```javascript
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});
```

- Aqui, fizemos os imports necessários: o próprio react , a helper e o componente que iremos testar.
- Importamos o teste em si, que chama a helper passando o componente a ser renderizado. Nesse primeiro caso, mostraremos como renderizar a aplicação toda, fazendo um teste geral, depois vamos ver como renderizar um componente específico.
- Continuando os testes, vamos clicar no link About em nossa aplicação e verificar se estamos na página correta.

```javascript
// import React from 'react';
// import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

// it('deve renderizar o componente App', () => {
//   renderWithRouter(<App />);

//   const homeTitle = screen.getByRole('heading', {
//     name: 'Você está na página Início',
//   });
//   expect(homeTitle).toBeInTheDocument();
// });

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});
```

- Com o userEvent (que deve ser importado da @testing-library/user-event ), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre ). Depois disso, utilizaremos o history.location.pathname para verificar se estamos na página correta e, por último, checamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
- Agora que temos mais um caso de uso, é interessante colocar o describe, ele ajudará bastante na hora de separar os testes e numa eventual falha, saberemos qual teste falhou. Vamos colocá-lo abaixo:
```javascript
// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

describe('teste da aplicação toda', () => {
  // it('deve renderizar o componente App', () => {
  //   renderWithRouter(<App />);

  //   const homeTitle = screen.getByRole('heading', {
  //     name: 'Você está na página Início',
  //   });
  //   expect(homeTitle).toBeInTheDocument();
  // });

  // it('deve renderizar o componente Sobre', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  //   expect(aboutLink).toBeInTheDocument();
  //   userEvent.click(aboutLink);

  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/about');

  //   const aboutTitle = screen.getByRole('heading',
  //     { name: 'Você está na página Sobre' });
  //   expect(aboutTitle).toBeInTheDocument();
  // });
});
```

- Encerrando esse teste de aplicação total, vamos testar a página que deveria aparecer ao digitar na barra de endereços uma página que não existe:
```javascript
// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

// describe('teste da aplicação toda', () => {
//   it('deve renderizar o componente App', () => {
//     renderWithRouter(<App />);

//     const homeTitle = screen.getByRole('heading', {
//       name: 'Você está na página Início',
//     });
//     expect(homeTitle).toBeInTheDocument();
//   });

//   it('deve renderizar o componente Sobre', () => {
//     const { history } = renderWithRouter(<App />);

//     const aboutLink = screen.getByRole('link', { name: 'Sobre' });
//     expect(aboutLink).toBeInTheDocument();
//     userEvent.click(aboutLink);

//     const { pathname } = history.location;
//     expect(pathname).toBe('/about');

//     const aboutTitle = screen.getByRole('heading',
//       { name: 'Você está na página Sobre' });
//     expect(aboutTitle).toBeInTheDocument();
//   });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
// });
```

- A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.
