import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({nombre, img, precio, stock, descripcion}) => {

    return(
        
        <> <div className="contenedor">
                <p>{nombre}</p>
                <img src={img} alt=""></img>
                <p>${precio}</p>
                <p>Stock disponible: {stock}</p>
                <p>Descripcion:  {descripcion}</p>
                <ItemCount initial="0" stock={stock}/> 
            </div> 
        </>
    )
}
export default ItemDetail