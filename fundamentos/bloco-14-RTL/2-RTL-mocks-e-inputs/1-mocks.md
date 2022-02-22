# Mocks
O objetivo de mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes. Pense em uma requisição de API que constantemente muda seu retorno. Como ter certeza do seu retorno e, principalmente, de que seu teste não está caindo em um **falso-positivo** ?

Vejamos um caso em que simular o comportamento da função seria necessário para o teste:
```javascript
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});
```
Mockar o comportamento da função `retornaNumeroAleatorio()` para garantir que ela está, nesse teste, retornando um número par, seria a solução para esse impasse!


## Dentre as principais formas de se mockar algo somente utilizando Jest, destacam-se três:

##  `jest.fn()`; 
  - transforma a função original em uma simulação, trava a original no comportamento definido.
##  `jest.mock()`;
  - mocka todo um pacote de dependencias/módulo de uma vez.
##  `jest.spyOn()`; 
  - simula um resultado enquanto a funcao original continua rodando, não trava o teste.
