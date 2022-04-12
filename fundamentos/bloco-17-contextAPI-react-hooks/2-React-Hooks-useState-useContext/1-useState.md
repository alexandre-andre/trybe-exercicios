# [useState](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate)
O `useState` é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe. Veja este componente com Estado feito com uma classe e em seguida o mesmo componente feito com hooks :

## componete com classe
```javascript
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
          }
        >
          Increase Counter
        </button>
      </div>
    )
  }
}
```

## componente com function
```javascript
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={ () => setCounter(counter + 1) }
        >
          Increase Counter
        </button>
      </div>
  )
}
```


## Mudanças
1. Não é mais necessário importar o Component , somente o `useState` .
2. Remover o `constructor` , junto com o `super` e o `this.state`. Ao invés disso foi adicionado o `useState`: O `counter` é o valor do estado, o `setCounter` é a função que será usada para definir novos valores ao estado e o `useState(0)` é onde adicionamos o valor inicial do estado.
3. O *event handler* `onClick` também mudou. No lugar de `this.setState` temos somente a chamada da função `setCounter` definida anteriormente, recebendo como parâmetro o novo valor de `counter` , neste caso `counter + 1` .


Tanto `this.setState` quanto `setCounter` possuem o objetivo de atualizar o estado do componente. Da mesma forma que valores atualizados por `this.setState` acontecem de forma assíncrona, mudanças utilizando `setCounter` também não são instantâneas.

A função `setCounter` recebe um novo valor para o estado e coloca na fila de re-renderização do componente. Na próxima vez que o componente for re-renderizado o valor retornado por `useState` será o estado atualizado.

Com o `useState` , no lugar de ter todos os estados do componente dentro de um grande objeto, teremos um `useState` diferente para cada valor de estado que estiver sendo utilizado.
