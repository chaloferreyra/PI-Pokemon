import { 
    GET_POKEMONS,
    GET_P_BY_ID
} from "./actions"



const inicialState = {
    pokemons: [],
}

const rootReducer = (state = inicialState, {type, payload}) => {
    switch (type) {
        case GET_POKEMONS:
            
            return { ...state, pokemons: payload};
        
        case GET_P_BY_ID:
            return { ...state, 
                pokemons: state.pokemons.filter(poke => poke.id !== payload)
            };
        
        default:
            return { ...state };


        }
    
}





export default rootReducer;