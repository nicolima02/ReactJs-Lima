import { createContext, useContext, useState} from "react"
export const context= createContext()
const {Provider} = context

const Context = ({children}) =>{
    const [contador, setContador] = useState(0)
    const cambiarConteo = (e)=>{
        setContador(e)
    }
    console.log(contador)
    const metodos ={
        cambiarConteo,
        contador
    }
    return <Provider value={metodos}>{children}</Provider>
}

export default Context