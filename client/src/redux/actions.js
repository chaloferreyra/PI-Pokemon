import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_P_BY_ID = "GET_POKEMON_BY_ID"


export const getPokemons = () => {
    return async function(dispatch){
        const apiData = await axios.get(
            "http://localhost:3001/pokemons/"
        );
        const pokemons = await apiData.data;

        dispatch({ type: GET_POKEMONS, payload: pokemons});
    };
}

export const getPokemonById = (idPokemons) => {
    return async function(dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/pokemons/${idPokemons}`
        );
        const pokemon = await apiData.data;

        dispatch({ type: GET_P_BY_ID, payload: pokemon});
    }
}

