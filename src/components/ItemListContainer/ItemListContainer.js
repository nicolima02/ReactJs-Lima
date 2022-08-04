import {getProductos, getProductByCategory} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"
const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()
    useEffect (() => {
        const asyncFunction = categoriaId ? getProductByCategory : getProductos
        asyncFunction(categoriaId).then(response =>{
            setProductos(response)
        })
        
        
    }, [categoriaId])


    return( 
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer