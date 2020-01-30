import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
import MiddleComponents from './MiddleComponents.js';
import img1 from '../images/slide-01.jpg';
import img2 from '../images/slide-02.jpg';
import img3 from '../images/slider.jpg';
class Slider extends React.Component{	
	render(){
		return(<div>
    <div id="demo" className="carousel slide" data-ride="carousel"> 
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul> 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" height="500" />
      <div className="carousel-caption d-none d-md-block">
        <h5>ARE YOU HUNGRY ?r</h5>
        <p>RECIPIES THAT ARE SIMPLY DELICIOUS</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago"  height="500" />
      <div className="carousel-caption d-none d-md-block">
        <h5>ARE YOU HUNGRY ?r</h5>  
        <p>WHY DON'T YOU TASTE IT?</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York"  height="500" />
      <div className="carousel-caption d-none d-md-block">
        <h5>HAVE A LOOK r</h5>
        <p>RECIPIES THAT ARE SIMPLY DELICIOUS</p>
      </div>
    </div>
  </div>
   
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
<MiddleComponents /></div>
)
	}
}
export  default Slider ;