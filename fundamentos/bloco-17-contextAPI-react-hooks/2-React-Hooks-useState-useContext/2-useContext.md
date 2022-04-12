# (useContext)[]
O `useContext` é o *hook* que ajuda a trabalhar com a **Context API** . Ele funciona como um *Consumer* , mas de uma forma muito menos complexa e que torna o código bem mais legível!

Assim como seria feito utilizando o Consumer , vamos fazer um setup inicial para podermos utilizar o `useContext` :


## 1. criar o Context:
createContex === createStore
```javascript
import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;
```


## 2. criar o Provider:
`provider === action + reducer`
```javascript
import React, { useState } from 'ract';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');

  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={ contextValuie }>
      { children }
    </AppContext.Provider>
  )
}
```


## 3. Com o `Context` e o `Provider` criados, precisamos adicionar o Provider à aplicação:
```javascript
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Provider from '../utils/Provider';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```


## 4. Com o setup concluído, podemos utilizar o estado criado no `Provider` em qualquer componente que for necessário utilizando o `useContext` . Pra isso, precisamos importar o `Context` e o `useContext` :
```javascript
import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';s

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{ stateA }</p>
      <p>{ stateB }</p>
      <button onClick={ () => setStateA('newState') }>Click</button>
    </div>
  );
};

export dafault ComponenteX;
```


# Para fixar
### Instruções para treinar manipulação complexa de estados utilizando `Context API e React Hooks`. 
No momento precisamos melhorar essa aplicação e centralizar os estados que são utilizados por vários componentes em um contexto. Performance é muito importante e a manutenção do código deve ser feita da melhor maneira possível.

A parte mais importante é treinar manipulação de estados dentro do arquivo *src/context/MyProvider.js* , onde a função **handleChange** está vazia. Como **handleChange** está vazia, sua aplicação estará quebrada, e portanto, a página *Order.js* não receberá o *MyProvider.js* com os estados da aplicação, fazendo com que sua ramificação (filhos) também não recebam o contexto com os estados.

Dica: *Header.js, Cart.js e Options.js* são componentes renderizados pela página *Order.js* e todos utilizam o contexto da aplicação
Analise o código da aplicação e pense como atualizar individualmente a lista de comida, bebida e sobremesa , que são arrays contidos no objeto *orderList* .


# Organização da aplicação
<img src='./../../img/organizacao-context.png'>


## Esquema de pastas e arquivos da aplicação
- try-food: Diretório com toda a aplicação.
- src: Diretório que contém seu código JavaScript, JSX.
- components: Diretório que contém os componentes utilizados na aplicação.
- context: Diretório que contém contexto e provedor de estados da sua aplicação.
- pages: Diretório que contém as páginas da aplicação, ou seja, as páginas configuradas por rotas.
- index.js: Arquivo que trata de encontrar o arquivo raiz da aplicação e implementa o código React nele. O index.js importa a biblioteca react-dom e contém o BrowserRouter, que realiza a implementação de rotas para navegadores HTML5 e informa a aplicação que teremos roteamento de componentes a partir daquele ponto. Esta implementação encapsula App.js.
- App.js: Arquivo que representa o elemento raiz da aplicação, a partir dele haverá ramificações. Esta implementação encapsula Routes.js.
- Routes.js: Arquivo que centraliza todas as rotas da aplicação (boa prática).


## Dicas importantes:
- Pense em três situações: (1 - Não há o item na lista; 2 - Há o item na lista; 3 - A quantidade do item na lista passou a ser zero (0));
- A lista de comidas, bebidas e sobremesas são exibidas individualmente;
- O uso do spread (...) pode te ajudar nas lógicas que acrescentam novas posições no array;
- A função handleChange recebe informações do componente src/components/Options.js , que é um filho da página src/pages/Order.js ;
- Você precisará do Hook useState para essa função.


## Baby steps:
1. **A estrutura do `Provider`**: No início temos dois estados. Primeiramente precisamos refletir sobre alguns pontos: O que o estado precisará conter? Quais acões ele precisará controlar? Pensamos em duas chaves para nosso estado! A primeira receberá separadamente os dados de "*comida*", "*bebida*" e "*sobremesa*" em um array, e a segunda controlará o componente Header: se seu valor for false, o Header terá um botão com o texto 'Ver opções' , do contrário o texto será 'Ver sacola' . Para controlar a lógica desse estado, implementamos a função **showCart()** .

2. Com a base do estado pronta, vamos interagir com ele. Para controlar a lógica do Header, precisaremos de uma função que gerenciará as mudanças de estado através das interações no componente filho "**Options.js**" , para que o componente filho "**Cart.js**" sempre atualize o pedido do cliente. **Options.js** deverá receber a função **handleChange** , e toda vez que um usuário modificar a quantidade de um produto em "**Options.js**" , devem ser retornadas as informações "**event, name, price, e mealType**" necessárias para essa função.

3. Nossa função precisa extrair a quantidade do produto utilizando o "**event**" que foi retornado. Podemos utilizar o **event.target.value** e definir um novo objeto com a quantidade atualizada desse produto.

4. E agora? Precisamos verificar se o item que criamos está presente em uma das 3 listas contidas no objeto que é o nosso estado.
  - Para acessar uma chave dinâmica de um objeto, podemos passar essa chave através de []? Recebemos nessa função o "**mealType**" , e podemos realizar essa verificação dinamicamente se passarmos essa informação para o "**orderList**" , que é o nosso objeto que contém as chaves e suas respectivas listas como valores. Se quisermos descobrir se há algum objeto nas listas igual ao nosso newItem , podemos utilizar a função `some` , e comparar se o *item.id* equivale ao nome do item retornado .

5. Se não houver o item na lista, devemos adicionar um item na lista com a função **addItemToList** , passando newItem como parâmetro. Se já houver o item na lista, devemos atualizá-lo com a função **manageItemsInList** passando newItem como parâmetro.


## Vamos pensar um pouco! 🤔
6. No passo anterior verificamos se o produto já existe na lista. Então agora podemos utilizar o retorno dessa função para adicionar um novo produto na lista, ou atualizar um produto que já existe na lista. Podemos quebrar a função em funções menores que gerenciarão essas modificações para deixar o código mais limpo. A função recebe o objeto que criado e atualiza o estado.  Precisamos atualizar a chave correspondente do nosso estado, e para isso podemos utilizar o **itemType** do nosso objeto e fazer isso dinamicamente.


## Como podemos começar? 🤔
- Vamos brincar com o spread ! Podemos utilizar a função `setOrderList({ ...orderlist , [newItem.itemType]: "aqui entra a lógica necessária para atualizar a lista" })` 
  - Primeiro nós retornamos todo o objeto orderList
  - Depois passamos a chave que queremos atualizar, essa chave é o **newItem.itemType** que passamos para essa função.
  - E depois o valor que será passado para essa chave.

7. E agora? Se incrementarmos o valor de um produto, ele deve ser atualizado, mas e se retornar o valor desse produto para zero? Para isso temos duas missões: a primeira missão é verificar se devemos remover o item da lista caso o usuário mude a quantidade dele para zero, e chamar a função responsável por essa atualização; a segunda missão é chamar a função que atualiza a quantidade do item, caso o valor seja diferente de zero.

8. Para remover um item da lista. Já possuímos o array com os dados que serão atualizados no seu estado, o índice do elemento e a chave que você precisa acessar dentro do objeto. Podemos utilizar o método **filter** ou o método **splice**.

9. Para atualizar o produto na lista. Uma maneira muito simples de fazer a atualização de um array é utilizando o **splice** passando um terceiro parâmetro , que indica o novo valor do item naquele índice, e então realizar novamente a atualização do estado com o **spread** de todo o objeto **orderList** , e com a chave e o valor a serem atualizados.
