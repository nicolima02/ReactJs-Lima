import {getDoc, doc} from "firebase/firestore"
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import {db} from "../../services/firebase/index"


const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const {productoId} = useParams()
    useEffect (() => {
        
        getDoc(doc(db, "products", productoId)).then(response =>{
            const values = response.data()
            const producto = {id: response.id, ...values}
            setProducto(producto)
        })
        
    }, [productoId])
    return( 
        <>
            <ItemDetail producto={producto} {...producto}/>
        </>
    
        

    )
    }
export default ItemDetailContainer