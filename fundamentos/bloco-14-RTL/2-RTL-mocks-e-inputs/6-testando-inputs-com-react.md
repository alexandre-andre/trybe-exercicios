# Testando inputs em React
Agora, vamos falar um pouco sobre teste de formulários, que são um pouco diferentes do resto da página porque normalmente os componentes já estão em tela no momento do carregamento mas os valores do input não estão. Então precisamos, nos testes, interagir com o input da mesma forma que a pessoa que está utilizando a aplicação faria para poder testá-lo corretamente.

- Vamos primeiro criar dois campos de texto, um para digitar nome e outro para digitar e-mail.
- No arquivo `App.js` de sua aplicação react coloque o código abaixo e veja no navegador e no console dele como funciona:
```javascript
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;

    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
      </div>
    );
  }
}
export default App;
```

Vamos escrever o teste, ele vai interagir com os inputs, colocar valores neles, assim como quem navegar pela página faria. Depois, vamos testar se o que for digitado aparece na página.
```javascript
// **App.test.js**
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
```

- No código, vemos como utilizar o `userEvent` . Observe que importamos uma biblioteca auxiliar para ter acesso a esta funcionalidade, que simula interações entre a pessoa usuária e a página. Ela é recomendada pois sua execução se aproxima mais a de uma interação real de uma pessoa, do que o método nativo que existe no `RTL` , o `fireEvent` .
- O `userEvent` dispara um evento no elemento da página selecionada. Observe a sintaxe no nosso exemplo: estamos utilizando o evento `type` , e no primeiro argumento da função informamos o elemento que queremos interagir ( inputNome ), e no segundo parâmetro, o que queremos digitar neste campo ( 'Estudante da Trybe' ).
- Uma coisa que pode ajudar a entender o que está acontecendo é O console.log na função **handleInput** do arquivo **App.js** exibindo a variável *value* . Fazendo isso, o console.log aparece no teste, o que lhe dará a certeza de que a `RTL` está realmente renderizando sua página e inserindo nos campos os valores, da mesma forma que uma pessoa faria.
- Para visualizar o comportamento dos testes acima basta ter uma aplicação react e substituir o arquivo **App.js** e **App.test.js** .