import React  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loadershow from '../LoaderComponents'
class Superadmin extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        message:'',        
        data:'',
        color:'',        
        users:JSON.parse(localStorage.getItem("usersSet"))||[],
        loader:false,
      }
  }
  componentDidMount(){
    let thisreact=this;
      axios.get('http://localhost:4001/users')
        .then(function (response) { 
        thisreact.setState({data:response.data.data,color:'green',loader:false}) 
    })
    .catch(function (error) {
      // thisreact.setState({message:error.response.data.message,color:'red',loader:false});
    }); 
  }

  deleteUser=(e)=>{
    let thisreact=this;
    axios.get('http://localhost:4001/delete/'+e)
        .then(function (response) {
        thisreact.setState({message:response.data.message}) 
        axios.get('http://localhost:4001/users')
        .then(function (response) { 
        thisreact.setState({data:response.data.data,color:'green',loader:false}) 
    })
    .catch(function (error) {
      // thisreact.setState({message:error.response.data.message,color:'red',loader:false});
    }); 
    })
    .catch(function (error) {
      // thisreact.setState({message:response.data.message}) 
      thisreact.setState({message:error.response.data.message,color:'red',loader:false});
    }); 
    this.props.history.push('/admin')

  }

     looptable(){
      let dataSection=this.state.data  
      // console.log(dataSection,"JJJ")
      // alert("dsds")    
      return (dataSection.map((e,key)=>
            <tr>
            <th scope="row">{key+1}</th>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.type}</td>
            <td><Link className="nav-link" onClick={()=> this.deleteUser(e.email)}>Remove</Link></td>
          </tr>        
          ))
    }
   
  render(){ 
    if(this.state.data.length){ 
    return(  <table class="table">
            <thead><Link className="nav-link" to="/request">Book Request</Link>{this.state.message}
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Type</th>
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
export  default Superadmin ;