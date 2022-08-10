import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {useState} from "react"
import CartContext from "./CartContext"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [cart, setCart] = useState([])
  const addItem = (productAdd) => {
    setCart([...cart, productAdd])
  }
  return (
    <div className="App">
      <header>
        <CartContext>
        <BrowserRouter>         
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:productoId" element={<ItemDetailContainer addItem={addItem}/>}/>
          </Routes>         
        </BrowserRouter>
        </CartContext>
      </header>
    </div>
  );
}

export default App;
