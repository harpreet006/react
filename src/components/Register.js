import React  from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoaderComponents from '../LoaderComponents';
class Register extends React.Component{	
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"",
      email:"",
      usertype:"",     
      password:"",
      message:"",
      LoaderComponents:false,
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }

  changefun=(e)=>{
    // console.log(e.target.value,"**********")
    this.setState({[e.target.name]: e.target.value},function(){
      // console.log(this.state)
    })
  }

  checkformsubmit= (e)=>{
    e.preventDefault()
    // console.log(this.state.message)  
    if(this.state.fname==""){
      this.setState({message:"First Name is empty"})
      return false;
    }
    if(this.state.lname==""){
      this.setState({message:"Last Name is empty"})
      return false;
    }    
    if(this.state.email==""){
      this.setState({message:"Email is empty"})
      return false;
    }
    if(this.state.usertype==""){
      this.setState({message:"Select user Type"})
      return false;
    }
    if(this.state.password==""){
      this.setState({message:"password is empty"})
      return false;
    }
    // this.setState({LoaderComponents:true})
    let  arraydefind=this.state.users
    const id1 = new Date();
    let RegisterAry= {'name':this.state.fname,'email':this.state.lname,'password': this.state.email,'type':this.state.usertype}
    axios.post('http://localhost:4000/register', RegisterAry)
    .then(function (response,hj) {
      // this.setState({LoaderComponents:false})
      // this.setState({message:response.data.message})
    }).catch(function (error) {
    // this.setState({LoaderComponents:false})
    console.log(error,"ssssss");
    });
  }

	render(){
		return(
    <div className="container registersetion">
      <LoaderComponents status={this.state.LoaderComponents} />
      <div className="error-msg">{this.state.message}</div>
        <form action="">
          <div className="form-group">
            <label for="pwd">First Name:</label>
            <input type="text" className="form-control" name="fname" id="pwd" onChange={this.changefun} />
          </div>
          <div className="form-group">
            <label for="pwd">Last Name:</label>
            <input type="text" className="form-control" name="lname" id="pwd" onChange={this.changefun} />
          </div>
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="text" className="form-control" name="email" id="email" onChange={this.changefun} />
          </div>
          <div className="form-group">
            <label for="email">User Type:</label>
            <select class="custom-select custom-select-sm" name="usertype" onChange={this.changefun}>
              <option>Select User Type</option>
              <option value="1">User1</option>
              <option value="2">User2</option>
              <option value="3">User3</option>
            </select>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" name='password' id="pwd" onChange={this.changefun} />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Register</button>
        </form>
      </div>
      )
	}
}
export  default Register ;