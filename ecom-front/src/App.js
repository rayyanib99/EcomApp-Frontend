import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ListProducts from './components/ListProducts';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <ListProducts/>
     
    </div>
  );
}

export default App;