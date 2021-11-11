/**
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
*/ 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal no quadrinhos do pato Donald'
}

// 1
console.log('1')
function bomDia() {
    return 'Bom dia, ' + info.personagem;
}
console.log(bomDia(info.personagem));

// 2
console.log('2')
info.recorrente = 'Sim';
console.log(info)

// 3 
console.log('3')
for (let key in info) {
    console.log(key);
}

// 4
console.log('4')
for (let key in info) {
    console.log(info[key]);
}

// 5
console.log('5')
let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
}
info2.recorrente = 'Sim';



for (let key in info && info2) {
    
    if ((info[key] && info2[key]) !== info.recorrente) {

        console.log(info[key] + ' e ' + info2[key]); 
            
    } else if (info.recorrente == 'Sim' && info2.recorrente == 'Sim') {
        
        console.log('Ambos recorrentes');

    }else {
        
        console.log(info[key] + ' e ' + info2[key]);
    }
    
}


// 6 
console.log('6')
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
leitor['nomeCompleto'] = leitor.nome + ' ' + leitor.sobrenome
console.log(`O livro favorito de ${leitor.nomeCompleto} se chama ${leitor.livrosFavoritos[0]['titulo']}`);

// 7
console.log('7')
console.log(`ultima posicao do array linksFavoritos ${leitor.livrosFavoritos.length - 1}`);
leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Askaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
console.log(leitor)
console.log(`ultima posicao do array livrosFavoritos ${leitor.livrosFavoritos.length - 1}`);
console.table(leitor)


// 8
console.log('8')
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);