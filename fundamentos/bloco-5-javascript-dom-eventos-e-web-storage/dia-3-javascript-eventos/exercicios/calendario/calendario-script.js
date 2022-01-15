const buttonsContainer = document.querySelector('.buttons-container')
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const weekDaysList = document.querySelector('.week-days');
const ulDays = document.querySelector('#days');

function createDaysOfWeek() {
    for (let i = 0; i < weekDays.length; i++) {
        const weekDay = weekDays[i];
        // cria elemento li
        const dayListItem = document.createElement('li');
        // escreve na li o weekday no indice i
        dayListItem.innerHTML = weekDay;
        // insere elemento filho na classe wee-days
        weekDaysList.appendChild(dayListItem);
    }
}
createDaysOfWeek();

// 1 crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
function createNumberOfDay() {
    for (let i = 0; i < dezDaysList.length; i++) {
        const day = dezDaysList[i];
        // cria li
        const dayListItem = document.createElement('li');
        // insere classe day em todaa li
        dayListItem.classList.add('day')
        // insere classe especifica em day x
        if (day == 24 || day == 25 || day == 31) {
            dayListItem.classList.add('holiday')
        }
        
        if (day == 4 || day == 11 || day == 18 || day == 25) {
            dayListItem.classList.add('friday')
        }
        // escreve na li o day no indide i
        dayListItem.innerHTML = day;
        // em ulDays insere elemento filho dayListeItem
        ulDays.appendChild(dayListItem);
    }
}
createNumberOfDay();

const classHoliday = document.querySelectorAll('.holiday');

// 2 função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" 
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createHolidayButton(string) {
    const button = document.createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.innerText = string;
    buttonsContainer.appendChild(button);
    button.addEventListener('click', mudaFundoHoliday)
}
createHolidayButton('Feriados');

// 3 adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" 
function mudaFundoHoliday() {
    // guarda todos os elementos com a classe holiday em um NodeList
    classHoliday.forEach(element => element.classList.toggle('bg-yellow') );
}

// 4 função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
const createButtonFriday = (string) => {
    const button = document.createElement('button');
    button.setAttribute('id', 'btn-friday');
    button.innerHTML = string;
    buttonsContainer.appendChild(button);
}
createButtonFriday('Sexta-feira');

// 5 função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// console.log(ulDays.children)
const btnFriday = document.querySelector('#btn-friday');
const classFriday = document.querySelectorAll('.friday');

function changeFridayTextToString() {
    let text = 'o nanana';

    btnFriday.addEventListener('click', function() {
        for (let i = 0; i < classFriday.length; i++) {

            if (classFriday[i].innerHTML !== text) {
                classFriday[i].innerHTML = text;
                classFriday[i].style.color = 'red'
            } else {
                classFriday[i].innerHTML = arrayDeSexta[i]
                classFriday[i].style.color = 'blue'
            }
        }
    })
}
const arrayDeSexta = [4,11,18,25];
changeFridayTextToString();
// btnFriday.addEventListener('click', changeFridayTextToString);


// 6 Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// console.log(ulDaysChildren)
function touchDayOnMouseOver(event) {
    event.target.style.fontSize = '22px';
    event.target.style.fontWeight = 900;
}

function touchDayOnMouseOut(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = 200;
}
// aplica e tira evento de mouse
ulDays.addEventListener('mouseover', touchDayOnMouseOver);
ulDays.addEventListener('mouseout', touchDayOnMouseOut);


  
// 7 A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
const myTasks = document.querySelector('.my-tasks');
function escreveTarefa(string) {
    const span = document.createElement('span');
    span.innerHTML = string;
    myTasks.append(span);
    mudaCorTarefa('red');
}
escreveTarefa('Estudar');



// 8 função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task 
function mudaCorTarefa(color) {
    const div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = color;
    myTasks.appendChild(div);

    // 9 adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
    div.addEventListener('click', (e) => {
        if (!div.classList.contains('selected')) {
            e.target.classList.add('selected');
            div.style.backgroundColor = 'green';
            div.style.transition = '1s';
        } else {
            e.target.classList.remove('selected');
            div.style.backgroundColor = color;
        }
    })
}

// 10 função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// let ulDaysChildren = ulDays.children
// console.log(ulDaysChildren.length)
// ulDaysChildren.forEach(el => console.log(el))
const classDay = document.querySelectorAll('.day');
function changeColorWeekDay(e) {
    const colorTask = document.querySelector('div .task')
    for (let i = 0; i < classDay.length; i++) {
        e.target.style.color = colorTask.style.backgroundColor;
    };
};
ulDays.addEventListener('click', changeColorWeekDay);