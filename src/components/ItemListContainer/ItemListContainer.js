//import {getProductos, getProductByCategory} from "../../asyncMock" 
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"
import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../services/firebase/index"
const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()
    useEffect (() => {

        const collectionRef = !categoriaId ? collection(db, "products") : query(collection(db, "products"), where("categoria", "==", categoriaId))

        getDocs(collectionRef).then(response=>{
            const productos = response.docs.map(doc =>{
                const values = doc.data()
                return { id: doc.id, ...values}
            })
            setProductos(productos)
        })


        
        
    }, [categoriaId])


    return( 
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer