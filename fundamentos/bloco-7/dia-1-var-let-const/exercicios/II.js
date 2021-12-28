// 1 Crie uma função que receba um número e retorne seu fatorial.
const calcFatorial = n => {
    if (n == 0) return 1
    let result = n
    for (let i = n - 1; i > 1; i--) {
        result *= i
    }
    return result
}
console.log(calcFatorial(0));
console.log(calcFatorial(4));

// É possível resolver com uma linha usando ternary operator .
// const fatorialTernario = (n > 1) ? n * fatorialTernario(n - 1) : 1

// 2 Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = string => {
    let stringInArray = string.split(' ');
    let biggerWord = stringInArray[0];
    let biggerWordLength = biggerWord.length; 
    stringInArray.forEach(item => {
        if (item.length > biggerWordLength) biggerWord = item
    })
    return `Com ${biggerWordLength} caracteres ${biggerWord} é a maior palavra`
};
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
