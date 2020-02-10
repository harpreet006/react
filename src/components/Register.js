import React  from 'react';
import axios from 'axios';
import Loadershow from '../LoaderComponents'
import { BrowserRouter as Router, Link } from "react-router-dom";
class Register extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      fname:"",
      email:"",
      usertype:"",     
      password:"",
      message:"",
      color:"",
      loader:false,
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }

  changefun=(e)=>{
    // console.log(e.target.value,"**********")
    this.setState({[e.target.name]: e.target.value},function(){
      console.log(this.state)
    })
  }

  checkformsubmit= (e)=>{
    e.preventDefault()
    let thisreact=this;
    console.log(this.state.message)  
    if(this.state.fname==""){
      this.setState({message:"First Name is empty",color:'red'})
      return false;
    }    
    if(this.state.email==""){
      this.setState({message:"Email is empty",color:'red'})
      return false;
    }
    if(this.state.usertype==""){
      this.setState({message:"Select user Type",color:'red'})
      return false;
    }
    if(this.state.password==""){
      this.setState({message:"password is empty",color:'red'})
      return false;
    }
    this.setState({message:""})
    this.setState({loader:true})
    let  arraydefind=this.state.users
    const id1 = new Date();
    let RegisterAry= {'name':this.state.fname,'email':this.state.email,'type':this.state.usertype,'password':this.state.password}
    axios.post('http://localhost:4001/register', RegisterAry)
    .then(function (response) {
      console.log("ddddddddd");
      thisreact.setState({loader:false})
      thisreact.setState({message:response.data.message,color:'green'});
    })
    .catch(function (error) {
      thisreact.setState({loader:false})
      thisreact.setState({message:error.response.data.message,color:'green'});
    });    
    
    console.log(RegisterAry)
    return false;

  }

  render(){
    return(
    <div className="container registersetion">
      <div className="error-msg" style={{color:this.state.color}}>{this.state.message}</div>
        <form action="">
          <div className="form-group">
            <label for="pwd">First Name:</label>
            <input type="text" className="form-control" name="fname" id="pwd" onChange={this.changefun} />
          </div>           
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="text" className="form-control" name="email" id="email" onChange={this.changefun} />
          </div>
          <div className="form-group">
            <label for="email">User Type:</label>
            <select class="custom-select custom-select-sm" name="usertype" onChange={this.changefun}>
              <option>Select User Type</option>
              <option value="service_provider">Service Provider</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" name='password' id="pwd" onChange={this.changefun} />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Register</button>
        </form>
        <div><Loadershow status={this.state.loader} /></div>
      </div>
      )
  }
}
export  default Register ;