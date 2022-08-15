import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({productos, setPage, id}) =>{
    return(
        <li>
            <div className="contenedor">

                <p>{productos.nombre}</p>
                <img src={productos.img} alt=""></img>
                <p>Precio: ${productos.precio}</p>
                <Link to= {`/detalle/${id}`} className="boton">Ver Detalle</Link>
            </div>
        </li>
    )
}

export default Item