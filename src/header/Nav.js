import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../images/catering.jpg';
import Slider from '../components/Slider.js';
import Register from '../components/Register.js';
import Login from '../components/Login.js';
import Services from '../components/Services.js';
import Serviceview from '../sevices/Serviceview.js';
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
       <Link className="nav-link" to='/user/login'>Login</Link>
      </li>       
    </ul>
  </div>
</nav>
<Switch>
 <Route exact path="/"><Slider /></Route>
  <Route   path="/register" component={Register}>           
  </Route>
  <Route   path="/user/login" component={Login}> 
  </Route>
  <Route  path="/index" component={Register}>
  </Route>
  <Route  path="/services/:keys/:categorie" component={Serviceview}>
  </Route>
  <Route  path="/services/:keys/" component={Services}>
  </Route>
</Switch>
</Router>) 
  }
}
export  default Nav;