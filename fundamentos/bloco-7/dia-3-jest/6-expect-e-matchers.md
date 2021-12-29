# Expect e matchers

A função `expect` é utilizada para dar acesso a um conjunto de métodos chamados **matchers**. Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes, inclusive no **Jest**. Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos. O `expect` recebe o valor a ser testado e retorna um objeto representando uma expectation . Sobre esse objeto pode-se chamar os matchers que __Jest__ fornece.

### Documentação
[matchers](9https://jestjs.io/docs/expect)


## Principais matchers

### `toBe`
Testa igualdade restrita entre o valor passado para o `expect` e seu argumento. Isso signfica que um teste com o expectation abaixo falharia
```javascript
expect(5).toBe('5')
```

### `toEqual`
`toEqual` !== `toBe`, precisamos entender que no JavaScript existem duas formas de atribuir valores. 
A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função. Essas formas de atribuição são conhecidas por **valor** e **referência**.
É importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).
> **Nos tipos primitivos a atribuição ocorre pelo `valor`, ou seja, um cópia do original, pois eles são `imutáveis`**. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:
```javascript
let name = 'Pedro';
let firstName = name;

name = 'Carol';
console.log(name); // 'Carol'
console.log(firstName); // 'Pedro'
```


> Por outro lado, os `objetos` tem atribuição por `referência` , ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são `mutáveis`, por tanto podemos considerar que é uma forma de criar um apelido ( alias ) para o original, ou seja, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:
```javascript
let myName = { name: 'Pedro' };
let identity =  myName;

myName.name = 'Carol';

console.log(myName.name); // 'Carol'
console.log(identity.name); // 'Carol'
```

> Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript . Para testar **igualdade de objetos e arrays**, é preciso usar o matcher **toEqual** , que acessa cada elemento do objeto ou array
```javascript
test('array and object equality', () => {
    const arr = [1,2,3]
    const obj = { a: 1, b: 2, c: 3 };

    expect(arr).toBe([1,2,3]) // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3 }) // fails
    expect(arr).toEqual([1,2,3]) // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3 }) // OK
});
```

### Valores booleanos
`null` , `undefined` e `false` são valores `falsy` . Isso significa que são tratados como `false` sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. **Jest** fornece matchers específicos para cada um. Leia mais sobre eles na [documentação do Jest](https://jestjs.io/docs/using-matchers#truthiness).


### Números
Há matchers para as principais formas de comparar números. Leia sobre esses [matchers](https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros)


### Strings
Para comparar string com expressões regulares, utilize o matcher [toMatch](https://jestjs.io/pt-BR/docs/expect#tomatchregexporstring) .


### Arrays
Podemos verificar se um array _contém_ um item em particular utilizando [toContain](https://jestjs.io/pt-BR/docs/expect#tocontainitem). Para verificar que um item possui uma estrutura mais complexa, utilize [toContainEqual](https://jestjs.io/pt-BR/docs/expect#tocontainequalitem). [toHaveLength](https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber) permite facilmente verificar o tamanho de um array ou de uma string.


### Objetos
É bastante comum testar se um objeto possui uma propriedade específica. O matcher [toHaveProperty](https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value) é ideal para esses casos.


### Exceções
[toThrow](https://jestjs.io/pt-BR/docs/expect#tothrowerror) testa se uma função lança um erro quando é executada. Para testar se uma função está retornando um erro, é importante estar atento à sintaxe do `.toThrow`:
```javascript
const multiplyByTwo = number => {
    if(!number) {
        throw new Error('number é indefinido')
    }
    return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
});

test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
});

test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});
```

Para testar se um erro é lan,ado, passamos para o `expect` uma função. Chamamos `multiplyByTwo` **DENTRO** da `arrow function`. 
Chamar a função dentro de `expect` fará com que o erro não seja capturado. Assim, asserção falhará, porque o erro acontecerá antes mesmo de `espect` ser executado e ter a chacnce de capturar o erro.
**Para testar a menssagem de erro**, como fizemos no terceiro teste do exemplo acima, **usamos** o matcher `toThrowError` e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: `new Error("number é indefinido")`.


### `not`
Permite testar o oposto de algo
```javascript
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
    expect(weekDays).toContain('Sunday');
});

test('Sunday is a week day', () => {
    expect(weekDays).not.toContain('Sunday');
});
```

