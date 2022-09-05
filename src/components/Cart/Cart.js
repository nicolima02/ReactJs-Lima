import {useContext, useState, useEffect} from "react"
import {context} from "../../CartContext"
import {Link} from "react-router-dom"
import "./Cart.css"
import {addDoc, collection, Timestamp, getDoc, doc, getFirestore, getDocs} from "firebase/firestore"
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
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState(false)
    const [userValidate, setValidate]= useState(false)
    const [claseOrden, setClaseOrden] = useState("hidden")
    const [ordenHecha, setOrdenHecha] = useState(false)
    const [ID, setID] = useState("")
    for (let element of cart){     
        cantidadTotal += element.cant  
    }

    const keypress = (e) =>{
        if(e.key==="Enter"){
            validate()
        }
    }
    
    const validarmail = (e) =>{
        const value = e.target.value
        if (value === email){
            setEmail2(true)
        }else{
            setEmail2(false)
        }

    }

    useEffect(()=>{
        if(email === "" || telefono === "" || nombre === "" || email2 === false){
            setValidate(false)
        }
    },[email2, email, telefono, nombre])

    useEffect(()=>{
        if(userValidate){
            setClaseOrden("boton_generar")
        }else{
            setClaseOrden("hidden")
        }
    }, [userValidate])
    
    
    
    const formnombre = (e) => {
        const value = e.target.value;
        setNombre(value);
    }
    
    const formtel = (e) => {
        const value = e.target.value
        setTelefono(value)
    }

    const formmail = (e) =>{
        const value = e.target.value
        setEmail(value)

    }

    useEffect(()=>{
        if(cantidadTotal===0 && ordenHecha===false){
            setFlag(false)
        }else{
            setFlag(true)
        }
    },[cantidadTotal])

    const validate=()=>{
        if(nombre !== "" && telefono !== "" && email !== ""){
            if(email2===true){
                setValidate(true)
            }else{
                alert("Los email no coinciden")
            }
            
        }else{
            setValidate(false)
            alert("Faltan datos")
        }
    }
        
    const createOrder= () =>{
        if (userValidate===true){
            const objectOrder = {
            buyer:{
                nombre: nombre,
                tel: telefono,
                mail: email
            },
            items: cart,
            total: precioTotal,
            date: Timestamp.fromDate(new Date())
        }

        addDoc(collection(db, "orders"), objectOrder).then(response =>{
            setID(response.id)
            
        })
        setTimeout(() => {
            setOrdenHecha(true)
            clear.clearCart()
        }, 2000);
        

        }else{
            
        }
        
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
    }else if(flag === true && ordenHecha=== false){
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
                        <div>
                            <div>
                                <input className="username" type="text" placeholder="nombre..." onKeyUp={formnombre} onKeyPress={keypress}></input>
                                <input className="phone" type="tel" placeholder="telefono..." onKeyUp={formtel} onKeyPress={keypress}></input>
                                <input className="email" type="email" placeholder="email..." onKeyUp={formmail} onKeyPress={keypress}></input>
                                <input className="email" type="email" placeholder="nuevamente el email" onChange={validarmail} onKeyPress={keypress}></input>
                            </div>
                            <div>
                                <button onClick={validate}>Confirmar</button>
                            </div>
                        </div>  
                        <div className="botones1">
                            <Link to="/"><button className={"boton_borrar"} onClick={()=> clear.clearCart()}>Borrar pedido</button></Link>             
                            <button onClick={createOrder}className={claseOrden}>Generar orden</button>
                        </div>                    
                    </div>
                </>
                )
            }else if(ordenHecha){
                return(
                    <>
                    <div>
                        <h1>Su orden fue hecha!</h1>
                        <p>El ID de compra es: <strong>{ID}</strong></p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                    </>
                )
            }
}

export default Cart