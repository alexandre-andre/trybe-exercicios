// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


// SOLUCAO COM SPLIT
function verificaFimPalavra(word, end) {
    // transforma strings em array
    word = word.split('');
    end = end.split('');
    let verify = true;
    for (let i = 0; i < end.lengh; i++) {
        
        // se o ultimo valor que esta sendo acessado em word for diferente do valor que está sendo passado em end[i]
        if (word[word.length - end.length + i] != end[i]) {
            verify = false;
        }
    }

    return verify;
}
console.log(verificaFimPalavra('trybe', 'be'))



// SOLUCAO COM REVERSAO 
function verificaFim(word, end) {
    // transforma em um array, inverte e transforma em uma string
    let invertWord = word.split('').reverse().join('');
    let invertEnd = end.split('').reverse().join('');
    let result;


    for (let i = 0; i < invertEnd.length; i++) {
        // se o valor que está sendo acessado no indice i em invertWord for diferente do valor que está sendo acesso no indice i em inverEnd
        if (invertWord[i] !== invertEnd[i]) {
            result = false;
            break;
        
        } else {
            result = true;
        }
    }

    return result
}
console.log(verificaFim('jorel', 'eu'));