//const axios = require('axios');
const createPokemon = require('../controllers/createPokemon.js');
const getPokemonById = require('../controllers/getPokemonById.js');
const getAllPokemons = require('../controllers/getAllPokemons.js');
const getPokemonByName = require('../controllers/getPokemonByName.js');

const getPokemonsHandler = async (req, res)=> {
    const { name } = req.query;

    try {
        const results = name ? await getPokemonByName(name) : await getAllPokemons();
        res.status(201).json(results);
    } catch (error) {
        console.log('AXIOS ERROR', error);
        res.status(500).json({error: error.message});
    }
}


const getPokemonByIdHandler = async (req, res) => {
    const { idPokemons } = req.params;
    
    const source = isNaN(idPokemons) ? "bbdd" : "api"

    try {
        const pokemon = await getPokemonById(idPokemons, source);

        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const newPokemonHandler = async (req, res) => {
    try {
        const {
            name,
            imagen,
            life,
            stroke,
            defending,
            speed,
            height,
            weight,
            idType } = req.body;
    
        const newPoke = await createPokemon({
            name,
            imagen,
            life,
            stroke,
            defending,
            speed,
            height,
            weight,
            idType});

        res.status(201).json(newPoke);
        
    } catch (error) {
        //console.log('AXIOS ERROR', error);
        res.status(500).json({error: error.message});
    }
};


module.exports = {
    newPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler
}
