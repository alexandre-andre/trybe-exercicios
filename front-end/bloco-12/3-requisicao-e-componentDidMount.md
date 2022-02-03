# Requisições e componentDidMount

Para entender melhor, usando React, vamos consumir uma API de Rick and Morty, cujo o endpoint é https://rickandmortyapi.com/api/character , e exibir na tela os nomes dos personagens e suas respectivas fotos.

Passo 1: criar um App React com o já familiar `npx create-react-app` my-interdimensional-app e instalar as `dependências`:
```
npx create-react-app my-interdimensional-app
cd my-interdimensional-app
npm install
```

Caso você queira ver as coisas acontecendo com um pouco mais de estilo, literalmente, é só substituir o conteúdo de App.css por:
```css
// App.css
.App {
  background-size: cover;
  background: linear-gradient(-45deg,#0b0c0c,  #125269, #125269, #0b0c0c);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container {
  background-color: rgb(212, 195, 195);
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.418);
  color: black;
  display: flex;
  flex-direction: column;
  height: 20%;
  margin: 5px;
  width: 300px;
}

.body {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
}
```

Depois de transformar o componente `App.js` em um componente de `classe`, já podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará. Também podemos fazer, em seguida, a requisição e colocar um título para ser exibido na página. Veja abaixo:
```javascript
// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
      </div>
    );
  }
}

export default App;
```

Note que a chave `results` é a que contém as informações que queremos, por isso é ela que estamos setando no nosso estado. Verificar se você está inserindo a chave certa é essencial e por isso você não deve deixar de ler a documentação da API que irá consumir para ver como os seus dados são retornados!

Depois disso, com nosso estado já recebendo o resultado da API , poderiamos fazer uma desestruturação no estado e fazer apenas um `.map` para iterar o array e renderizá-lo na tela. Outro detalhe importante aqui é o uso da `key` , que deve ser um identificador único, como se fosse um `ID` para cada item da lista iterada. Lembre-se: a função das `keys` é ajudar o React a **identificar quais itens sofreram alterações** para que o React `NAO` precise renderizar novamente toda a lista novamente e sim apenas se preocupar com a parte modificada.

Agora, é só criar tags para encapsular as informações que queremos, ou seja, o nome e a imagem dos personagens.
```javascript
// App.js
// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//  constructor(props){
//      super(props);
//      this.state = {
//        characters: [],
//      };
//   }

//  fetchCharacters = () => {
//    fetch('https://rickandmortyapi.com/api/character')
//    .then(response => response.json())
//    .then(data => {
//      this.setState({characters: data.results})
//    })
//  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
```

Você notará que continua aparecendo apenas o título que tínhamos colocado anteriormente na página. Se você der um console.log em characters irá notar que o array continua vazio. Aquele velho problema do código ser lido antes da API retornar ataca novamente, mas temas, porque com o `componentDidMount` não há problema!

Todos os nossos problemas serão resolvidos apenas chamando a função **fetchCharacters** dentro do `componentDidMount` , mas, caso prefira, você pode fazer o **fetch** diretamente dentro dele. Irá funcionar das duas formas.
```javascript
//  Primeira maneira:
fetchCharacters() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}

componentDidMount() {
  this.fetchCharacters();
}


//  Segunda maneira:
componentDidMount() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    this.setState({characters: data.results})
  })
}
```

Ao final, teremos uma aplicação funcionando e um código assim ou bem parecido com isso:
```javascript
// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
      }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
```