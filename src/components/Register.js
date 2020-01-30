import React  from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
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
    console.log(this.state.message)  
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
    let  arraydefind=this.state.users
    const id1 = new Date();
    //arraydefind.push({userId:id1.getTime(), fname:this.state.fname,email:this.state.email,password: this.state.password});
    let RegisterAry= {'fname':this.state.fname,'lname':this.state.lname,'email': this.state.email,'usertyle':this.state.usertype,'password':this.state.password}
    console.log('Success fully register',RegisterAry)
    // axios.post('/register', RegisterAry)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });    
    
    console.log(RegisterAry)
    return false;

  }

	render(){
		return(
    <div className="container registersetion">
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