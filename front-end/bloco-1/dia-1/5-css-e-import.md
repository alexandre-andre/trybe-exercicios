# CSS e Import

Assim como no HTML você devemos criar um arquivo para manter todo o CSS e então deverá importá-lo onde desejar utiliza-lo e colocar as classes e ids criados nos elementos da página. Veja o exemplo abaixo:
```css
/* App.css */
.App {
  background-color: #282c34;
  text-align: center;
}
```

```javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;
```
Se quiser ver um exemplo maior da importação e utilização do CSS retorne ao app testando-meu-computador que você criou na seção de instalação, ao observar a estrutura você verá que não é nada muito diferente do que você já estava fazendo. Caso se queria se aprofundar mais na utilização do CSS no React e também no import utilizado no arquivo App.js vá até a seção de Recursos adicionais e dê uma olhada nas documentações sobre esses tópicos.