# FUNÇÕES
Função é um conjunto de instruções que executa uma tarefa ou calcula um valor.

**Cada função deve ter apenas um propósito.** Não é recomendável que uma função tenha muitas finalidades como dizer "oi", multiplicar dois números e dizer qual é a estação do ano. É melhor você dividir isso tudo em 3 funções diferentes, pois além de diminuir a complexidade, fica melhor para entender e usá-las em outras partes do código.

## Estrutura
```javascript
function <nome da função>(<parametro/valores>) {
    <execução>
    return 
}
<nome da função>()
```

Aplicando em um carro
```javascript
let statusCarro = 'Desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar(statusCarro) {
    if (statusCarro == 'Desligado') {
        statusCarro = 'ligado';
    } else {
        statusCarro = 'Desligado';
    }

    return statusCarro
}


function acelerar(incremento) {
    aceleracao += incremento
    return 'Acelerando a ' + acelerar + 'km/h'
}

function frear(decremento) {
    aceleracao -= decremento;
    return 'Desacelerando para ' + aceleracao + 'km/h'
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante += angiloRotacao;
    return rotacaoDoVolante + '°';
}
```

```javascript
ligarDesligar()
// Ligado

acelerar(20)
// Acelerando a 20km/h

girarVolante(-45)
// -45°

frear(10)
// Desacelerando para 10km/h

girarVolante(0)
// 0

frear(10)
// Desaceleranod para 0km/h

ligarDesligar()
// Desligado
```

### Outros exemplos
Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.
```javascript
// sem função
let nome = 'João';
console.log('Bom dia ' + nome); // Bom dia joão


// com função
function bomDia(nome) {
    console.log('Bom dia, ' + nome);
}
console.log(bomDia('André')); // Bom dia, André
console.log(bomDia('Dani')); // Bom dia, Dani
```
Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável `nome` e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.


Veja dois exemplos de funções sem parâmetros:
```javascript
function bomDia() {
    return 'Bom dia!';
}
console.log(bomDia()); // Bom dia
```

```javascript
let status = 'deslogado';

function logarDeslogar() {
    if (status == 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
}

console.log(status) // deslogado

logarDeslogar()
console.log(status) // logado

logarDeslogar()
console.log(status) // deslogado
```


E agora exemplos de funções usando parâmetros:
```javascript
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2)); // 7
```

```javascript
function maiorNum(num1, num2) {
    if (num1 > num2) {
        return num1 + ' é maior que ' + num2;
    } else if (num1 < num2) {
        return num2 + ' é maior que '+ num1;
    } else {
        return 'Os números são iguais'
    }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais
```

