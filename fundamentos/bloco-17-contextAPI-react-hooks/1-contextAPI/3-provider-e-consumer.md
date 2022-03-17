# Provider e Consumer
Quando se utiliza um *consumer* , React encontrará na árvore o provider correspondente mais próximo e utilizará seu valor. Caso não seja encontrado um *provider* , o valor do contexto utilizado será o valor passado para `createContext` quando o contexto foi criado.

Por exemplo, imagine que criamos um contexto com 1 como valor default.
```javascript
const MyContext = createContext(1);
```

Se colocamos um provider na árvore e passamos para ele 1000000 como valor, este será o valor recebido quando utilizamos um consumer .
```javascript
<MyContext.Provider value={1000000}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => { /* value = 1000000 */
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}
```

Porém, se não colocarmos o `Provider` na árvore, quando um componente acessar o contexto através de consumer , o valor recebido será 1.
```javascript
/* Não existe mais o Provider nessa árvore */
<MyComponent>
  <MyOtherComponent>
    ...
  </MyOtherComponent>
<MyComponent>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => { /* value = 1 */
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}
```


