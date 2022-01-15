 const firstLi = document.getElementById('first-li');
      const secondLi = document.getElementById('second-li');
      const thirdLi = document.getElementById('third-li');
      const input = document.getElementById('input');
      const myWebpage = document.getElementById('my-spotrybefy');
      const h1 = document.querySelector('h1');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', function toggleClasseTech(e) {
  firstLi.classList.add('tech')
  secondLi.classList.remove('tech')
  thirdLi.classList.remove('tech')
})
secondLi.addEventListener('click', function toggleClasseTech(e) {
  firstLi.classList.remove('tech')
  secondLi.classList.add('tech')
  thirdLi.classList.remove('tech')
})
thirdLi.addEventListener('click', function toggleClasseTech(e) {
  firstLi.classList.remove('tech')
  secondLi.classList.remove('tech')
  thirdLi.classList.add('tech')
})

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const ul = document.querySelector('ul').children
function textInput(e) {
  
  for (let i = 0; i < ul.length; i++) {
    // se o indce contem a classe tech
    if (ul[i].classList.contains('tech')) {
      
      // se a tecla clicada for enter
      if (e.keyCode == 13) {
        ul[i].innerText = input.value;
        input.value = ''
      }

    }
  }
}
input.addEventListener('change', textInput)


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function trocaPagina() {
  window.location.assign('https://www.w3schools.com/js/js_window_location.asp')
}

// recebe um parametro e chama-o dentro da funcao
const cursorPointer = (element) => {
  element.style.cursor = 'pointer'
}
myWebpage.addEventListener('dblclick', trocaPagina)
// escuta o evento de escuta de mouseover ao chamar cursorPointer e aplica nela o elemento desejado
myWebpage.addEventListener('mouseover', cursorPointer(myWebpage))
firstLi.addEventListener('mouseover', cursorPointer(firstLi))
secondLi.addEventListener('mouseover', cursorPointer(secondLi))
thirdLi.addEventListener('mouseover', cursorPointer(thirdLi))


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const randomColor = () => {
  let p1 = Math.round(Math.random() * 255);
  let p2 = Math.round(Math.random() * 255);
  let p3 = Math.round(Math.random() * 255);
  return `rgb(${p1}, ${p2}, ${p3})`
}

function mudaTemaH1() {
  h1.style.color = randomColor()
}
h1.addEventListener('click', mudaTemaH1)
h1.addEventListener('mouseover', cursorPointer(h1))
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.