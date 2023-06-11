const axios = require('axios');
const { Pokemon } = require('../db.js');

const getPokemonById = async (id, source) => {

    const poke = source === "api" ?
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)).data :
    await Pokemon.findByPk(id);
    
    return poke;
    
}

module.exports = getPokemonById;