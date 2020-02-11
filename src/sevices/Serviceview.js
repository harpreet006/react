import React  from 'react'; 
import Innernav from './Innernav';
import Tableshow from './Tableshow';
import axios from 'axios';
import Popup from "reactjs-popup";
import swal from 'sweetalert';

// import { Link } from 'react-router-dom';
class Serviceview extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        data:[]
      }
    }

    componentDidMount(){
      const thisreact=this;
      thisreact.setState({loader:true})
      const getCt="chandigarh"
      axios.get('http://localhost:4001/service/'+getCt)
      .then(function (response) {
        thisreact.setState({data:response.data.data,loader:false})
      })
      .catch(function (error) {
       thisreact.setState({data:{'status':'false'},loader:false})
      }); 
    }
    click(getID) {
      const thisreact=this;
      thisreact.setState({loader:true})
      const getCt=getID.target.text
      // alert(getCt)
      axios.get('http://localhost:4001/service/'+getCt)
      .then(function (response) {
        thisreact.setState({data:response.data.data,loader:false})
      })
      .catch(function (error) {
       thisreact.setState({data:{'status':'false'},loader:false})
      });
    }
  render(){
    let renderCom='';    
    return(<div class="row re45">
    <div class="col-sm-2"><Innernav clickHandler={()=>this.click.bind(this)} /></div>
  <div class="col-sm-10 r45Sect"><Tableshow key='wedding' data={this.state.data} /></div>
</div>)
  }
}
export  default Serviceview ;
