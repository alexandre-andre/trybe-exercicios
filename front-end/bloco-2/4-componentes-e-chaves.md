# Lista de componentes e chaves

## Como renderizar dinamicamente uma lista?
```javascript
const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
```

1. criar uma coleção de elementos.
Para isso, `iteramos` sobre shoppingList com uma `HOF` que retorne, em um `novo array` , cada item da lista envolvido por um elemento `<li>` . A seguir, atribuímos o array resultante para a variável `items` .
```javascript
// o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return (<li>{ item }</li>);
});
```

2. renderizar a lista que acabamos de criar! 
Para isso, dentro do escopo do `return` , devemos fazer o uso das chaves `{ }` e utilizar, dentro dela, a constante de elementos criada anteriormente. É por meio das chaves que o React irá diferenciar o que é código a ser executado e o que deve ser apenas impresso para leitura:
```javascript
import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;
```

Agora, só nos resta renderizar a lista que acabamos de criar! Para isso, dentro do escopo do return , devemos fazer o uso das chaves { } e utilizar, dentro dela, a constante de elementos criada anteriormente. É por meio das chaves que o React irá diferenciar o que é código a ser executado e o que deve ser apenas impresso para leitura:
```javascript
import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;
```

Pronto! Agora já podemos a renderizar múltiplos componentes de forma dinâmica, sem quaisquer problemas, certo? Quase! Ao executar o código acima, receberemos, pelo `console` , um alerta de que uma key deve ser definida para cada item renderizado. Essas **keys** são importantes para o **React** indentificar, com precisão, quais itens foram adicionados, removidos ou alterados.

Então, como atribuímos e quais devem ser os valores dessas **keys** ? O melhor valor para uma key é um que seja único para cada item da lista, como, por exemplo, um ID . No entanto, nem sempre dispomos de um `ID` estável em mãos, tal qual o caso do nosso código acima. Para solucionarmos esse problema, utilizamos o índice gerado no segundo parâmetro da nossa `HOF` . E, para atribuirmos a key , adicionamos na `<li>` um atributo `key` com o valor escolhido:
```javascript
const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));
```

`Não é recomendado o uso de índices como keys em listas` que possibilitam a alteração na ordem dos itens , pois pode impactar negativamente o desempenho da aplicação ou gerar problemas relacionados ao estado do componente.


## exercício de fixação:
Crie os componentes `Image` , `UserProfile` e `App` no diretório `src` do projeto `fixation-exercises-10-2 `, e vamos olhar especificamente para o arquivo `App.js` :
```javascript
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;
```

O componente `App` possui dois componentes `UserProfile` como filho. Que tal gerar esses componentes filhos dinamicamente? Isso poderia ser feito da seguinte forma:
```javascript
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;
```


