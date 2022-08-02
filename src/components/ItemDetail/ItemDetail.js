import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({producto}) => {
    
    
    return(
        
        <> <div className="contenedor">
                <p>{producto.nombre}</p>
                <img src={producto.img} alt=""></img>
                <p>${producto.precio}</p>
                <p>Stock disponible: {producto.stock}</p>
                <ItemCount initial="0" stock={producto.stock}/> 
            </div> 
        </>
    )
}
export default ItemDetail