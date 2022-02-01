# event handlers genéricos

Uma excelente forma de criarmos formulários `100%` com `componentes controlados` é fazermos um `event handler genérico`, capaz de atualizar o estado de todos os componentes com a mesma lógica.
```javascript
handleChange(event) {
  const { target: { name } } = event;
  const value = typeof value === 'checkbox' ? event.target.checked : event.target.value;
  // se o tipo do value for do tipo checkbox retorna o checked, se nao, retorna o value

  this.setState({ [name]: value }) // interpolaçao para o NAME da variavel ser o nome da chave do objeto
  // name === email => [name] === email
}

// 2
handleChange({ target }) {
  const { name } = target;
  const value = typeof value === 'checkbox' ? target.checked : target.value;

  this.setState({ [name]: value });
}
```

## O truque:
- Dê a cada elemento um `nome que seja igual à respectiva chave no estado do componente`
- No `handler`, recupere a partir do parâmetro `event` o `nome` do componente que disparou o evento e o valor associado ao disparo.
- Interpole o `nome` do **componente** como `chave` do **estado** numa sintaxe como a acima.