import { createContext, useState} from "react"
export const context= createContext()
const {Provider} = context

const CartContext = ({children}) =>{
    const [contador, setContador] = useState(0)
    const cambiarConteo = ()=>{
        let acc = 0
        cart.forEach(prod => acc += prod.cant)
        return acc
    }
    
    const [cart, setCart] = useState([])
    const addItem = (productAdd) => {
        if (!isInCart(productAdd.id)){
            setCart([...cart, productAdd])
        }else{
            const cartUpdated = cart.map(prod => {
                if(prod.id === productAdd.id){
                    const newProduct = {
                        ...prod, 
                        cant: productAdd.cant
                    }
                    return newProduct
                }else{
                    return prod
                }
            })
            setCart(cartUpdated)
        }
        
        
    }
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    } 

    const clearCart = () =>{
        setCart([])
    }

    const getProductQuantity = (id) =>{
        const product = cart.find(prod=> prod.id === id)
        return product?.cant
    } 

    const metodos ={
        cambiarConteo,
        contador,
        addItem,
        cart,
        isInCart,
        removeItem,
        clearCart,
        getProductQuantity

    }
    return <Provider value={metodos}>{children}</Provider>
}

export default CartContext