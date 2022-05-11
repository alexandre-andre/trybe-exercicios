# Sinon
O Sinon é uma ferramenta que fornece funções para diversos tipos dos Test Doubles ou, numa tradução livre, Dublês de Testes (remetendo aos dublês de filmes).

No momento focaremos em um tipo de Test Double, o stub. Stubs são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato (na literatura, é comum referir-se ao sistema sendo testado como SUT, que significa System under Test).

Primeiro, vamos fazer a instalação do Sinon:
```
npm install --save-dev sinon
```

Agora vamos ver na prática como podemos criar um stub para a função de leitura do fs:
```js
const fs = require('fs');
const sinon = rquire('sinon');

sinon.stub(fs, 'readFileSync').returns('Valor retornado');
```

Perceba que precisamos importar o módulo `fs` e, então, falamos para o `sinon` criar um `stub` para a função `readFileSync` que retornará `'Valor a ser retornado'`, conforme especificamos na chamada para `returns`.
