import {Link} from "react-router-dom"
import { useContext} from "react"
import {context} from "../../CartContext"
import "./CartWidget.css"
const CartWidget = () =>{  
    const contador = useContext(context)
    return (
        <div className="carrito"> 
        <Link to="/cart" className="img_carrito"><img src="images/carrito.png" alt="carrito" className="imagen-carrito"/></Link>  
        <p>{contador.cambiarConteo()}</p>
        </div>
    )
}


export default CartWidget