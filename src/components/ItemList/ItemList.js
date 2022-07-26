import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map(productos => (
            <Item productos={productos}/>))}
        </ul>
    )
}

export default ItemList