import {getProducto} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () =>{  
    const [producto, setProducto] = useState({})
    const {productoId} = useParams()
    useEffect (() => {
        getProducto(productoId).then(response => {
            setProducto(response)
        })
    }, [])
    return( 
        <>
            <ItemDetail producto={producto} {...producto} />
        </>
    
        

    )
    }
export default ItemDetailContainer