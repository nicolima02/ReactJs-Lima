import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer saludo="Bienvenido usuario"/>
      </header>
    </div>
  );
}

export default App;
