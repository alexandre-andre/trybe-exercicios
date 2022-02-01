# Renderização condicional e atualização de arrays no estado

Estamos realizando uma requisição para uma API, e enquanto esperamos o resultado retornar, criamos uma lógica de renderização condicional.
```javascript
class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <p>{loading ? loadingElement : this.renderJokeElement() }</p>

      </div>
    );
  }
}
```

Passamos como segundo parâmetro da `this.setState` uma **callback** com a dita lógica!
```javascript
this.setState({ meuEstado: novoValor }, () => {
  // ... Sua lógica aqui
})
```

E para o caso mais complicado? Isto é, **atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar** ao mesmo tempo?! 

Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!
```javascript
this.setState(
  (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
  () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
)
```

### Ideal para fazer lógicas de Loading... quando se está esperando a resposta de uma API! 
> como a `this.setState` **NAO retorna uma promise**, usar `async/await` com ela **NUNCA** vai funcionar.


# Como atualizar arrays no estado com base no estado anterior ? 
**spread operator**! `this.setState(({ meuArrayNoEstado }) => ({meuArrayNoEstado: [...meuArrayNoEstado, novoElemento] }))`
```javacript
this.setState(({ meuArrayNoEstado}) => (
  {meuArrayNoEstado: [...meArrayNoEstado, novoElemento] }
))
```
