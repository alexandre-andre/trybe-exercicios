# props.children

`Children` é uma ótima ferramenta para reutilização de componentes.
```javascript
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}
```

E dessa forma podemos acessar e exibir na tela o valor `SUPIMPA` no `ComponentePai` :
```javascript
const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
```

Nesse exemplo utilizamos uma tag `p` , mas note que poderia ser um ou vários elementos de qualquer natureza, seja uma tag, ou até um componente. Ainda sim, ela é acessada da mesma forma dentro de `ComponentePai` . É importante perceber que, no caso acima, `props.children` é um objeto por ser apenas um elemento. Caso o `ComponentePai` esteja com mais de um elemento dentro como no exemplo abaixo, `props.children` se torna um array de objetos , com as informações de cada filho.
```javascript
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}
```