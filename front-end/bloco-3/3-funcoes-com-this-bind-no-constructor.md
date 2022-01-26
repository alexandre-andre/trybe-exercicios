# Vinculando funções à classe com this e bind no constructor

## Acessando uma função nossa dentro da classe
Para acessar uma função que criamos dentro de uma classe num `eventListener` precisamos explicitar a origem de nossa função com a sintaxe `this.minhaFuncao` .

```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;
```


## Constructor
Toda classe em JavaScript tem acesso a um método chamado `constructor()` , e com as classes de React, definidas com `class MinhaClasse extends React.Component` , não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função `constructor()` . Toda a lógica interna que o **React** adiciona aos seus componentes começa a ser inclusa neles nesse momento.

No JavaScript, o `super()` refere-se ao construtor da classe pai. (No nosso caso, refere-se à implementação de `React.Component` .) É importante lembrar que você não pode usar o `this` em um construtor até que você tenha chamado o construtor da classe pai, o JavaScript não vai te deixar fazer isso. Então, por hora, apenas lembre-se que para usar o `this` dentro do `constructor()` é preciso chamar o `super()` antes. *Ter isso em mente vai ser muito importante ao lidar com estados nas classes*!

A grande questão, no entanto, é que é possível adicionar aos construtores das classes React comportamentos e lógica extras! Fazemos assim:
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;
```

### Conhecer o construtor é peça fundamental para usarmos Eventos e Estados nos componentes do React !

## `this`
O `this` acessa, nos componentes React, **um objeto que guarda tudo que importa àquele componente** .
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;
```

```javascript
App {
  context: {}
  props: {}
  refs: {}
  state: null
  updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
  _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
  _reactInternalInstance: {_processChildContext: ƒ}
  isMounted: (...)
  replaceState: (...)
  __proto__: Component
    constructor: class App
    isMounted: (...)
    render: ƒ render()
    replaceState: (...)
    __proto__: {...}
  // ... Continua
}
```

O `this` , *dentro das classes de componentes React* , é um *objeto* enorme que contém, basicamente, tudo que concerne aquele componente dentro da aplicação.

Quando fazemos `this.props` , estamos acessando a `chave props` dentro do `objeto this` , que irá conter as propriedades ( props vem de propriedades !) passadas àquele componente. Com ele, por exemplo, conseguimos acessar as `props` e outras coisas, como o **estado do componente** , dentro das funções `render` e `constructor` , exemplo:
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
```

Esse comportamento acontece em função de dificuldades que o JavaScript tem com a implementação de uma lógica de classes, lógica para qual a linguagem não foi feita!

A solução é, no `constructor` , fazermos para cada uma de nossas funções um vínculo "manual" da nossa `função` com o `this`.
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
```
> definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...} , você não precisará fazer o bind no constructor, mas sua aplicação será menos performática!






