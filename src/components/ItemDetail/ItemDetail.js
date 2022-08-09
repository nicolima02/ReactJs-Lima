import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({OnAdd ,nombre, img, precio, stock, descripcion}) => {
    
    const handleOnAdd = (cantidad)=>{
        

    }

    return(
        
        <> <div className="contenedor">
                <p>{nombre}</p>
                <img src={img} alt=""></img>
                <p>${precio}</p>
                <p>Stock disponible: {stock}</p>
                <p>Descripcion:  {descripcion}</p>
                <ItemCount initial="0" stock={stock} onAdd={handleOnAdd}/> 
            </div> 
        </>
    )
}
export default ItemDetail