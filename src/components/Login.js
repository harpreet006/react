import React  from 'react';

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

    checkformsubmit=(e)=>{
      e.preventDefault()
      if(this.state.username==""){
        this.setState({message:"Username is empty"})
        return false;
      }
      if(this.state.password==""){
        this.setState({message:"Password is empty"})
        return false
      }
      const loginAy={username:this.state.username,password:this.state.password}
      console.log('login successfully',loginAy)
      // axios.post('/login', loginAy)
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });    
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