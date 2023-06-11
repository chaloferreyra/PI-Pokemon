import { Link } from "react-router-dom"
import style from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={style.container}>
            <Link className={style.links} to="/home">Home</Link>
            <Link className={style.links} to="/create">Form</Link>
        </div>
    )

};


export default NavBar;