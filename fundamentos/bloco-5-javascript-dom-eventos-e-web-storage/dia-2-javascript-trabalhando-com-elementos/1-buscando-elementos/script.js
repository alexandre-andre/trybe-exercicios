console.log(document.getElementById('start').nextSibling) // 'nó'
console.log(document.getElementById('start').nextElementSibling) //<p>elemento</>

// 1
console.log(document.getElementById('elementoOndeVoceEsta'));

// 2
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta').parentNode;
console.log(elementoOndeVoceEsta);
elementoOndeVoceEsta.style.color = 'red';

// 3
console.log(document.getElementById('primeiroFilhoDoFilho'));
// paiDoPai.firstElementChild.firstChild.innerText = 'texto do elemento filho'
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilho.innerText = '3 - Texto do elemento primeiroFilhoDoFilho';

// // 4
let pai = document.getElementById('pai');
console.log(document.getElementById('pai').firstChild);

// 5
console.log(elementoOndeVoceEsta.firstChild);

// 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling); 

// 7
console.log(elementoOndeVoceEsta.firstElementChild.nextElementSibling.nextElementSibling);

// 8
console.log(pai.firstElementChild.nextElementSibling.nextElementSibling);

// 9 Crie um irmão para elementoOndeVoceEsta .
div = document.createElement('div');
div.innerText = 'Elemento div criado';
pai.appendChild(div);

// 10 Crie um filho para elementoOndeVoceEsta .
let elemento = document.getElementById('elementoOndeVoceEsta');
div.innerText = 'Elemento novoooo';
elemento.appendChild(div);

// 11 Crie um filho para primeiroFilhoDoFilho .
div.innerText = 'texto do primeiro filho do filho';
primeiroFilhoDoFilho.appendChild(div);


// 12 A partir desse filho criado, acesse terceiroFilho .
let terceiroFilho = document.getElementById('terceiroFilho')
div.innerText = 'Good vibes'
terceiroFilho.appendChild(div)

// 13 Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let paiDoPai = document.getElementById('paiDoPai');
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho')
let quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho')

// if (primeiroFilho.parentNode) {
//     console.log(primeiroFilho.parentNode.removeChild(primeiroFilho))
// }
console.log(paiDoPai.firstElementChild.removeChild(primeiroFilho))
console.log(paiDoPai.firstElementChild.removeChild(terceiroFilho))
console.log(paiDoPai.firstElementChild.removeChild(quartoEUltimoFilho))
console.log(paiDoPai.firstElementChild.firstElementChild.removeChild(segundoEUltimoFilhoDoFilho))
console.log(document.body)