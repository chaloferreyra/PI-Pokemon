const getTypes = require("../controllers/getTypes.js");

const getTypeHandler = async (req, res) => {
    
    try {
        const types = await getTypes();    
        res.status(200).json(types);
        
    } catch (error) {
        console.log('AXIOS ERROR', error);
        res.status(500).send(error.message);
    }
    
}

module.exports = getTypeHandler;