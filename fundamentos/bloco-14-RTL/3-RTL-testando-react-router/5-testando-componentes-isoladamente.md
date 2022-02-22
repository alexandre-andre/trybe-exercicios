# Testando componentes isoladamente
Até aqui nós aprendemos como testar nossa aplicação renderizando ela por completo. Mas é possível testar os componentes separadamente também. Vamos ver como:
```javascript
it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});
```

- Você verá que, ao copiar esse test, o `Jest` retornará um erro, dizendo que o componente `About` não foi definido. Isso é porque ele não foi importado nesse arquivo! Altere a linha de import do `App.js` para:

```javascript
import App, { About } from './App';
```

- Talvez você esteja se perguntando porque o `App` não foi importado com `{}` e o `About` foi. Isso aconteceu porque só pode haver um `export default` por arquivo (que faz o componente ser importável sem as chaves `{}` ) e o `App` tomou esse espaço, então os ou`tros` componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do `{}` .
- Para ver a diferença entre a renderização da aplicação inteira e de apenas um componente, cause um erro nos testes, alterando o que é esperado no `getByRole` dos testes. Você verá que, ao importar apenas o componente, toda a estrutura ao redor dele não é renderizada. No nosso caso de exemplo, os links do topo não são renderizados.
  