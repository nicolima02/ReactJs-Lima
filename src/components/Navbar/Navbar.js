import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget.js";

const Navbar = () => {
    return ( 
        <nav className="navbar"> 
            <div className="titulo">
                <h1>NeonDesign</h1>
            </div>
            <div className="botones">
                <button>Retroiluminado</button>
                <button>Neon</button>
                <button>MDF</button>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar;