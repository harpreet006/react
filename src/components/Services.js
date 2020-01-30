import React  from 'react'; 
import Wedding from '../sevices/Wedding.js';
import Corporate from '../sevices/Corporate.js';
import Social from '../sevices/Social.js';
class Services extends React.Component{ 
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props,"12")    
    let bllogrander='';
    if(this.props.match.params.keys=="wedding"){
      bllogrander= <Wedding url={this.props.location.pathname+'/'} />;      
    } 
    if(this.props.match.params.keys=="corporate"){
      bllogrander= <Corporate  url={this.props.location.pathname+'/'} />;
    }
    if(this.props.match.params.keys=="social"){
      bllogrander= <Social url={this.props.location.pathname+'/'} />;
    } 
    return (bllogrander)

  }
}
export  default Services ;