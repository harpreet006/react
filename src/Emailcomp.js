import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Innernav from './Innernav.js';
import Innernav from './Innernav.js';

class Emailcomp extends React.Component{	
  constructor(props){
    super(props);
    this.state={
    }
  }

	render(){
    const indexfunction=(e)=>{      
      document.getElementById("jumbotron").innerHTML="I am spamfunction function"
    }
    const spamfunction=(e)=>{
      document.getElementById("jumbotron").innerHTML="I am spamfunction function"
    }
    const deletefunction=(e)=>{
        document.getElementById("jumbotron").innerHTML="I am deletefunction function"
      }
    const customfunction=(e)=>{
        document.getElementById("jumbotron").innerHTML="I am customfunction function"
      }

		return(
      <div className="container">
        <main>
          <div class="container-fluid">
            <div class="row">
             <Innernav />
            <div class="content col-sm-9">
              <div className="jumbotron" id="jumbotron">          
            </div>      
            </div>
          </div>
          </div>
        </main>
      </div>)
	}
}
export  default Emailcomp ;