# Contexto em componentes de classe
A essa altura, você já sabe que é possível criar um componente utilizando funções ou classes. Em ambas as formas, você pode utilizar um consumer para acessar o contexto, como fizemos em todos os exemplos até agora.

Em componentes de classe, também é possível utilizar a propriedade contextType .

contextType é uma propriedade disponível em qualquer componente de classe, e seu único propósito é fazer com que seja possível acessar o valor de um contexto através de this.context , sem a necessidade de utilizar um consumer, em qualquer lifecycle method do componente, incluindo a função render .

Somente um contexto pode ser atribuído a contextType . Caso um componente de classe precise acessar mais de um contexto, será necessário utilizar um consumer, como exemplificado anteriormente.
```javascript
const MyContext = createContext();

class MyComponent extends React.Component {
  componentDidMount() {
    const value = this.context;
    // ...
  }

  render() {
    const value = this.context;
    // ...
  }
}

MyComponent.contextType = MyContext;
```
