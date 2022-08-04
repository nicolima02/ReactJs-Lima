import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom"
const Navbar = () => {
    return ( 
        <nav className="navbar"> 
            <div className="titulo">
                <a href="/"><h1>NeonDesign</h1></a>
            </div>
            <div className="botones">
                <Link className="button" to="/categoria/retroiluminado">Retroiluminado</Link>
                <Link className="button" to="/categoria/neon">Neon</Link>
                <Link className="button" to="/categoria/mdf">MDF</Link>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar;