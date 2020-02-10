import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { matchPath } from 'react-router';
import logo from '../images/catering.jpg';
import Slider from '../components/Slider.js';
import Register from '../components/Register.js';
import Login from '../components/Login.js';
import Services from '../components/Services.js';
import Admin from '../components/Admin.js';
import Superadmin from '../components/Superadmin.js';
import Serviceview from '../sevices/Serviceview.js';
import Listservice from '../components/Listservice';
import Afterlogin from '../components/Afterlogin';
import Aboutus from '../components/Aboutus';
import Contactus from '../components/Contactus';
// import Logout from '../components/Logout';
class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }


  logout=(e)=>{
    localStorage. clear();
    document.location.href="/";
  }
  
  render(){
    setTimeout(function(){ 
     localStorage.clear();
    }, 100000);
    // console.log(window.location.pathname,"dddddddddd")
      let afterloginsection=(<li className="nav-item active">
       <Link className="nav-link" to="/register" onClick={this.logout}>Logout</Link>
      </li>);
      if (window.location.pathname !="/tracking") {
      afterloginsection = <Afterlogin />;
    }  
    
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
     {afterloginsection} 
     <li className="nav-item active">
       <Link className="nav-link" to="/aboutus">About Us</Link>
      </li> 
      <li className="nav-item active">
       <Link className="nav-link" to="/contactus">Contact Us</Link>
      </li> 
      
    </ul>
  </div>
</nav>
<Switch>
 <Route exact path="/"><Slider /></Route>
  <Route path="/register" component={Register}>           
  </Route>
  <Route path="/tracking"  render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={Admin}  exact />
        <Route path={`${url}/list`}  component={Listservice}  exact />
      </>
    )}>           
  </Route>
  <Route path="/admin" component={Superadmin}>           
  </Route>
  <Route   path="/user/login" component={Login}> 
  </Route>
  <Route  path="/index" component={Register}>
  </Route>
  <Route  path="/services/:keys/:categorie" component={Serviceview}>
  </Route>
  <Route  path="/services/:keys/" component={Services}>  
  </Route>

<Route  path="/aboutus/" component={Aboutus}>  
  </Route>
  <Route  path="/contactus/" component={Contactus}>  
  </Route>
  

</Switch>
</Router>) 
  }
}
export  default Nav;