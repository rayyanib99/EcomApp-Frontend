import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import ListProducts from './components/ListProducts';
import User from './components/User';
import AddUser from './components/AddUser';

function App() 
{
  return (
    <div className="App">
    <Router>
       <Navbar/>
        <div className='container'>
            <Switch>
              <Route exact path = "/" component = {ListProducts}></Route>
              <Route path = "/users" component = {User}></Route>
              <Route path = "/add-user" component = {AddUser} ></Route>
              <Route path = "/edit-user/:id" component = {AddUser}></Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}
 
export default App;