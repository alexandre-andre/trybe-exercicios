console.log('getElement')
console.log(document.getElementById('cont1').children);
// mostra todos os elementos filhos do id cont1

console.log(document.getElementsByClassName('estilo1'));
// todos os elementos com a classe estilo1 em formato de array

console.log('querySelector')
console.log(document.querySelector('#cont1'))
console.log(document.querySelector('.estilo1'))
// pega a primeira classe estilo1

console.log(document.querySelectorAll('.estilo1'))
// pega todas as classes estilo1 

let a = document.querySelectorAll('#cont1 .estilo1')
console.log(a)


document.querySelector('h2').innerText = 'Minha lista 1';
document.querySelector('ul').style.backgroundColor = '#ccccc';
document.getElementsByTagName('h2')[1].innerHTML = 'Minha lista';
let ul = document.querySelectorAll('ul')
ul[0].style.backgroundColor = '#cccccc'


// apaga texto de tags
function clearTextByTagName(tagName) {
    let tags = document.getElementsByTagName(tagName);
    console.log(tags)

    for (let i = 0; i < tags.length; i++) {
        // apaga o texto de todas as tags li
        if (tags[i].classList == 'estilo1 estilo2') {
            // classList eh um propriedade que acessa a lista
            continue
        }
        tags[i].innerText = '';
    }
}
clearTextByTagName('li')