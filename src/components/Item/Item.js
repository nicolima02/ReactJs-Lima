const Item = ({productos}) =>{
    return(
        <li key={productos.codigo}>{productos.nombre}</li>
    )
}

export default Item