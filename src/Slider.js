import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
class Slider extends React.Component{	
	render(){
		return(<div id="demo" className="carousel slide" data-ride="carousel"> 
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul> 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" height="500" />
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago"  height="500" />
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York"  height="500" />
    </div>
  </div>
   
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>)
	}
}
export  default Slider ;