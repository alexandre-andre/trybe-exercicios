# Introdução

1. A biblioteca `history` nos permite acessar a sessão de histórico do navegador e também a localização atual (URL).
  - Podemos encontrar na documentação maiores detalhes sobre todos os métodos e propriedades da biblioteca, mas para nossos testes, os mais utilizados serão:
    -  `push` , que permite mudar de rota dentro do **ambiente de testes**, e
    -  `location.pathname` , que retorna a URL exata em que você está.

  - De dentro da biblioteca, também importaremos a `createMemoryHistory` , que é feita para ser utilizada em ambientes que não possuem **DOM**, por exemplo, em testes automatizados. O intuito dessa função é criar um novo histórico de navegação, para ser utilizado durante o teste. Essa biblioteca é bastante utilizada nesses casos.


2. A função `renderWithRouter` é uma função **customizada para fazer testes com rotas**, uma vez que a função `render` normal da `RTL` não dá suporte ao `router` . Ela pode ser muito útil e usa o `createMemoryHistory` para embutir no seu componente renderizado a lógica de histórico de navegação , para uso nos testes.
Exemplo:
```javascript
import {MemoryRouter} from 'react-router-dom'

test('full app rendering/navigating', () => {
  render(<App />, {wrapper: MemoryRouter})

  // verify page content for expected route
  expect(screen.getByText(/you are home/i)).toBeInTheDocument()
})
```

```javascript
// test utils file
const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}
```
   - If you find yourself adding Router components to your tests a lot, you may want to create a helper function that wraps around render.
```javascript
// app.test.js
test('full app rendering/navigating', () => {
  renderWithRouter(<App />)
  expect(screen.getByText(/you are home/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/about/i), leftClick)

  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  renderWithRouter(<App />, {route: '/something-that-does-not-match'})

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'
  renderWithRouter(<LocationDisplay />, {route})

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
```


### Documentação
[biblioteca history](https://v5.reactrouter.com/web/api/history)