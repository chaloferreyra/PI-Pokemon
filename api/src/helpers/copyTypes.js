const axios = require('axios');
const { TypePokemon } = require('../db.js');

const copyTypes = async () => {

    const response = (await axios.get('https://pokeapi.co/api/v2/type/')).data;
    const respuesta = []
    const pokeArray = response.results;

    //console.log(pokeArray)
        
    pokeArray.forEach((element, index) => {
        respuesta.push({id: ++index, name: element.name});
        addType(element.name);
        
    });
    //console.log(respuesta)
    return respuesta;
}

const addType = async (name) => await TypePokemon.create({name: name});

module.exports = copyTypes;