# Hooks customizados
Muitas vezes precisamos utilizar o mesmo trecho de código em dois locais diferentes. Com hooks não será diferente e, para ajudar nesta questão, podemos criar um hook customizado.

Para exemplificar, vamos criar uma função que possui dentro dela os hooks tradicionais. Dessa forma, o estado criado pela `useState` e a função `useEffect` serão reconhecidas e utilizadas no componente em que a hook customizada for chamada.

Vamos criar um template padrão de uma hook customizada básica, somente com `useState` :
```javascript
function useHookCustomizada(defaultValue) {
  const [variavel, setVariável] = useState(defaultValue);

  return variavel;
}
```

Agora podemos chamar a nossa função `useHookCustomizada` para definir o estado da `variavel` no escopo de diferentes componentes.

Vamos adicionar uma função `useEffect` ao exemplo anterior, modificando ele para receber um `fetch` qualquer:
```javascript
function useHookCustomizada(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('url')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      }); 
  }, []);

  return data;
}
```

Dessa forma, podemos utilizar novamente nossa hook customizada, e ela deverá setar o estado e realizar um `fetch` para preencher a nossa variável com dados de um API, por exemplo.

É importante destacar que é completamente possível adicionar mais parâmetros à função que constrói o nosso hook e usá-los no escopo dele. Além disso, como visto no último exemplo, podemos adicionar quantos `useEffect` e `useState` quisermos.

É definido por convenção que, ao se construir um hook customizado, se utilize a nomenclatura `use` antes do nome da função que vai manipular as hooks tradicionais.


## Conceitos
- O `useEffect` executa, quando disparado, a função que recebe como primeiro parâmetro;
- ### **Se não receber um segundo parâmetro**
  - O `useEffect` executa a função sempre que o componente é renderizado;
- ### **Se receber um array vazio como segundo parâmetro**
  - O `useEffect` executa a função somente quando o componente é montado;
- ### **Se receber um array populado**
  - O `useEffect`, sempre que algum desses valores é alterado, a função é executada (lembrando que os valores passados no array devem ser estados);
- ### **Se retornar uma função**
  - O `useEffect` retorna essa função quando o componente é desmontado e também antes da próxima renderização.


Podem ser utilizados mais de um `useEffect` por componente. Desta forma, pode-se observar tanto a primeira renderização, quanto diferentes parâmetros, em diferentes **hooks** `useEffect`. Isso permite termos um hook para cada parte da lógica, de forma a organizar o código da maneira como for melhor!


# Exemplo de aplicação
## Para fixar
Agora é hora de sentir o poder dos Hooks customizados na pele! Faça uma Todo list simples usando um hook customizado `useArray` para manipular os dados guardados na lista.
```javascript
// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import useArray from './hooks/userArray';

export default function App() {
  const [newInput, setNewInput] = useState('');
  const {addTodos, todos} = useArray();

  const handleInput = ({target}) => {
    setNewInput(target.value); // seta em newInput o valor do input alvo
  };

  const handleClick = () => {
    addTodos(newInput); // add o newInput
    setNewInput(''); // reseta o valor do campo
  };

  return (
    <>
      <label htmlFor='task-input'>
        Add a task:
        <input
          id='task-input'
          placeholder='task'
          name='newItem'
          value={ newInput }
          onChange={ handleInput }
        />
      </label>
      <button type='button' onClick={ () => handleClick() }>Add</button>
      <TodoList tasks={ todos }>
    </>
  );
}
```

```javascript
// src/TodoList.js
import React from 'react';
import { PropTypes } from 'prop-types';

export default function TodoList({ tasks }) {
  return (
    <div>
      <h1>To-do:</h1>
      <ul>
        { tasks.map((todo, index) => <li key={ index }>{ todo }</li>) }
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```


```javascript
// src/hooks/useArray.js
import { useState } from 'react';

export default function useArray() {
  const [todos, setTodos] = useState([]);

  const addTodos = (userInput) => {
    setTodos(todos.concat(userInput));
  };

  return { todos, addTodos };
}
```
