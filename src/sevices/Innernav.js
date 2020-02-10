import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Innernav extends React.Component{	
  	constructor(props){
    	super(props);
    	this.state={
    		data:[]
    	}	
	  } 
	
	render(){
		var urlnavbar='';
		if(this.props.url !=undefined){
			urlnavbar=this.props.url;
		}
		return(
			<aside class="hidden-xs col-sm-3">
				<ul>
					<Link className="nav-link" onClick={this.props.clickHandler('chandigarh')} >chandigarh</Link>
					<Link className="nav-link" onClick={this.props.clickHandler('mohali')}>mohali</Link>
					<Link className="nav-link" onClick={this.props.clickHandler('punchkula')} >punchkula</Link>
					<Link className="nav-link" onClick={this.props.clickHandler('delhi')}>delhi</Link>
				</ul>
			</aside>
		)
	}
}

export default Innernav	