import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';


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
