# Trabalhando com mock e funções originais
Ter controle sobre o comportamento de uma função e usar `matchers` como o `toHaveBeenCalled` são ferramentas essenciais para quem desenvolve.

Existem casos nos quais é útil verificar os efeitos colaterais de uma função , como em uma alteração de um elemento na página, por exemplo.

Mas como fazer isso se, ao mockar uma função, ela perde sua implementação original? E ao mesmo tempo, sem mockar , não podemos testá-la com o matcher?

O `jest.spyOn()` é capaz de resolver esse problema.
### `jest.spyOn()`
  - "*espia*" a chamada da *função simulada*, enquanto deixa a implementação *original ativa*.

```javascript
const math = require('./math');

test("#somar", () => {
  // jest.spyOn() vai simular em match a funcao somar sem conprometer a funcao original em atividade
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2); // funcao chamada com os valores 1 e 2
  expect(mockSomar).toHaveBeenCalled(); // deve ser chamado
  expect(mockSomar).toHaveBeenCalledTimes(1); // qtd d vezes chamado
  expect(mockSomar).toHaveBeenCalledWith(1, 2); // deve ser chamado com os valores 1 e 2
  expect(mockSomar(1, 2)).resolves.toBe(3); // com os valores 1 e 2, resolve(executa) e o resultado deve ser 3
});
```

Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.

## Há também como limpar, resetar ou restaurar mocks . Existem três métodos capazes de fazer isso:
### `mock.mockClear()`
  - Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects;
### `mock.mockReset()`
  - Faz o que o mockClear() faz;
  - Remove qualquer retorno estipulado ou implementação;
  - Útil quando você deseja resetar uma simulação para seu estado inicial;
### `mock.mockRestore()`
  - Faz tudo que mockReset() faz;
  - Restaura a implementação original;
  - Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;


Imagine que você queira testar a função mockada somar implementando para ela um método de subtração, mas que depois você queira redefinir as implementações do mock .
```javascript
const math = require('./math'); // chamada da pasta

test("#somar", () => {
  // implementação original math.somar(1, 2) executa e deve retornar(3)
  expect(math.somar(1, 2)).resolves.toBe(3);

  // cria a funcao mock e substitui a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1); // chamada da funcao
  expect(math.somar).toHaveBeenCalledTimes(1); // deve ser chamado 1 vez
  expect(math.somar(5, 1)).toBe(4); // math.somar(5, 1) deve ser 4 - lembrando q agora eh uma subtracao 
  expect(math.somar).toHaveBeenCalledTimes(2); // deve ser chamado 2 vezes
  expect(math.somar).toHaveBeenLastCalledWith(5, 1); // match.somar deve ser chamado com os valores (5, 1)

  // resetando o mock - remove qualquer retorno estipulado ou implementação e reseta a simulacao para o seu estado inicial
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined); // como usamos fest.fn() não é possivel restaurar as implementações originais da função, soh eh possivel com jest.spyOn()
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});
```

No exemplo acima, por termos usado o `jest.fn(),`
### `jest.fn(),`
  - não restaura as implementações originais da função, pois suas funcionalidades não permitem.
### `jest.spyOn()`
  - É a única ferramenta que nos permite transitar entre simulação e comportamento original.

```javascript
const math = require('./math');

test("#somar", () => {
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});
```
