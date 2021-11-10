/**
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
 */ 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal no quadrinhos do pato Donald'
}

// 1
function bomDia() {
    return 'Bom dia, ' + info.personagem;
}
console.log(bomDia(info.personagem));

// 2
info.recorrente = 'Sim';
console.log(info)

// 3 
for (let key in info) {
    console.log(key);
}

// 4
for (let key in info) {
    console.log(info[key]);
}

// 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
}
info2.recorrente = 'Sim';

for (let key in info && info2) {
    
    console.log(info[key] + ' e ' + info2[key])
    
}
