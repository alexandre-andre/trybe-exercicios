# Try/ Catch
Lançar erros com throw e capturá-los com o bloco try/catch ;
```javascript
const sum = (n1, n2) => n1 + n2;
sum(2, 3); // 5
```

Se o usuário cometesse o erro de ao invés de lançar dois numbers, lançasse um number e uma string ?
```javascript
const sum = (n1, n2) => n1 + n2;
sum(2, '3') // 23
```
Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem dinâmica . Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.

Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.
```javascript
const sum = (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !=== 'number') {
        return 'valores nao numericos'
    }
    return n1 + n2
}
sum(2, '3'); // 'valores nao numericos'
```

## Forma Correta
Aparentemente está tudo funcionando como deveria, mas essa ainda não é a melhor forma de se tratar um erro em JavaScript.
Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números. O correto é indicar de alguma forma que ocorreu um erro.
```javascript
cosnt sum = (n1, n2) => {
    if (typeof n1 !== 'number'|| typeof n1 !== 'number') {
        throw new Error('valores nao numericos');
    }
    return n1 + n2;
};
sum(2, '3'); // 'valores nao numericos'
```
Agora a saída será uma mensagem de erro no console.


## Detalhando
- Palavra reservada *throw* => lança uma exceção criada. No caso foi definido que não seria aceito um parâmetro diferente do tipo number, então foi criado o erro.
  - [documentação throw](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw)
- Operador *new* => cria um objeto personalizado/nativo do javascript.
  - [documentação new](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new)
- Palavra *Error* => objeto nativo do javascript que representa um erro. Quando o operador **new** é chamado é criado uma cópia desse objeto, que será lançado como uma exceção no código.
  - [documentação Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)


## try/catch
O código de exceção foi lançado mas ainda pode ser melhorado. Podemos pegar esse erro e tratá-lo com o `try/catch`. Enquanto o `try` tenta executar o código com sucesso, o `catch` é chamado caso ocorra um erro.
```javascript
const verifyNum = (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('valores nao numericos');
    }
}

const sum = (n1, n2) => {
    try {
        verifyNum(n1, n2);
        return n1 + n2;
    } catch (error) {
        throw error.message;
    }
};
sum(2, '3')
```
Agora sim! 
O bloco `try` tenta fazer a soma dos valores, mas antes ele chama a função `verifyNum`, que verifica os valores passados, se estiver tudo certo, executa o try, senão, entra no bloco `catch` e retorna a chave `error.message`, uma propriedade do objeto nativo `Error` que contém a mensagem de erro criada.


### Documentação
-[try/catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- [documentação new](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new)
- [documentação throw](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw)
- [documentação Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)