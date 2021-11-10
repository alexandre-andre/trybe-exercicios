let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado'
};

console.log(diasDaSemana['1']);


let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'seLascou'
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco])
console.log(conta['banco']['nome'])



// PARA FIXAR
console.log('PARA FIXAR')
/** 1 - Crie um objeto player contendo as variáveis listadas abaixo. */
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};


/** 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade". */
player['fullName'] = player.name + player.lastName;

console.log(`A jogadora ${player.fullName} tem ${player.age} anos`);



/** 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. */
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player['bestInTheWorld'])



/** 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
*/
console.log(`A jogadora ${player.fullName} foi eleia a melhor do mundo por 6 vezes - ${player.bestInTheWorld}`);



/** 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
*/
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`)
