# Testando apenas um componente
Usaremos a mesma aplicação anterior e criaremos um componente que mostra se o email é válido ou não. Crie o componente ValidEmail.js :
```javascript
// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
```

Substitua a linha do `h2` no `App.js` e não esqueça de importar o `ValidEmail` :
```javascript
<h2 data-testid="id-email-user">{ `Valor: ${ saveEmail }` }</h2>
// Substitua a linha de cima pela a debaixo.
<ValidEmail email={ saveEmail } />
```

Rode os testes e observe que mesmo sem mudar nenhum teste, todos eles passaram, assegurando que nossa aplicação continua funcionando mesmo após essa mudança (super conveniente, certo?). Agora falta testar essa funcionalidade nova que adicionamos. Mas testaremos apenas renderizando o nosso componente `ValidEmail` . Crie um arquivo `ValidEmail.test.js` .
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
```

Observe que a estrutura é bem parecida com a dos outros testes. O que foi modificado é o que está sendo renderizado. No lugar de `render(<App />)` , colocamos `render(<ValidEmail email={ EMAIL_USER } />)` . O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={ EMAIL_USER } . O teste verifica se, com a prop passada, o nosso teste passará.

A estrutura é bem parecida com a dos outros testes, o que foi modificado é o que está sendo renderizado. No lugar de `render(<App />)` , colocamos `render(<ValidEmail email={ EMAIL_USER } />)` . O componente que queremos renderizar precisa de uma **props** para funcionar, portanto precisamos passar um valor para ela, que no caso é `email={ EMAIL_USER }` . O teste verifica se, *com a prop passada*, o nosso teste passará.
```javascript
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
```

Agora, para você começar a fixar o assunto, adicione novas funcionalidades a esse componente e faça o teste:
- Não exibir a mensagem caso o email ainda não tenha sido enviado.
- Mude a cor do texto caso o email seja válido ou inválido.
Dicas: Você pode usar o .not para negar o expect ( .not.toBeInTheDocument() ) no seu teste e também usar a propriedade styles no seu componente para trocar a cor.
