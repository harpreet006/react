import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import img1 from './images/catering.jpg';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component{	
	render(){
		return(<div classNameName="container">
<footer className="page-footer font-small teal pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-5 mt-md-0 mt-5">
        <h5 className="text-uppercase font-weight-bold"></h5>
        <p style={{textAlign:"center",marginTop:30}}><SocialIcon url="http://jaketrent.com" network="tumblr" style={{marginRight:10}} />
          <SocialIcon  title='Sign In With Facebook' button style={{marginRight:10}}  type='facebook'/>
          <SocialIcon network="twitter" bgColor="#ff5a01" style={{marginRight:10}} />
          <SocialIcon url="https://www.example.com"  style={{marginRight:10}} label="Our portfolio" />
        </p>
      </div>
      <div className="col-md-2 mt-md-0 mt-2">
        <p><img src={img1} alt="Los Angeles" style={{width:100}} /></p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3" />
      <div className="col-md-5 mb-md-0 mb-5">
        <h5 className="text-uppercase font-weight-bold"></h5>
        <p>
          Find the perfect catering menu template that you can easily customize to suit your catering business. Simply replace the sample text and add your logo and photos. You'll love our rich collection of template designs to enhance your brand. Get started in minutes.
        </p>
      </div>
    </div>
  </div>
</footer></div>)
	}
}
export  default Footer ;