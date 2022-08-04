import Item from "../Item/Item"
import "./ItemList.css"
const ItemList = ({productos}) => {
    return (
        <ul className="lista-productos">
            {productos.map(productos => (
            <Item productos={productos} key={productos.id} {...productos}/>))}
        </ul>
    )
}

export default ItemList