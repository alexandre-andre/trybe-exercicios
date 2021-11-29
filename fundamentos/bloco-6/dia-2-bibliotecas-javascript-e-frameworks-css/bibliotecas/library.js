// // BIBLIOTECA MOMENT
// let moment = require('moment');
// let brasilTetra = moment('17071994', 'DDMMYYYY');
// // fromNow() = data atual - a data passada
// let fromNow = brasilTetra.fromNow();
// console.log('O Brasil foi tetra há ' + fromNow);



// BIBLIOTECA CHEETS.JS
cheet('i d d q d', function () {
    alert('god mode enabled');
});

// cheet('o n e a t a t i m e', {
//     next: function (str, key, num, seq) {
//         console.log('Key password: ' + key);
//         console.log('progress: ' + num / seq.length);
//         console.log('seq ' + seq.join(' '));
//     },

//     fail: function () {
//         console.log('sequence failed');
//     },

//     done: function () {
//         console.log('+ 30 lives');
//     }
// });

// cheet('o n c e', function () {
//     console.log('This will only fire once');
//     cheet.disabled('o n c e');
// });

var date = new Pikaday(
    {
    field: document.getElementById('my-date'),
    firstDay: 1,
    minDay: new Date(), // inicia na data decriacao 
    maxDate: new Date(2030, 12, 31),
    yearRange: [2021, 2030]
    }
)

// var li = document.createElement('li'); // cria elemento
// var t = document.createTextNode(text); // cria nó de texto na <li>
// li.appendChild(t) // add o texto na <li>
// var ul = document.getElementById('idDaUl');
// ul.appendChild(li); // add a <li> a <ul>