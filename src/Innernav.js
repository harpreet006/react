import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


class Innernav extends React.Component{	
  	constructor(props){
    	super(props);
    	this.state={
    	}
  	}
	render(){
		return(
			<aside class="hidden-xs col-sm-3">
				<ul>
					<Link className="nav-link" to='/email/index'>Index</Link>
					<Link className="nav-link" to='/email/spam'>Spam</Link>
					<Link className="nav-link" to='/email/delete'>Deleted Items</Link>
					<Link className="nav-link" to='/email/customfolder'>Custom Folder</Link>
				</ul>
			</aside>
		)
	}
}

export default Innernav	