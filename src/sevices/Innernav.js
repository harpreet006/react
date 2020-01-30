import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Innernav extends React.Component{	
  	constructor(props){
    	super(props);
    	this.state={
    	}	
	  } 
	render(){
		console.log(this.props.url,'navbar section')
		var urlnavbar='';
		if(this.props.url !=undefined){
			urlnavbar=this.props.url;
		}
		return(
			<aside class="hidden-xs col-sm-3">
				<ul>
					<Link className="nav-link" to={urlnavbar+'chandigarh'}>Chandigarh</Link>
					<Link className="nav-link" to={urlnavbar+'mohali'}>Mohali</Link>
					<Link className="nav-link" to={urlnavbar+'panchkula'}>Panchkula</Link>
					<Link className="nav-link" to={urlnavbar+'delhi'}>Delhi</Link>
				</ul>
			</aside>
		)
	}
}

export default Innernav	