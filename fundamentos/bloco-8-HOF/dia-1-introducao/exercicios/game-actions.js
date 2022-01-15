// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttack = (obj) => {
    const { strength } = obj;
    const danoMin = 15;
    const dano = Math.random() * (strength - danoMin) + danoMin;
    // console.log('dano dragon', dano.toFixed());
    return +dano.toFixed();
}
// dragon.damage = dragonAttack(dragon);
console.log('dragao')
console.table(dragon)


// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAttack = (obj) => {
    const { strength } = obj;
    const { weaponDmg } = obj
    const danoMin = strength;
    const danMax = weaponDmg;
    const dano = Math.random() * (danMax - danoMin) + danoMin;
    // console.log('dano warrior', dano.toFixed());
    return +dano.toFixed(); 
};
// warrior.damage = warriorAttack(warrior);
console.log('guerreiro');
console.table(warrior); 


// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const verificaMana = (obj) => {
  if (obj.mana < 15) {
    throw new Error('Mana insuficiente')
  }
};

const mageAttack = (obj) => {
  try {
    verificaMana(mage);
    const custoMana = 15;
    const { intelligence } = mage
    const danoMin = intelligence
    const dano = Math.abs(Math.random() * (danoMin * 2) - danoMin);
    obj.mana -= custoMana;
    const danoMana = { dano: +dano.toFixed(), custoMana };
    // console.log('dano mago ' + dano.toFixed() + ' e mana gasta ', custoMana, obj.mana);
    // console.log(danoMana);
    return +dano.toFixed();
  } catch(error) {
    throw error.message;
  }
};

/** NAO FUNCIONOU COM mage.damage */
// const repeat = (hit, action) => {
//   for (let i = 1; i <= hit; i++) {
//     console.log(action(i));
//   }
// };
// repeat(2, mage.damage = damageMage(mage, mage.intelligence))
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = mageAttack(mage);
// mage.damage = damageMage(mage, mage.intelligence); // throw error.message
console.log('mago');
console.table(mage);



// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:
// Copiar
const gameActions = {
  // Crie as HOFs neste objeto.
  // 1
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  // 2
  mageTurn: (mageAttack) => {
    // const mageDamage = mageAttack(mage);
    mage.damage = mageAttack(mage);
    dragon.healthPoints -= mage.damage;
  },
  // 3
  dragonTurn: (dragonAttack) => {
    dragon.damage = dragonAttack(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  // 4
  turnResults: () => battleMembers, 
};


// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
gameActions.warriorTurn(warriorAttack)

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
gameActions.mageTurn(mageAttack)


// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
gameActions.dragonTurn(dragonAttack)

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
console.table(gameActions.turnResults())
