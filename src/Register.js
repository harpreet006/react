import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Register extends React.Component{	
  constructor(props){
    super(props);
    this.state={
      fname:"",
      email:"",
      password:"",
      message:"",
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }
  changeName=(e)=>{
    console.log(e.target.value,"**********")
    this.setState({fname: e.target.value})
  }
  changeEmail=(e)=>{
    console.log(e.target.value,"**********")
    this.setState({email: e.target.value})    
  }
  changePassword=(e)=>{
    console.log(e.target.value,"**********")
    this.setState({password: e.target.value})
  }
  checkformsubmit= (e)=>{
    e.preventDefault()
    console.log(this.state.message)  
    if(this.state.fname==""){
      this.setState({message:"Fname is empty"})
      return false;
    }
    if(this.state.email==""){
      this.setState({message:"Email is empty"})
      return false;
    }
    if(this.state.password==""){
      this.setState({message:"password is empty"})
      return false;
    }
    let  arraydefind=this.state.users
    const id1 = new Date();
    arraydefind.push({userId:id1.getTime(), fname:this.state.fname,email:this.state.email,password: this.state.password});
    localStorage.setItem("usersSet", JSON.stringify(arraydefind));
    this.setState({message:"Succesfully Saved"})
    this.props.history.push('/action')
  }

	render(){
		return(<div className="container"><div>{this.state.message}</div><form action="">
    <div className="form-group">
      <label for="pwd">Name:</label>
      <input type="text" className="form-control" id="pwd" onChange={this.changeName} />
    </div>
    <div className="form-group">
      <label for="email">Email address:</label>
      <input type="text" className="form-control" id="email" onChange={this.changeEmail} />
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" onChange={this.changePassword} />
    </div>
    <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Submit</button>
</form></div>)
	}
}
export  default Register ;