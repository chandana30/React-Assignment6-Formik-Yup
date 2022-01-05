import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar /> 

      <Switch >
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
