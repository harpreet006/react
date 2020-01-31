import React  from 'react';
import axios from 'axios';
import Loadershow from '../LoaderComponents'
class Login extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        message:'',
        username:'',
        password:'',
        color:'',
        users:JSON.parse(localStorage.getItem("usersSet"))||[],
        loader:false,
      }
    }
    getonchange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    checkformsubmit=(e)=>{
      e.preventDefault()
      let thisreact=this;
      if(this.state.username==""){
        this.setState({message:"Username is empty",color:'red'})
        return false;
      }
      if(this.state.password==""){
        this.setState({message:"Password is empty",color:'red'})
        return false
      }
      this.setState({message:"",loader:true})
      const loginAy={email:this.state.username,password:this.state.password}
      axios.post('http://localhost:4000/login', loginAy)
      .then(function (response) { 
        thisreact.setState({message:response.data.message,color:'green',loader:false});         
        thisreact.props.history.push('/admin')
      })
      .catch(function (error) {
        thisreact.setState({message:error.response.data.message,color:'red',loader:false});
      });   
    }
  render(){ 
    return(<div className="container registersetion">
    <div className="error-msg" style={{color:this.state.color}}>{this.state.message}</div>
      <form action="">
        <div className="form-group">
          <label for="pwd">Username:</label>
          <input type="text" className="form-control" name="username" id="pwd" onChange={this.getonchange} />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="text" className="form-control" name="password" id="pwd" onChange={this.getonchange} />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Login</button>
        <div><Loadershow status={this.state.loader} /></div>
      </form>
    </div>)
  }
}
export  default Login ;