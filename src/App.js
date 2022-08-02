import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
