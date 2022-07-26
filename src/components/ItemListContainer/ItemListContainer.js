import {getProductos} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = (props, setShow, show) =>{
    const [productos, setProductos] = useState([])
    useEffect (() => {
        getProductos().then(response => {
            setProductos(response)
        })
    }, [])

    return(
        <>
            <p className="saludo">{props.saludo}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer