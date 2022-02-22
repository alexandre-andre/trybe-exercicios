# Introdução ao `RTL`
No conteúdo de testes já visto no curso, funções eram testadas. Já no `RTL` o objetivo é testar comportamento, como se algo aparece ou não na tela. Por exemplo:
- Podemos testar se a nossa página possui um título específico (igual aos requisitos que se pedem no projeto!);
- Em uma lista de tarefas, como o projeto `Todo list` , precisamos verificar, por exemplo, se a funcionalidade de adicionar uma nova tarefa funciona. Para isso, devemos simular o comportamento de quem usa, que seria adicionar um texto no campo de texto alvo e clicar no botão que adiciona a nova tarefa. Para testar se funcionou, verificamos se o texto aparece em algum lugar da página. O `RTL` nos dá as ferramentas necessárias para realizar essa simulação!



- Crie uma nova aplicação com o comando `npx create-react-app testes-react` .
  - A biblioteca RTL já vem instalada nos novos projetos.
- Abra a aplicação no `VSCode` e abra o arquivo `App.test.js` . Ele está dentro do diretório src .
- Observe o arquivo `App.test.js` :
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

O que ele está fazendo é verificar se algum elemento dentro do componente App possui o texto "learn react" ( /string/i é utilizado para ignorar case sensitive , ou seja, não diferenciar letras maiúsculas e minúsculas). Para rodar os testes vá para a pasta src e execute npm test .
- Quando aparecer a tela de tests => **a** 
- Como pode ver, o nosso único teste passou. Quer dizer que existe o texto "learn react" dentro do componente App ! Se rodar aplicação com o npm start , você encontrará o texto "learn react", conforme indicado pelo teste.
- Agora vamos provocar um erro ou uma falha. Mude o texto "learn react" para "algo que não aparece" e rode o teste. Seu terminal acusará este erro:
  - *renders learn react link*

Dê uma olhada na [cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/) da `react-testing-library` . Ela explica de forma resumida como a biblioteca funciona. Nos aprofundaremos nas explicações ao longo deste bloco!

> 💡 Repare no arquivo `setupTests.js`. Por padrão ele é criado junto ao comando `npx create-react-app` , dentro dele temos comentários e uma importação, essa importação fornece para nossos testes o que chamamos de `custom jest matchers` . O `.toBeInTheDocument()` é um deles, consulte outros na documentação do [jest-dom](https://github.com/testing-library/jest-dom) sempre que precisar.


# Parte a parte do código

## Renderização
Testar um componente significa renderizá-lo em um browser real ou numa simulação de um browser e testar nele o comportamento desejado. Na `RTL` , é necessário o uso da função `render()` para fazer isso. A função `render()` faz a renderização de um componente em memória para que se possa simular as interações com esse componente.
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // renderizacao
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

Para usar o seletor/query `getByText` , precisamos usar o `screen.getByText` . Observe que ele é muito parecido com os seletores do DOM, como o `document.getElementById()` ou `document.querySelector()` . Seguindo a mesma lógica, ao usar o `screen.getByText()` , ele retornará um elemento *html*. A vantagem de utilizar o `screen` é que não precisamos atualizar e desestruturar a chamada do `render` para todo teste que for feito, pois é possível consultar e utilizar todos os elementos do DOM através do próprio `screen` .


## Seletores
`Seletores` ou `Queries` são métodos que usamos para indicar ao RTL algum elemento da nossa aplicação e assim podermos realizar nossos testes e comparações.

Todos os seletores (queries) estão disponíveis nessa [lista de queries](https://testing-library.com/docs/queries/about/) da `react-testing-library` , mas não é necessário ler toda a documentação! Use-a para tirar dúvidas ou procurar algum assunto específico.

Mas como fazer para buscar um elemento que não possui um texto? Como um input? Para isso, existem outros seletores.
```javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
    </div>
  );
}

export default App;
```

Agora precisamos testar se esse input está, de fato, aparecendo na tela.

Como ele não possui um texto, não podemos usar o `getByText` , mas podemos usar o `getByLabelText` , onde ele pegará o input de acordo com o **texto da label** que está associado a ele. Nesse caso, o input está relacionado com a label Email .
```javascript
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  // rederizacao
  render(<App />);
  // query
  const inputEmail = screen.getByLabelText('Email');
  // verificacao
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
```

Mudamos os `expects` também, verificando se o elemento está na tela e é do tipo correto.

Mas e se um campo não tiver **texto** e nem **label**? Podemos usar o `getByRole` . Ele busca pelo atributo `role`. No caso de um botão, o **role é definido pela propriedade type="button"** . O role serve, por exemplo, para buscar por um elemento <button>Enviar<button/> ou <input type="button" value="Enviar" /> .

## Agora adicionamos um botao ao App.js
```javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

export default App;
```

Adicione o teste abaixo dentro do arquivo `App.test.js` :
```javascript
test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
```

## Adicionamos mais um botão em App.js
```javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
```

Se rodarmos os testes, acontecerá que o `getByRole` espera encontrar **apenas um elemento**, mas acaba encontrando dois, o botão de **Enviar** e o de **Voltar** , pois os dois possuem o `role` **button** , retornando a mensagem `Found multiple elements with the role "button"` . Para resolver esse problema precisamos usar outro seletor, o `getAllByRole` , que armazenará todos os valores encontrados pelo seletor em um array. Para testar precisamos mudar o teste para:
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existe dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});
```

Observe que usamos `buttons` juntamente com `toHaveLength` para verificar se foram encontrados dois botões. Não precisamos usar o toBeInTheDocument para realizar a verificação de presença no documento!

Foi necessário comentar o nosso segundo teste para não ocorrer um erro. Vamos modificá-lo para verificar se existe um botão de enviar. Para isso usaremos a query `getByTestId` . Para usar esse seletor devemos adicionar uma propriedade ao nosso botão de enviar, o data-testid , que é um identificador para a biblioteca de testes.

```javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
```

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);

  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');

  const img = screen.getByRole('img', {name: /foto perfil/i }) // name eh a propriedade alt da role img
  expect(img).toBeInTheDocument();
});
```
- Buscamos o elemento pelo `data-testid` e verificamos se ele está na tela. 
- Verificamos se este elemento é um botão e com a propriedade `toHaveValue` conferimos se possui o texto **Enviar** .


# Testando eventos
Por enquanto, estamos apenas testando se as coisas estão sendo renderizadas, mas precisamos testar o comportamento da pessoa usuária, como um clique em um botão. Para isso, usaremos a userEvent . A `user-event` é uma biblioteca complementar à `React Testing Library (RTL)` que possibilita a simulação de várias interações com o navegador. Essa biblioteca é baseada no método `fireEvent da React Testing Library`, mas seus métodos são mais aproximados da interação da pessoa usuária. Enquanto um `fireEvent.change(input, { target: { value: 'hello world' } })` dispara um evento de alteração do campo de input, um `userEvent.type(input, 'hello world')` testará interações `keyDown`, `keyPress` e `keyUp` para cada caractere digitado.

Portanto é uma boa prática, e altamente recomendado utilizar `userEvent` ao invés de `fireEvent` , **sempre que possível** . Você pode consultar a documentação com os eventos do `userEvent` e a lista completa de eventos suportados pelo `fireEvent` . Quando utilizamos o `create-react-app` para criar um projeto, a biblioteca `user-event` já vem instalada por padrão. Mas caso você precisa instalar ela manualmente, basta rodar o comando:
```
npm install --save-dev @testing-library/user-event
```

A maioria dos métodos do userEvent são síncronos, exceto quando utilizar o userEvent.type, pois ele aguarda a informação que será testada. O type possui três parâmetros, sendo o terceiro parâmetro opcional, **type(element, text, [options])** , esse terceiro parâmetro pode ser utilizado para passar um delay , em milissegundos, que será o tempo esperado entre dois caracteres digitados para realizar a ação do teste. Você pode utilizar essa opção caso queira testar o comportamento de uma pessoa usuária com maior ou menor agilidade de digitação, o valor default para o delay é **0** . O `userEvent.type` é um evento que retorna uma `Promise`, porém, como valor default é 0, você só precisará aguardar o retorno dessa Promise caso passe algum valor para a option *delay* , do contrário o userEvent.type funcionará de modo síncrono.

Modificaremos nosso App.js para que, quem usa, possa inserir o seu email no campo, salvá-lo e mostrá-lo na tela:
```javascript
// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  // recebe o valor do campo como parametro e salva no email
  changeEmail(value) {
    this.setState({ email: value });
  }

  // quando o botao for clicado guarda o email no saveEmail e apaga o input email
  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            // a funcao recebe por parametro o value do e.target
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          // recebe o valor do input digitado e a funcao de click passa esse valor para o saveEmail e reseta o campo email
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;
```

Rode a aplicação e a teste à mão, adicionando seu email no campo e clicando no botão de enviar. Veja se seu email foi salvo.

Agora iremos **automatizar** cada passo que você fez no código usando o `userEvent` , para não precisar testar à mão cada passo desses toda vez que alterar o código. Bastará, ao invés disso, apenas rodar o `npm test` . Para utilizar o `userEvent` é necessário **importar** a biblioteca para o arquivo onde o teste será realizado:
```javascript
import userEvent from '@testing-library/user-event';
```

TESTE
```javascript
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user'); // pega pelo testid
  expect(textEmail).toBeInTheDocument(); // deve estar no documento
  expect(textEmail).toHaveTextContent('Valor:'); // deve existir o texto com o valor

  const btnSend = screen.getByTestId('id-send'); // pega pelo testid
  const inputEmail = screen.getByLabelText('Email'); // pega a label com o texto 
  userEvent.type(inputEmail, EMAIL_USER); // userEvent entra no inputEmail e escreve um email
  userEvent.click(btnSend); // userEvent dispara o click no btnSend

  expect(inputEmail).toHaveValue(''); // apos todo o fluxo o input email deve ter o valor vazio
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`); // deve aparecer na tela o texo ...
});
```
Passo a passo:
1. Primeiro renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).
2. Depois, verificamos se a tag `<h2>` onde o email aparece na tela está apenas com o texto `Valor`: ,
3. Depois procuramos pelo o campo de email e o botão que enviará os dados.
4. Simulamos a digitação da pessoa usuária no campo de email com o `userEvent.type(inputEmail, EMAIL_USER)` , passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ( '`email@email.com`' ).
5. Simulamos um clique no botão com o `userEvent.click(btnSend)` , passando o elemento do botão como parâmetro.
6. Verificamos se após o `click` , o campo de input do email retorna para vazio e se a tag `<h2>` , que anteriormente só exibia `Valor`: , agora recebe o email passado ao input, resultando em `Valor: email@email.com` .
