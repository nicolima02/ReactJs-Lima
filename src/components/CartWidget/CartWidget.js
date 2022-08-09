import { useContext, useState } from "react"
import {context} from "../../Context"
const CartWidget = () =>{  
    const cantidad = useContext(context)
    console.log(cantidad.contador)
    return (
        <div className="carrito"> 
        <img src="images/carrito.png" alt="carrito" className="imagen-carrito"/>     
        <p>{cantidad.contador}</p>
        </div>
    )
}


export default CartWidget