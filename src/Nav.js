import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/catering.jpg';
import Slider from './Slider.js';
import Register from './Register.js';
class Nav extends React.Component{
  render(){
    return( <Router><nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img style={{width:80}} src={logo} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item"> 
       <Link className="nav-link" to='/register'>Register</Link>
      </li>
       <li className="nav-item"> 
       <Link className="nav-link" to='/email/index'>Users</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
       <Link className="nav-link" to='/action'>Action</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
<Switch>
 <Route exact path="/"><Slider /></Route>
  <Route  exect path="/register" component={Register}>           
  </Route>
  <Route  exect path="/users"> 
  </Route>
   <Route exect path="/index" component={Register}>
  </Route> 
</Switch>
</Router>)
  }
}
export  default Nav;