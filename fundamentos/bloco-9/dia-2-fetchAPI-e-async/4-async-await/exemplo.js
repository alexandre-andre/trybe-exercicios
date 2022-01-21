const fetch = require('node-fetch');

// async na frente da funcao faz a funcao automaticamente criar uma promise, tudo q for executado dentro dela serah executado em um nova promise
async function getPokemonByName(pokemonName) {
    const url = `url da api/${pokemonName}`;
    const response = await fetch(url); // espera o resultado da chamada do fetch
    const data = await response.json(); // espera a resposta do objeto na fetch
    
    const pokemon = {
        name: data.name,
        imgUrl: data.img,
    };

    return pokemon;
}

// como getPokemonByName retorna uma promise, temos usar await qdo ela for chamada
// lembrando q await soh funciona qdo em um funcao assincrona
async function listarPokemon() {
    try {
        const poke = await getPokemonByName('meowth');
        append(getPokemon); // joga na tela o pokemon - append eh uma funcao nao configurada ainda
        // ou
        // append( await getPokemonByName('meowth'))
    } catch (error) {
        console.error(error)
    }
}

window.onload = getPokemonByName;