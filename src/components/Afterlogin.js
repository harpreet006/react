import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Afterlogin extends React.Component{ 
  constructor(props){
      super(props)
       
  }
   
   
  render(){ 
    return(<ul className="navbar-nav mr-auto">      
     <li className="nav-item"> 
       <Link className="nav-link" to='/register'>Register</Link>
      </li>
       <li className="nav-item"> 
       <Link className="nav-link" to='/user/login'>Login</Link>
      </li>  
    </ul>)
  }
}
export  default Afterlogin ;