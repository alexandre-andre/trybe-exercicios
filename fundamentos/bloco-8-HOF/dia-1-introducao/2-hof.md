# Higher Order Functions
As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
```javascript
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
```

Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.
> First-Class Functions é o nome do conceito que define a forma que a linguagem (JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.