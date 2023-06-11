import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CarsContainer = () => {
    const pokemons = useSelector(state => state.pokemons)
    
    return (
        
        <div className={style.container}>
            { pokemons.map(pokemon => {
                return <Card 
                    id={pokemon.id}
                    name={pokemon.name}
                    life={pokemon.life}
                    stroke={pokemon.stroke}
                    defending={pokemon.defending}
                    speed={pokemon.speed}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    imageDefault={pokemon.imageDefault}
                    imagenB={pokemon.imagenB}
                    imagenF={pokemon.imagenF}
                />
            })}
        </div>
    )
}

export default CarsContainer;