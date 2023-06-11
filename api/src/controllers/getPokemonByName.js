const axios = require('axios');
const { Pokemon } = require('../db.js');

const getPokemonByname = async (name) => {
    
    const dbPokemons = await Pokemon.findAll({ where: { name}});

    let response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)).data;

    let pokemon = {
        id : response.id,
        name : response.name,
        life : response.stats[0].base_stat,
        stroke : response.stats[1].base_stat,
        defending : response.stats[2].base_stat,
        speed : response.stats[5].base_stat,
        height : response.height,
        weight : response.weight,
        imageDefault : response.sprites.other.dream_world.front_default,
        imagenF : response.sprites.other.home.front_default,
        imagenB : response.sprites.other.home.front_shiny,
    }

    return [...dbPokemons, pokemon];
}

module.exports = getPokemonByname;