# Escrevendo testes
Tudo que é necessário é utilizar a função `test` . A função `it` é um _alias_ para test. Essas funções, por serem globais, ficam automaticamente disponíveis nos arquivos uma vez que o Jest é instalado.

A função `test` espera 3 argumentos.
1. Nome do teste ==> Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados.
2. Função contento suas expectativas ==> Dentro dessa função serão feitos os testes propriamente ditos
3. Opcional, timeout ==> Indica quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo. 
```javascript
// sum.js
const sum = (a, b) => a + b;

test('sum two values', () => {
    expect(sum(2, 3)).toEqual(5);
});
```

Jest procura por arquivos com as extensões `.js` , `.jsx` , `.ts` e `.tsx` dentro de uma pasta com o nome `__tests__` , ou arquivos com o sufixo `.test` ou `.spec`. É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo `.test.js`:
```javascript
// sum.js
const sum = (a, b) => a + b;

moduce.exports = sum


// sum.test.js
const sum = require('./sum');

test('sum two values', () => {
    expect(sum(2, 3)).toBe(5);
});
```

A linha `**module.exports = sum**` exporta a função `sum` no primeiro (sum.js) arquivo para que possa ser utilizada em outros módulos. 
No segundo arquivo (sum.test.js), utilizamos `**require('./sum)**` para importar a função `sum`.
Veja a seção de recursos adicionais para entender mais sobre como importar e exportar módulos em Node.js.


## Exemplo de funcionamento
Arquivo de script: _loginValidation.js_
```javascript
// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
    return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

const user = {
    userName: 'Joana',
    password: 123456,
};

// usando destructuring passando a propriedade do objeto como argumento
const verifyCredentials = ({ userName, password }) => {
    if (userName === 'Joana' && password === 123456) {
        return greetingMessage(userName);
    } else {
        return loginErrorMessage(userName);
    }
};

// valida propriedades como propriedades do objeto user
const { userName, password } = user
module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }
```

Arquivo de teste: _loginValidation.test.js_
```javascript
// loginValidation.test.js
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
} = require('./loginValidation.js');

describe('a função verifyCredentials()', () => {
    it('verifyCredentials() calls the correct function depending on the user and password input', () => {
        const user = {
            userName: 'Bob',
            password: 123456,
        };

        const { userName, password } = user;
        expect(veryfyCredentials({ userName, passwor })).toBe(
            'Hello, Joana! Que bom ter você de volta'
        );
    });

    it('greetingMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
        expect(greetingMessage('Lucas')).toBe(
            'Hello, Lucas! Que bom ter você de volta'
        );
    });

    it('loginErrorMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
        expect(loginErrorMessage('Bob')).toBe(
            'Pessoa usuária 'Bob' não encontrada, tente novamente!'
        );
    });
});
```


Ao rodar `npm test` no terminal será retorna o resultado do teste apresentando 1 falha e 2 ok, sem quebrar, devido ao framework.
Outro ponto positivo da utilização do Jest para fazer nossos testes é que ele traz uma mensagem contendo um diff, ou seja, o que era esperado de ocorrer no teste e o que de fato aconteceu. Isso nos ajuda a entender mais rapidamente onde está o erro. Neste exemplo o teste esperava receber como valor um objeto contendo uma pessoa usuária com o nome "Joana", mas ao invés disso recebeu "Bob".



