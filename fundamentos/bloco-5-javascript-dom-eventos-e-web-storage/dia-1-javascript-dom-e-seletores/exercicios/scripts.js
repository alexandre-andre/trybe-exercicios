// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// 3. Por fim, recupere o subtítulo e altere-o também.
// 4. Adicione uma classe igual para os dois parágrafos.
// 5. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// 6. Altere algum estilo do primeiro deles.
// 7. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

// 1
let title = document.getElementById('page-title');
title.innerText = 'John Wick';
title.style.color = 'red';

// 2
let segundoParafrafo = document.getElementById('second-paragraph');
segundoParafrafo.innerText = 'Depois que John Wick (Keanu Reeves) perde sua esposa Helen (Bridget Moynahan) para uma doença terminal, ele recebe um cachorro beagle chamado Daisy, por instruções de Helen, para ajudá-lo a lidar com sua morte.';

// 3
let subTitulo = document.getElementById('subtitle');
subTitulo.innerText = 'Enredo';

// 4 - 5 - 6
let paragrafo = document.getElementsByClassName('headerParagraph');
function paragraphColor(element) {
    for (let i = 0; i < element.length; i++) {
        
        if (i == 0) {
            element[i].style.display = 'none'
        }

        element[i].style.color = 'blue'
    }
}
paragraphColor(paragrafo);

// 7
let subTag = document.getElementsByTagName('h4');
console.log(subTag)
subTag[0].style.color = 'blue';
subTag[0].style.textDecoration = 'underline';




