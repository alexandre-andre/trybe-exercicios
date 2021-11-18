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
console.log(elementoOndeVoceEsta.textContent);

// 7
console.log(elementoOndeVoceEsta.firstElementChild.nextElementSibling.nextElementSibling);

// // 8
console.log(pai.firstElementChild.nextElementSibling.nextElementSibling)