/* 
1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
- Adição (a + b)
- Subtração (a - b)
- Multiplicação (a * b)
- Divisão (a / b)
- Módulo (a % b)
*/
const a = 5;
const b = 8;

console.log("Exercicio 1")
// soma
let sum = a + b;
console.log(sum);

// subtracao
let subtration = a - b;
console.log(subtration);

// div
let division = a / b;
console.log(division);

// multiplicacao
let multiplication = a * b;
console.log(multiplication)

// Operador de relacao
let comparison = !a > b;
console.log(comparison)

// Descobrindo numero par 
let isEven = ((a + b) % 2) == 0;
console.log(isEven);

/*
2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/
console.log("Exercicio 2 - Maior entre 2")
let num1 = 89
let num2 = 93

if(num1 > num2){
    console.log(`${num1} é maior que ${num2}`)
}else if(num1 < num2){
    console.log(`${num1} é menor que ${num2}`)
}else{
    console.log(`${num1} e ${num2} são iguais`)
}

/*
3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/
const c = 6;
console.log("Exercicio 3 - Maior de 3")
if(a > b && a > c){
    console.log("const a é maior que b e c")
}else if(b > a && b > c){
    console.log("const b é maior que a e c")
}else{
    console.log("const c é maior que a e b")
}

/*
4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/
console.log("Exercicio 4 - positivo/negativo")
if(a < 0){
    console.log("const positive")
}else if(a == 0){
    console.log("cont zero")
}else{
    console.log("const negative")
}

/*
5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.
*/
console.log("Exercicio 5 - angulos triangulo")
const ang1 = 70 
const ang2 = 30
const ang3 = 199
let triangulo = ang1 + ang2 + ang3
if(triangulo == 360){
    console.log("É um triangulo")
}else{
    console.error("NÃO é um triangulo")
}

if(ang1 < 180 || ang1 < 0){
    console.log("ang1 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang1 não corresponde ao valor angular de um triangulo")
}

if(ang2 < 180 || ang2 < 0){
    console.log("ang2 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang2 corresponde ao valor angular de um triangulo")
}

if(ang3 < 180 || ang3 < 0){
    console.log("ang3 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang3 não corresponde ao valor angular de um triangulo")
}

/*
6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
- Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
console.log("Exercicio 6 - xadrez")



