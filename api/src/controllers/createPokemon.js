const { Pokemon, TypePokemon } = require('../db.js');



const createPokemon = async (newPoke) => { 
    // console.log("Es el id del tipo=>", idType)
    
    const newPokemon = await Pokemon.create(newPoke);
    const oneType = (await TypePokemon.findOne({ where : {id: newPoke.idType}}));

    newPokemon.addTypePokemon(oneType);
    
    return newPokemon;
}
module.exports = createPokemon;