# Objetos
```javascript
let car = 'KIA'
```

Um objeto em javascript é uma entidade independente, com propriedades e tipos. Uma possibilidade é a associação entre uma chave e um valor, são essas as características do objeto.

Pense em um objeto da vida real, como o carro do exemplo acima. Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript.

Se o objeto está dentro de um `array` , ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num `array` de `strings` , por exemplo. Após pegar o objeto que você deseja, para acessar suas propriedades basta usar a **notação de colchetes** ou a **notação de ponto** . O mesmo vale para acessar objetos dentro de objetos.

As chaves de um objeto são armazenadas como `strings` e, para conseguir acessar propriedades nomeadas com **números**, como 0 , por exemplo, só é possível usando a **notação de colchetes** . Se você usar a **notação de ponto** , ocorre um `erro`. Ao usar a **notação de colchetes** também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

```javascript
let diasDaSemana = {
: 'domingo',
: 'segunda',
: 'terça',
: 'quarta',
: 'quinta',
: 'sexta',
: 'sábado',
};

diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo
```


```javascript
let car = {
    type: 'KIA',
    model: 'Sportage',
    color: 'Black'
}

// Sem objeto
let name = 'Milton'
let lastName = 'Nascimento'
let nickname = 'Bituca'
let age = 77
let bestAlbuns = ['Travessia', 'Clube da EEsquina', 'Minas']

// Objeto
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da EEsquina', 'Minas']
}

console.log(singer.name) // Milton

console.log(singer.age) // 77

console.log(singer['name']) // Milton

console.log(singer['age']) // 77

console.table(singer) // exibe objeto em forma de tabela
```


## Acessar propriedades de um _objeto_
Quando acessar a propriedade de um objeto com `[]` e com `.` ?
- `.` - acessa o valor de uma propriedade de um objeto
- `[]` - muito usado quadno queremos criar propriedades novas de forma dinâmica ao objeto
```javascript
singer['fullName'] = singer.name + singer.lastName
console.log(singer['fullName']) // Milton Nascimento

console.table(singer) // exibe o objeto em forma de tabela
```


## Objeto em objeto
Como acessar um objeto dentro do outro ?

Simples, `<objeto>.<objeto>.<propriedade>`
```javascript
// Objeto
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da EEsquina', 'Minas']
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
}

singer['fullName'] = singer.name + singer.lastName;

console.log(`O cantor ${singer.fullName} nasceu no estado do ${singer.bornInfo.state})
// O cantor Milton Nascimento nasceu no estado do Rio de Janeiro
```


Caso a propriedade de um objeto seja dada com a formatação kebab-case o acesso será diferente
```javascript
let singer = {
    name: 'Milton',
    'last-name': 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da EEsquina', 'Minas']
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
}

console.log(`O cantor ${singer.['last-name']} nasceu no estado do ${singer.bornInfo.state}`)
// O cantor Nascimento nasceu no estado do Rio de Janeiro
```


#### Outros exemplos
Neste exemplo, a chave `banco` do objeto `conta` , guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.
```javascript
let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4
```


O objeto deste exemplo possui a chave `infoPessoal` que possui outras 3 chaves, uma delas sendo `endereco` , que é outro objeto! Ou seja, o objeto `usuario` possui outros dois dentro dele.
```javascript
let usuario = {
    id: 99,
    email: 'punisher@email.com',
    infoPessoal: {
        nome: 'Frank',
        sobrenome: 'Castle',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque'
        },
    },
};

console.log(usuario['íd']) // 99
console.log(usuario.email) // punisher@email.com
console.log(usuario.infoPessoal.endereco.rua) //Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']) // Nova Iorque
```

### Agora, e se o nosso `objeto` está `dentro de um array`? Como acessamos as propriedades do objeto? 
Os objetos desejados serão acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.
Veja este exemplo:
```javascript
let moradores = [
    {
        nome: 'John',
        sobrenome: 'Wick',
        andar: 10,
        apartamento: 105,
    },
    {
        nome: 'Forrest'
        sobrenome: 'Gump'
        andar: 3,
        apartamento: 301,
    },
    {
        nome: 'Lula'
        sobrenome: 'Molusco'
        andar: 4,
        apartamento: 307,
    },
    {
        nome: 'Bob'
        sobrenome: 'Esponja'
        andar: 24,
        apartamento: 108,
    },
]
```

let primeiroMorador = moradores[0];
console.log(primeiroMorador) // {nome: 'John', sobrenome: 'Wick', andar: 10, apartamento: 105}
console.log(primeiroMorador['andar']) // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // {nome: 'Bob', sobrenome: 'Esponja', andar: 24, apartamento: 108}
console.log(ultimoMorador.nome) // Bob










