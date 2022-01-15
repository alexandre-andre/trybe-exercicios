// 8 - No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela retorne os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros, então não se esqueça de tratá-los também, combinado?

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter); // procura o primeiro pokemon com o param indicado

    const { name, type, ability } = pokemon; // desestrutura o objeto pokemon

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`; // escreve um texto com as propriedades do pokemon
    
    callback(null, messageFromProfOak); // chamada da callback com seus respectivos params, null qdo undefined
  }, 2000);
}

getPokemonDetails(
  (pokemon) => pokemon.name === 'Bulbasaur', // (param filter)
  (error, message) => { // (param callback)
    if(error) {
      console.log(error); // imprime a msg callback(new Error) que esta no if undefined
    } else {
      console.log(message); // imprime a msg com o pokemon achado
    }
  }
);

module.exports = {
    getPokemonDetails,
};