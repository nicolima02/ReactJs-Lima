import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from "./components/Cart/Cart.js"
import CartContext from "./CartContext"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {  
  return (
    <div className="App">
      <header>
        <CartContext>
        <BrowserRouter>         
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>         
        </BrowserRouter>
        </CartContext>
      </header>
    </div>
  );
}

export default App;
