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
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
- Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
console.log("Exercicio 6 - xadrez")
let str = 'B!sPo'
let string = str.toLocaleLowerCase();

if(string == 'bispo'){
    console.log('Movimento em diagonal até o limite de casas disponíveis')
}else{
    console.error(string + ' NÃO é uma peça válida')
}

/**
7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */
console.log('Exercirio 7');
let nota = 75;

if(nota >= 90){
    console.log('A');
}else if(nota >= 80){
    console.log('B');
}else if(nota >= 70){
    console.log('C');
}else if(nota >= 60){
    console.log('D');
}else if(nota >= 50){
    console.log('E');
}else{
    console.log('F');
}

/**
8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
- Bonus: use somente um if .
*/
console.log('Exercicio 8');

const ex8_1 = 152;
const ex8_2 = 26;
const ex8_3 = 3423;

if((ex8_1 + ex8_2 + ex8_3) % 2 == 0){
    console.log('True');
}else{
    console.log('False');
}

/**
9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
- Bonus: use somente um if . 
*/
console.log('Exercicio 9');

const ex9_1 = 21335;
const ex9_2 = 54353;
const ex9_3 = 39725;

if((ex9_1 + ex9_2 + ex9_3) % 2 != 0){
    console.log('True');
}else{
    console.log('false')
}

/* 
10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
- - valorCustoTotal = valorCusto + impostoSobreOCusto
- - lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/
console.log('Exercicio 10');

const ex10_pC = -2;
const ex10_pV = 100; 
let lucro;
// Atente que, sobre o custo do produto, incide um imposto de 20%.
let impostoSobreOCusto = 20/100;
let valorCustoTotal = ex10_pC + (ex10_pC * impostoSobreOCusto);
// console.log(valorCustoTotal);

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo
function confereValores(ex10_pC, ex10_pV){
    let lucro = ''
        if(ex10_pC < 0 || ex10_pV < 0){
            console.error('Error: algum dos valores é menor que zero');
        }else{
            lucro = (ex10_pV - valorCustoTotal) * 1000;
            console.log('Valores preenchidos corretamente')
        }
    return lucro
}
confereValores(ex10_pC, ex10_pV);


/**
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
- INSS (Instituto Nacional do Seguro Social)
- - Salário bruto até R$ 1.556,94: alíquota de 8%
- - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
- - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
- - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
- IR (Imposto de Renda)
- - Até R$ 1.903,98: isento de imposto de renda
- - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
- - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
- - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
- - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
 */
console.log('Exercício 11')
let salarioBruto = 7851.37;
let salarioLiquido = ''
let inss;
let aliquotaMaxima = 570.88;
let descontoInss;
let ir;
let descontoIr;

// inss sobre o salario bruto
if(salarioBruto <= 1556.94){
    inss = 8/100;
    descontoInss = parseFloat((salarioBruto * inss).toFixed(2));
    console.log('Desconto INSS R$ ' + descontoInss); 

}else if(salarioBruto <= 2594.92){
    inss = 9/100;
    descontoInss = parseFloat((salarioBruto * inss.toFixed(2)));
    console.log('Desconto INSS R$ ' + descontoInss);

}else if(salarioBruto <= 5189.82){
    inss = 0.11;
    descontoInss = parseFloat((salarioBruto * inss).toFixed(2));
    console.log('Desconto INSS R$ ' + descontoInss);

}else{
    descontoInss = aliquotaMaxima;
    console.log('Desconto INSS R$ ' + descontoInss);
}

// ir sobre o salario bruto
if(salarioBruto <= 1903.98){
    console.log('Isento de Imposto de Renda')
}else if(salarioBruto <= 2826.65){
    ir = 0.075;
    descontoIr = parseFloat(((salarioBruto * ir) - 142.80).toFixed(2));
    console.log('Desconto IR R$ ' + descontoIr);
}else if(salarioBruto <= 3751.05){
    ir = 0.15;
    descontoIr = parseFloat(((salarioBruto * ir) - 354.80).toFixed(2));
    console.log('Desconto IR R$ ' + descontoIr);
}else if(salarioBruto <= 4665.68){
    ir = 0.225;
    descontoIr = parseFloat(((salarioBruto * ir) - 636.16).toFixed(2));
    console.log('Desconto IR R$ ' + descontoIr);
}else{
    ir = 0.275;
    descontoIr = parseFloat(((salarioBruto * ir) - 869.36).toFixed(2));
    console.log('Desconto IR R$ ' + descontoIr);
}

salarioLiquido = salarioBruto - descontoInss - descontoIr
let salarioLiquidoArredondado = parseFloat(salarioLiquido.toFixed(2))
console.log('Salário líquido R$ ' + salarioLiquidoArredondado);