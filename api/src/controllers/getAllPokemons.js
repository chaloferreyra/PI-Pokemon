const axios = require('axios');
const { Pokemon } = require('../db.js');

const getAllPokemons = async () => {


    const dbPokemons = await Pokemon.findAll();
    
    const pokePromise = [];
    const pokemones = [];
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const results = response.data.results;
        results.forEach( result =>{
            let { url } = result;
            pokePromise.push(url);
        })
        await Promise.all( pokePromise.map(url => axios.get(url)))
            .then((data) => {
                data.forEach( pokes => {
                    let poke = pokes.data;
                    let pokemon = {
                        id : poke.id,
                        name : poke.name,
                        life : poke.stats[0].base_stat,
                        stroke : poke.stats[1].base_stat,
                        defending : poke.stats[2].base_stat,
                        speed : poke.stats[5].base_stat,
                        height : poke.height,
                        weight : poke.weight,
                        imageDefault : poke.sprites.other.dream_world.front_default,
                        imagenF : poke.sprites.other.home.front_default,
                        imagenB : poke.sprites.other.home.front_shiny,
                    }                        
                    pokemones.push(pokemon);
            })
            //console.log(pokemones)
        })

        return [...dbPokemons, ...pokemones];
};

module.exports = getAllPokemons;