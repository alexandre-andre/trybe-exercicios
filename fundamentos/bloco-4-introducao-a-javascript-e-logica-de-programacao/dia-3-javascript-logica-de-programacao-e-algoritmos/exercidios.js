/*
  1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


n = 5
*****
*****
*****
*****
*****

*/
console.log('exercicio 1')
let n = 5
let line = ""
let symbol = "*"
// como console.log se repete, vamos jogá-lo para dentro de um FOR que se repete 5 vezes

// esse for vai imprimir colunas
// como precisamos de uma string que tenha n "*" usamos um FOR que dada uma string vazia inicialmente acrescentada de 1 "*" enquanto i < n
for ( let i = 0; i < n; i++ ) {
    line += symbol
}

// enquanto i for menor q n, será incrementado de 1 em 1 e vai imprimir na tela n vezes
// esse for vai construir n linhas
for ( let i = 0; i < n; i++ ){

  console.log(line)
}


// // opcao 2
// for ( let i = 0; i < n; i++ ) {
    
//     line = ""

//     for ( let i = 0; i < n; i++ ) {
//         line += symbol
//     }

//     console.log(line)
// }







/********
  2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


n = 5

*
**
***
****
*****

*/
console.log('exercicio 2')
n = 5
line = ""
symbol = "*"

// aqui vamos inserir um "*" a cada linha impressa, enquanto i < n será feito isso
for ( let i = 0; i < n; i++ ) {
    line += symbol;
    console.log(line);
}

// // opcao 2
// for ( let i = 0; i < n; i++ ) {

//     print = ""

//     for ( let i = 0; i < n; i++ ) {
//         console.log(print += symbol);
//     }

//     break;

// }





/**
  3- Agora inverta o lado do triângulo. Por exemplo:
/*

n = 5

    *
   **
  ***
 ****
*****

*/
console.log('exercicio 3')
n = 5
line = ""
symbol = "*"
// variavel que vai controlar a coluna onde os * serao impressos em cada linha
let inputPosition = n


for ( let i = 0; i < n; i ++ ) {
    // vai controlar em qual coluna estamos em tal linha
    for ( let c = 0; c <= n; c ++ ) {
        // agora faremos a verificacao se ja estamos na posicao ou na coluna em que começaremos a imprimir os * naquela linha
        if ( c < inputPosition) { 
            // se a coluna atual "c" for menor que a coluna onde começará a ser impresso os * "inputPosition" vamos acrescentar um espaço em branco a variável que será impressa ao final de cada repetição
            line += " "
        } else {
            // senao, acrescenta um *
            line += symbol
        }
        
    }
    // apos esse laço vamos imprimir essa variavel   
    console.log(line)
    // vamos zerar a variavel para que na proxima repetição seja montada com a qtd de * correta 
    line = ""
    // apos isso vamos diminuir o valor de inputPosition em 1, para que na proxima repetição os * sejam colocados uma posição antes em relação ao laço de repetição atual
    inputPosition -= 1
}





/**
 Exercício 4. Por fim, faça uma pirâmide com n asteriscos de base:
 
 n = 5

  *
 ***
*****

*/
console.log('exercicio 4')
n = 5
line = ""
symbol = "*"

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      line = line + symbol;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  controlRight += 1;
  controlLeft -= 1
};



/**
 Exercício 5 - Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

 */
console.log('exercicio 5')
n = 7;
middle = (n + 1) / 2;
controlLeft = middle;
controlRight = middle;
symbol = '*';

 for (let line = 1; line <= middle; line += 1) {
   let outputLine = '';
   for (let col = 1; col <= n; col += 1) {
     if (col == controlLeft || col == controlRight || line == middle) {
       outputLine += symbol;
     } else {
       outputLine += ' ';
     }
   }
   controlLeft -= 1;
   controlRight += 1;
   console.log(outputLine);
 }



 

 /**
    Exercício 6
    Faça um programa que diz se um número definido numa variável é primo ou não.
    Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
*/
console.log('exercicio 6')

let div = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) div += 1;
}

if (div === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

// opcao 2
function primo(numberToCheck) {
    let result = '';
    if ((numberToCheck % 1) == 0 && (numberToCheck % numberToCheck) == 0) {
        result = `O número ${numberToCheck} é primo`
    } else {
        result = `O número ${numberToCheck} não é primo`
    }
    return console.log(result)
}
primo(numberToCheck)

// AQUECENDO
console.log('AQUECENDO - aula ao vivo')
let acesso = true
let qtdPaes = 10
let sacola;

if (acesso === true) {
    for (let i = 0; i <= 10; i ++) {

        if(i == 0) {
            // vai pular o i = 0 e continuar execucao do codigo 
            continue
        }
        sacola = i
        console.log(`existe ${sacola} paes na sacola`)

        if(i == 7) {
            // para a execucao do codigo quando i = 7
            break;
        }

        // sacola = i
        // if(sacola > 0){

        //     console.log(`existe ${sacola} paes na sacola`)
        // }
    }

}else {
    console.log('Não possível acessar a página')
}




// EXEMPLO DE FOR DENTRO DE FOR
console.log('EXEMPLO DE FOR DENTRO DE FOR')

qtd = 10;
ingredientes = [ "queijo", "presunto", "maionese"];
sacola = [];

for(let i = 0; i < 10; i++){
    // console.log(`executou fora: ${i}`)


    let pao = []


    for(let i = 0; i < ingredientes.length; i++){
        // console.log(`executou dentro: ${i}`)
        pao.push(ingredientes[i])
    }

    sacola.push(pao)

}

console.log("sacola:", sacola)


// MUNIÇÃO PARA A DINÂMICA
// DOC https://www.w3scholls.com/jsref/jsref_obj_array.asp


let xTrybe = [ 'pão', 'queijo', 'bacon', 'alface', 'ketchup', 'pão']
