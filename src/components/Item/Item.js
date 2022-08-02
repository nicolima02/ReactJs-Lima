import "./Item.css"
// import ItemCount from "../ItemCount/ItemCount"
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const Item = ({productos}) =>{
    return(
        <li key={productos.codigo}>
            <div className="contenedor">
                <p>{productos.nombre}</p>
            </div>
        </li>
    )
}

export default Item