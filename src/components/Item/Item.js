import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
const Item = ({productos}) =>{
    return(
        <li key={productos.codigo}>
            <div className="contenedor">
                <p>{productos.nombre}</p>
                <img src={productos.img} alt=""></img>
                <p>${productos.precio}</p>
                <ItemCount initial="0" stock="50"/>
            </div>
        </li>
    )
}

export default Item