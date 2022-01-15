# async/await
Para aprender a realizar testes utilizando o async/await , realizamos uma requisição a API e testamos o seu retorno em caso de sucesso e de falha.

## E se a API estiver fora do ar ??
**Nunca** devemos testar uma requisição real para a API!

Imagine que você está utilizando uma API da previsão do tempo, no momento da criação do seu teste a previsão era de sol. No dia seguinte você vai dar continuidade para os testes, mas agora a API está retornando que a previsão é de chuva, ou seja, o teste passava enquanto a previsão era sol, quando passou a ser chuva, seu teste falhou. Além da falta de controle sobre o retorno de uma requisição, você também pode ter problemas como:
- A URL da API estar incorreta.
- Uma falha na conexão com a internet.
- Uma instabilidade no servidor que gerencia a API.

## Se realizar testes se não podemos testar  com uma API real ?
Como o Jest nos oferece diversas ferramentas para testarmos nosso código, uma dessas ferramentas é a simulação na execução da função, podendo definir o retorno que ela terá.

Dessa forma, conseguimos controlar diversos cenários, como sucesso e falha.

[repositorio de testes](https://github.com/betrybe/9.3-content-async-test)

A API que será usada é a [Superhero API](https://www.superheroapi.com/) , que possui como parâmetro um token , que funciona como uma senha para possibilitar o uso da API e um id ( `https://www.superheroapi.com/api.php/TOKEN/ID `). O token já está configurado, portanto, a única informação que a ser passada para a função `fetchCharacter` é o `id` .

Ao abrir o arquivo `fetchCharacter.js` , você vai perceber que ele possui duas funções: uma com `async/await` e outra com `.then()` , que está comentada. O motivo para isso é apenas para você ter nitidez que pode utilizar e escolher qualquer uma das duas formas.

Você buscará um super herói por meio do id que é passado na URL, e o retorno será um objeto contendo o super herói correspondente e os seus atributos.

A url base a ser utilizada é `https://www.superheroapi.com/api.php/4192484924171229/720` , que irá retornar uma personagem.

#
Nosso primeiro passo é estruturar o bloco de teste com `async/await` . Cada bloco aceita dois parâmetros, o primeiro é a descrição do que está sendo testado e o segundo é uma função anônima, ou seja, sem nome. A estrutura inicial fica assim:
```javascript
  it('descrição', () => {});
```

#
Para testar código assíncrono, é preciso fazer uso do `async/await`. Para isso, adicione o async antes da função anônima e o await no momento em que chamar a requisição. Veja:
```javascript
  it('descrição', async () => {
    await requisicao();
  });
```

#
Para organizar melhor seus testes, você pode utilizar o `describe` , que serve justamente para descrever, de forma geral, o que seu arquivo está fazendo:
```javascript
describe('descrição geral', () => {
  it('descrição', async() => {
    await requisicao();
  });
})
```

#
Agora á temos a estrutura!
O primeiro teste será para verificar qual o nome da personagem. Mas, para isso, é preciso saber como é a estrutura de resposta da API utilizando um console.log() :
Utilize o id `720` .
```javascript
it('descrição', async() => {
  const character = await fetchCharacter('720');
});
```
A resposta da API é um objeto, certo? E, se você precisar testar o nome da personagem, pode acessar a chave name desse objeto, ou seja character.name .
**name: 'Wonder Woman'** está presente no objeto



```javascript
it('descrição', async() => {
  const character = await fetchCharacter('720');
  console.log(character.name); // imprime apenas o valor dessa propriedade
});
```

# Agora o teste
```javascript
it('descrição', async() => {
  const character = await fetchCharacter('720');
  expect(chaacter.name).toBe('Wonder Woman');****
});
```
Teste ok!
Ex de erro: `expect(chaacter.name).toBe('Spider Man');`
Se esperarmos um resultado diferente dará um erro, pq nesse id o personagem não é o Spider Man.


# E se NENHUM parâmetro for passado ?
```javascript
it('descrição', async() => {
  const failRequest = await fetchCharacter();
  console.log(failRequest);
});
```
Aparecerá um erro no terminal, e o que importa nele é `Error: You must provide an url`

>Esse erro é lançado pela requisição e, para testar esse cenário, é necessário reproduzir esse objeto de erro criado quando a promise foi rejeitada.
```javascript
it('Verifica se retorna erro ao executar a função sem parâmetro', async() => {
  const failRequest = await fetchRequest();
  expect(failRequest).toEqual(new Error('You must provide an url'));
});
```


# E se for passado um parâmetro que não existe ?
cada API trata erros de forma diferente. Por isso a importancia do console.log().
```javascript
it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
  const response = await fetchCharacter('parametro qualquer');
  console.log(response); // Invalid id
});
```
Ou seja, quando é passado um id inválido como parâmetro da função, o retorno é Invalid id .

## Vamos ao teste
```javascript
it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
  const response = await fetchCharacter('parametro qualquer');
  expect(response).toBe('Invalid Id');
  console.log(response); // Invalid id
});
```
Neste caso NÃO é um falso positivo, pois o esperado é o mesmo impresso pelo console.


Foram testados 3 casos:
1. quando nosso id está correto
2. quando não passamos id algum
3. quando id é incorreto.


## Agora, para finalizar, é necessário testar a chamada da função e se a url recebida é a correta.
Para isso, é preciso executar a função `fetchCharacter` , mas nesse caso, é necessário 'esperar' que a função fetch seja chamada 4 vezes e também se é executada com o parâmetro correto:
```javascript
it('Verifica se fetch é chamada com o endpoint correto', async() => {
  const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
  await fetchCharacter('720');
  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenCalledWith(url);
});
```

A função `fetchCharacter` é **responsável por receber o id e passar** para a função `fetch` .

É a `fetch` que executa a `requisição a partir da url` e **só então a fetchCharacter retorna o resultado**.

Os 3 primeiros testes conferiram o resultado da requisição, no último teste, foi verificado, de fato, a implementação da função que executa a requisição, ou seja, testar se fetch foi chamada 4 vezes (executamos a função uma vez para cada teste realizado) e verificar se, no último teste, foi chamada com a url correta para buscar os dados na API.

Note que, ao utilizar o matcher toHaveBeenCalledTimes , ele verificou quantas vezes a função fetch foi executada dentro de **todo** o describe , ou seja, vazou do escopo `it`. Para evitar esse tipo de problema, utilizamos o `beforeEach` ou o `afterEach`.



## Outro Exemplo de teste de função assíncrona
```javascript
const { findAddressFromCEP, getLogs, cleanLogs } = require('./script');

describe('Ao chamar a função findAddressFromCEP', () => {
  it('retornar endereço completo quando o cep for 30310030', async() => {
    await expect(findAddressFromCEP('30310030')).resolves.toBe('Rua Andaluzita, Carmo, Belo Horizonte - MG');
  });

  it('retornar uma exceção quando o cep for vazio', async() => {
    await expect(findAddressFromCEP('')).rejects.toThrow(new Error('CEP não encontrado!'));
  });
});
```
