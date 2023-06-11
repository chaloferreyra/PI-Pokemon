const {Router} = require('express');

const {
    newPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler
} = require("../handlers/pokeHandler.js");

const routerPokemon = Router();

const validateNewPokemon = (req, res, next) => {
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

    if (!name || !imagen || !life || !stroke || !defending || !speed || !height || !weight || !idType )  
        return res.status(400).json({error: "Missing Data"});

    next();
}

routerPokemon.get("/", getPokemonsHandler);
routerPokemon.get("/:idPokemons", getPokemonByIdHandler);
routerPokemon.post("/", validateNewPokemon, newPokemonHandler);

module.exports = routerPokemon;