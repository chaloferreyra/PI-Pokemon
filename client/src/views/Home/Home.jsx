import { useEffect } from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    },[dispatch]);
    return (
        <>
            <p><CardsContainer /></p>
        </>
    )
}

export default Home;