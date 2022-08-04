import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
// import {useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
