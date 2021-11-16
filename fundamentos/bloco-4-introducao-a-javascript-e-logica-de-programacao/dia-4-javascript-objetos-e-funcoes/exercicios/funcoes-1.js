// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palim(string) {
    // split - joga em um array
    // reverse - inverte o array
    // join - transforma esse array em uma string
    let invert = string.split("").reverse("").join("");
    let result;

    if (string == invert) {
        result = 'é palim';
    } else {
        result = 'não é palim';
    }

    return console.log(result)
}
palim('ovodd')


// function isPalim(string) {
//     let comp = []
//     for (let i = string.length; i >= 0; i--) {
//         comp.push(i.charAt(i))
//         console.log(comp)
//     }

// }
// isPalim('ovo')



// function isPalim(s) {
//     let result = ""
//     let x = ''


//     for (let i = s.length; i >= 0; i--) {
//         x += s[i];
//     }
//     console.log(x, s)
    
//     if (s == x) {
//         result = 'Sim são'
//     } else {
//         result = 'Não são'
//     }

//     return console.log(result)
// }
// isPalim('ovo')