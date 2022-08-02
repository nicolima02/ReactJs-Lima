import {getProducto} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState([])
    useEffect (() => {
        getProducto().then(response => {
            setProducto(response)
        })
    }, [])

    return( 
        <>
            <ItemDetail producto={producto}/>
        </>
    
        

    )
    }
export default ItemDetailContainer