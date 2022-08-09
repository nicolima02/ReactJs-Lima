import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Context from "./Context"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Context>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
          </Routes>
          </Context>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
