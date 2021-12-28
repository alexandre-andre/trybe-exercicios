// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const teste = param => {
    let string = 'Tryber x aqui!'
    // converte str em array
    let stringConvToArray = string.split(' ');
    for (let i = 0; i < stringConvToArray.length; i++) {
        // se o valor do indice acessado for x
        if (stringConvToArray[i] == 'x') {
            // esse valor será substituído por param
            stringConvToArray[i] = param;
        }
    };
    // conv array em str
    let arrayConvToString = stringConvToArray.join(' '); 
    return arrayConvToString;
};
console.log(teste('Andrezin da Tapioca'));


// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
const skills = ['HTML', 'CSS', 'JS', 'ANGULAR', 'REACT']
const teste2 = (param) => {
    let sortSkills = skills.sort();
    return `${param} Minhas cinco principais habilidades são: ${sortSkills.join('; ')} ... #goTrybe.`
}
console.log(teste2(teste('Andrezin da Tapioca')));
