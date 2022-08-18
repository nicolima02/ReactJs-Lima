import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"
import {useState} from "react"
import {useContext} from "react"
import {context} from "../../CartContext"


const ItemDetail = ({id, nombre, img, precio, stock, descripcion}) => {
    const addItem = useContext(context)
    const contador = useContext(context)
    const getProductQuantity = useContext(context)
    const [cantidad, setCantidad] = useState(0)
    
    const holdOnAdd = (cant) =>{
        setCantidad(cantidad)        
        addItem.addItem({id,nombre,precio,cant})
        contador.cambiarConteo()
    }
    return(
        
        <> <div className="contenedor">
                <p>{nombre}</p>
                <img src={img} alt=""></img>
                <p>${precio}</p>
                <p>Stock disponible: {stock}</p>
                <p>Descripcion:  {descripcion}</p>
                <ItemCount initial={1} stock={stock} onAdd={holdOnAdd} /> 
            </div> 
        </>
    )
}
export default ItemDetail