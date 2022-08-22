import {useContext, useState, useEffect} from "react"
import {context} from "../../CartContext"
import {Link} from "react-router-dom"
import "./Cart.css"
import {addDoc, collection, Timestamp} from "firebase/firestore"
import {db} from "../../services/firebase/index"

const Cart = () =>{
    const total = useContext(context)
    const carrito = useContext(context)
    const remove = useContext(context)
    const cart = carrito.cart
    const clear = useContext(context)
    const [flag, setFlag] = useState(false)
    const precioTotal = total.getTotal()
    let cantidadTotal = 0
    for (let element of cart){     
        cantidadTotal += element.cant  
    }
    useEffect(()=>{
        if(cantidadTotal===0){
            setFlag(false)
        }else{
            setFlag(true)
        }
    },[cantidadTotal])
    const createOrder= () =>{
        const objectOrder = {
            buyer:{
                nombre: "Nicolás Lima",
                tel: 3515555555,
                mail: "nico@gmail.com"
            },
            items: cart,
            total: precioTotal,
            date: Timestamp.fromDate(new Date())
        }

        addDoc(collection(db, "orders"), objectOrder).then(response =>{
        })
    }
    if(flag === false){
        if(cart[0]?.cant > 0){
            setFlag(true)
        }
        return(   
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to="/">Volver al inicio</Link>
            </div>
            )
    }else if(flag === true){
            return(
                <>
                    <div>
                        {cart.map(cart => <div key={cart.id} className="lista">
                            <p>{cart.nombre}</p>
                            <p>x{cart.cant}</p>
                            <button className="boton_q" onClick={()=> remove.removeItem(cart.id)}>Quitar Producto</button>
                        </div>)}
                        <div className="total">
                            <p>Precio Total: ${precioTotal}</p>
                        </div>
                        <div className="botones1">
                            <Link to="/"><button className="boton_borrar" onClick={()=> clear.clearCart()}>Borrar pedido</button></Link>
                            <button onClick={createOrder}className="boton_generar">Generar orden</button>
                        </div>
                    </div>
                </>
                )
            }
}

export default Cart