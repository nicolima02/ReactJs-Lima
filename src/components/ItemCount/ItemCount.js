import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = (props) =>{
    const [count, setCount] = useState(parseInt(props.initial))

    const decrement = ()=>{
        if (props.initial < count){
            setCount(count-1) 
        }
        
    }
    const increment = () =>{
        if (props.stock > count){
            setCount(count+1)
            }
        
    }
    return(
        <div>
            <h1>{count}</h1>
            <div className='botones-agregar'>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
                <button>Agregar Productos</button>
            
        </div>
    )
}

export default ItemCount 
