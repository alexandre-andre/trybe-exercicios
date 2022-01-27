# State vs Props
- `props` são uma forma de passar **dados de pai para filho**.
- `state` é **reservado para dados que seu componente controla**.

`state` , **ou estado do componente**, deve servir para guardar valores do **Componente** que mudam com o uso do mesmo.

As `props` são **valores fixos** que um componente recebe e não altera.

Pelos princípios do React NUNCA devemos tentar alterar o que um componente recebe como props como no exemplo abaixo:
```javascript
this.props.name = 'novo nome';
```

