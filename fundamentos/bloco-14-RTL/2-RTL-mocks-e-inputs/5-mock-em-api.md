# Testando uma chamada de API no React
> Os testes que dependem de requisições são os mais beneficiados com o uso do `mock` . Excluem problemáticas como falha na API, instabilidade de internet e tamanho de retorno.

Agora que você já conheceu o básico de mockar funções e módulos no Jest, vamos ver como isso funciona em uma aplicação React. Utilizaremos a api de piadas aleatórias para acompanhar os exemplos. Primeiro crie uma aplicação com `npx create-react-app` , substitua o `App.js` pelo conteúdo abaixo:
```javascript
// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        {joke}
      </div>
    );
  }
}

export default App;
```

## Exemplo 1
Substitua o arquivo App.test.js pelo conteúdo abaixo:
```javascript
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
// A constante joke cria um objeto similar ao que é retornado da API ;
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

// O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
  jest.spyOn(global, 'fetch');
// Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
// await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument(); // deve estar no documento
  expect(global.fetch).toBeCalledTimes(1); // numero de chamadas
  expect(global.fetch).toBeCalledWith(  // o fetch estah sendo chamado com argumentos ...
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
```


## Exemplo 2
Existem diversas formas de mockagem , você se lembra que a função fetch é uma Promise ? Que vantagem isso traz dentro dos testes? Veja no código abaixo:
```javascript
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.'); // usamos o find qdo temos q esperar uma promisse
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
```

O código é muito similar ao do primeiro exemplo, alterando somente o `mock` .

Nesse exemplo estamos dizendo que `global.fetch` agora é uma função **mockada** com `jest.fn` que retorna uma `Promise` , e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função `json` que também é uma `Promise` , que quando resolvida retorna sua piada.

Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await , onde temos o mock dessa forma:
```javascript
global.fetch = jest.fn(async () => ({
  json: async () => joke
}));
```

Nestes casos, utilizamos o mock para evitar uma chamada externa à API, tornando o nosso teste mais rápido e confiável, retornando o resultado contido na constante **joke** . 

Imagine que a API saia do ar ou que perdemos acesso à internet enquanto o teste roda. O teste quebraria, apesar do seu código estar funcionando. Mockar a chamada à API evita esse tipo de problema. Outro ponto é que seus testes vão rodar mais rápido se você não fizer uma chamada real à API todas as vezes que você for rodar seu teste.
