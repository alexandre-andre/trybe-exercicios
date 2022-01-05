// rest pega a qtd d argumentos na funcao e aplica o rest para chamar dentro da funcao a qtd de argumentos q forem passados 
function params(...args) {
    console.log('parâmetros:', args);
    console.log(args.length)
    return `Você passou ${args.length} parâmetros para a função`;
}; 

console.log(params(0, 1, 2, 12, 65, 23, 6, 86, 1));




const soma = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num)
}
console.log('Soma dos valores passado na função soma:', soma(1,2,3,4,5,6,7))