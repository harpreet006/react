import React  from 'react';
import axios from 'axios';
class Login extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        message:'',
        username:'',
        password:'',
      }
    }
    getonchange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }

     checkformsubmit= async (e)=>{
      e.preventDefault()
      if(this.state.username==""){
        this.setState({message:"Username is empty"})
        return false;
      }
      if(this.state.password==""){
        this.setState({message:"Password is empty"})
        return false
      }
      const loginAy={email:this.state.username,password:this.state.password}
      // console.log('login successfully',loginAy)      
      axios.post('http://localhost:4000/login', loginAy)
      .then(function (response,hj) {
        console.log(response)
        // this.setState({LoaderComponents:false})
        // this.setState({message:response.data.message})
      }).catch(function (error,kl) {
        // this.setState({LoaderComponents:false})
      console.log(error,kl,"ssssss");
      });

       

    }
  render(){ 
    return(<div className="container registersetion">
    <div className="error-msg">{this.state.message}</div>
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
      </form>
    </div>)
  }
}
export  default Login ;