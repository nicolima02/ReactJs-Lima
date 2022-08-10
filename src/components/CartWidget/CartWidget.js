
import { useContext} from "react"
import {context} from "../../CartContext"
const CartWidget = () =>{  
    const contador = useContext(context)
    return (
        <div className="carrito"> 
        <img src="images/carrito.png" alt="carrito" className="imagen-carrito"/>     
        <p>{contador.cambiarConteo()}</p>
        </div>
    )
}


export default CartWidget