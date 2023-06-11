const { TypePokemon } = require('../db.js');
const copyTypes = require('../helpers/copyTypes.js')


const getTypes = async ()=> {

    const types = await TypePokemon.findAll();
    
    console.log("hay algo en la tabla types:", types);
    console.log ("Se registraron: ", types.length)
    
    const result = types.length ? types : await copyTypes();

    console.log("esto es luego de buscar: ", result);

    return result;
        
}


module.exports = getTypes;