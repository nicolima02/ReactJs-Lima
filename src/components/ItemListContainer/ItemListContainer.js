import {getProductos, getProductByCategory} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"
const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const params = useParams()
    useEffect (() => {
        if (params.categoriaId){
            getProductByCategory(params.categoriaId).then(response => {
                setProductos(response)
            })
        }else{
            getProductos().then(response => {
            setProductos(response)
        })
        }
        
    }, [params.categoriaId])


    return( 
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer