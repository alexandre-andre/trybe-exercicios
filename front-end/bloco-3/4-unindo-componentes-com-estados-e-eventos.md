# Unindo componentes com estados e eventos
Sobre `this` e sobre como lidar com `eventos` dentro das `classes React`, vamos finalmente acessar o **estado**! Veja o exemplo abaixo para conhecer a sintaxe:

```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
```

**NUNCA** devemos atribuir valores ao estado diretamente com `this.state` . O estado é atualizado de forma assíncrona pelo React, para garantir performance, e o React não garante a ordem em que as atualizações ocorrerão. Se fizermos uma atribuição direta, teremos problemas! Faça-o sempre através da função `this.setState(meuNovoObjetoQueRepresentaOEstado)` .

Mas se a a atualização do estado não ocorre em ordem, "como eu atualizo meu estado com base no estado anterior?

Se tudo ocorre fora de ordem, como eu sei que uma conta de novoEstado = estadoAtual + 1 não dará problemas?"

Pois bem! Com `Promises`, para garantir que algum código executasse somente após o **retorno** da Promise, que é **assíncrona**, temos que colocá-lo dentro da função `.then` . Aqui a lógica é da mesma natureza:
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
```

>💡 Se quisermos chamar, no elemento, um evento passando um parâmetro, deveríamos trocar a sintaxe `<button onClick{this.minhaFuncao} ...>` por `<button onClick={() => this.minhaFuncao('meu parametro')}` . Basicamente, substituímos a função do evento por uma chamada à mesma feita via callback! Experimente!
