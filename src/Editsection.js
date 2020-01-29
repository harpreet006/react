import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Editsection extends React.Component{	
  constructor(props){
    super(props);
    this.state={
      message:'',
      fname:'',
      email:'',
      password:'',
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }
  componentDidMount(){
    this.state.users.map((index)=>{
      if(index.userId==this.props.match.params.id){
        this.setState({fname:index.fname})      
        this.setState({email:index.email})      
        this.setState({password:index.password})      
      }
    })   
  }

  changeName =(e)=>{
    this.setState({fname:e.target.value})
  }
  changeEmail =(e)=>{
    this.setState({email:e.target.value})
  }
 changePassword =(e)=>{
    this.setState({password:e.target.value})
  }  
  checkformsubmit= (e)=>{
    e.preventDefault()
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
    var newArrayupdate=[];
    this.state.users.map((index,key)=>{
      // console.log(key)
      if(index.userId==this.props.match.params.id){
        newArrayupdate[key]  = {userId:this.props.match.params.id,fname:this.state.fname,email:this.state.email,password:this.state.password}
      }else{
         newArrayupdate[key]  = {userId:index.userId,fname:index.fname,email:index.email,password:index.password}
         // console.log({userId:this.props.match.params.id,fname:index.fname,email:index.email,password:index.password})
      }      
    })    
    console.log(newArrayupdate)
    localStorage.setItem("usersSet", JSON.stringify(newArrayupdate));
    this.props.history.push('/action')
  }
	render(){
    // console.log(this.props,"******")
    return (<div className="container"><div>{this.state.message}</div><form action="">
    <div className="form-group">
      <label for="pwd">Name:</label>
      <input type="text" className="form-control" id="pwd" value={this.state.fname} onChange={this.changeName} />
    </div>
    <div className="form-group">
      <label for="email">Email address:</label>
      <input type="text" className="form-control" id="email" value={this.state.email}  onChange={this.changeEmail} />
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={this.changePassword} />
    </div>
    <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Update</button>
</form></div>)
    }	
}
export default Editsection;