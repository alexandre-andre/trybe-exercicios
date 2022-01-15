// 1 - Temos dois objetos, um com informações pessoais de um usuário e outro com informações referentes ao cargo deste usuário na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const userDataJobs = {...user, ...jobInfos}
console.log(userDataJobs)

// 2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
const { name, age, profession} = userDataJobs
console.log(`${name} tem ${age} anos e é um(a) ${profession}.`)