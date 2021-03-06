import React  from 'react'; 
// import { Link } from 'react-router-dom';
import Innernav from './Innernav';
import Serviceview from './Serviceview';
import Tableshow from './Tableshow';
class Corporate extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        data:[]
      }
    }     
  render(){ 
      let url='';
      if(this.props.url.length){
        url=this.props.url;
      }else{
        url='';
      } 
    return(
      <div class="row re45">
          <div class="col-sm-2"><Innernav url={url} /></div>
          <div class="col-sm-10 r45Sect"><Tableshow key='wedding' data={this.state.data} /></div>
      </div>
    )
  }
}
export  default Corporate ;