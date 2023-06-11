import style from './Card.module.css'


const Card = (props) => {
    return (
        <>
            <div className={style.card}>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.life}</p>
                <p>{props.stroke}</p>
                <p>{props.defending}</p>
                <p>{props.speed}</p>
                <p>{props.height}</p>
                <p>{props.weight}</p>
                <p><img src={props.imageDefault} alt={props.name} /></p>
            </div>
        </>
    )
}

export default Card;