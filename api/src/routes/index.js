const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerPokemon = require('./routerPokemon.js');
const routerType = require('./routerType.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", routerPokemon);
router.use("/types", routerType);

module.exports = router;
