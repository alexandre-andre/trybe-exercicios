# Testes Assíncronos com Callbacks

Nem sempre a operação assíncrona será executada com sucesso. Por esse motivo, é importante manter uma boa cobertura de testes a fim de `prevenir possíveis erros`. Para isso, você irá utilizar o `Jest`.

Ao realizar testes assíncronos com callbacks, é necessário ter cuidado com falso-positivo (quando o teste deveria falhar mas acaba passando). *Isso acontece pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona*. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.

### falso-positivo
```javascript
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
```
Copie o código acima em um arquivo `.test.js` e execute o comando `npm test` na sua máquina para ver! Como o `setTimeout` é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase *"Deveria falhar!"* sequer aparece no console.

Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada `done` , que precisa ser chamada após os testes assíncronos.

```javascript
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});
```
Apesar de parecer correto, irá falhar com uma mensagem de timeout.

O miotivo é que quando um asserção falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluso é interrompido antes que a instrução `done()` seja executada.

Para resolver este problema podemos colocar um bloco `try/catch` em volta da nossa asserção. Enquanto o `try` tenta executar a função no seu escopo com sucesso, o `catch` "captura" o erro, chamando a `callback done` :
```javascript
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});
```
Como não foi passado nenhuma ação a ser realizada quando acontece um erro e encerramos o teste com `done()` sem lançar nenhuma erro, será gerado um falso positivo.


### Agora funcionando
Para resolver, podemos passar o parâmetro de `erro para o catch`. Dessa forma, caso o `try` não consiga executar o código dentro dele, cairá no `catch` , que vai pegar esse `erro` e vai `encerrar` nosso teste lançando um `erro`.
```javascript
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // DONE RECEBEU O ERROR
    }
  }, 500);
});
```
Agora sim o teste falhou!
A calback foi testada com sucesso.


### Teste 2
```javascript
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
```


[mock]()

NUNCA BLOQUEAR O EVENT LOOP DO JAVASCRIPT
[eventLoop](https://nodejs.org/pt-br/docs/guides/dont-block-the-event-loop/)