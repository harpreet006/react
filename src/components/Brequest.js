import React  from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import swal from 'sweetalert';
// import Wedding from '../sevices/Wedding.js';
// import Corporate from '../sevices/Corporate.js';
// import Social from '../sevices/Social.js';
class Services extends React.Component{ 
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    let thisreact=this;
    axios.get('http://localhost:4001/getBooking')
      .then(function (response) { 
        thisreact.setState({data:response.data.data})
        console.log(response.data.data)
      // thisreact.setState({data:response.data.data,color:'green',loader:false}) 
    })
    .catch(function (error) {
      console.log('Get Booking responce catch error')
    // thisreact.setState({message:error.response.data.message,color:'red',loader:false});
    }); 
  }
  approved=()=>{
    swal('Already approved');
  }
  approvedClick=(id) => {
     var thisreact= this
     axios.get('http://localhost:4001/getBooking/'+id)
      .then(function (response) {
        swal(response.data.message);
        axios.get('http://localhost:4001/getBooking')
        .then(function (response) { 
          thisreact.setState({data:response.data.data})
          console.log(response.data.data)         
      })
      .catch(function (error) {
        console.log('Get Booking responce catch error')
      });
    })
    .catch(function (error) {
      swal('Error');
    });
  }

  looptable(){
    let dataSection=this.state.data 
    return (dataSection.map((e,key)=>          
          <tr key={key}>
          <th scope="row">{key+1}</th>
          <td>{e.service_name}</td>
          <td>{e.city}</td>
          <td>
            {e.status?<Link className="nav-link" onClick={this.approved}>Approved</Link>:<Link className="nav-link" onClick={()=>this.approvedClick(e.book_ID)}>Request Accepted</Link>}
          </td>
        </tr>        
        ))
  }
   
  render(){    
    if(this.state.data.length){ 
    return(  <table class="table">
            <thead><Link className="nav-link" to="/request">Book Request</Link>{this.state.message}
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Service Name</th>
                <th scope="col">City</th>
                  <th scope="col">Action</th>
              </tr>
            
                {this.looptable()}
              
            </thead>  
          </table>)
        }else{
          return("No Found Data")
        }
  }
}
export  default Services ;