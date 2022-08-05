import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ListProducts from './components/ListProducts';
import Order from './components/Order';
import Cart from './components/Cart';
import  User  from './components/User';
 
function App() {
  return (
    <div className="App">
    
      <Router>
       <Navbar/>
        <div className='container'>
            <Switch>
              <Route exact  path = "/" component = {ListProducts}></Route>
              <Route path = "/Orders" component = {Order}></Route>
              <Route path = "/Cart" component = {Cart}></Route>
              <Route path = "/Users" component = {User}></Route>
            </Switch>
        </div>
      </Router>
     
    </div>
  );
}
 
export default App;