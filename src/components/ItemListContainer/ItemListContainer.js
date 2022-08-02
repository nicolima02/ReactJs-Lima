import {getProductos} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({props}) =>{
    const [productos, setProductos] = useState([])
    useEffect (() => {
        getProductos().then(response => {
            setProductos(response)
        })
    }, [])

    return( 
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer