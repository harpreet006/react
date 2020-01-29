
import React from 'react';
import { BrowserRouter, Route ,Switch,Link} from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Slider from './Slider.js';
import Footer from './Footer.js';
import MiddleComponents from './components/MiddleComponents.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App(argument) {
  return (<div><Nav /><MiddleComponents /><Footer /></div>)
}
export default App
