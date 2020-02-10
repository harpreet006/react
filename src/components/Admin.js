import React  from 'react';
import axios from 'axios';
import Loadershow from '../LoaderComponents'
class Admin extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        message:'',
        name:'',
        price:'',
        usertype:'',
        color:'',
        users:JSON.parse(localStorage.getItem("usersSet"))||[],
        loader:false,
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
    if(this.state.name==""){
      this.setState({message:"Name is empty",color:'red'})
      return false;
    }  
    if(this.state.price==""){
      this.setState({message:"price user Type",color:'red'})
      return false;
    }
    if(this.state.usertype==""){
      this.setState({message:"Select city",color:'red'})
      return false;
    }
    this.setState({message:""})
    this.setState({loader:true})
    let  arraydefind=this.state.users
    const id1 = new Date();
    let Service= {'service_name':this.state.name,'user_id':this.state.users,'city':this.state.usertype,'price':this.state.price}
    console.log(Service,"Action")
    axios.post('http://localhost:4001/service/add', Service)
    .then(function (response) {
      //console.log(response)
      thisreact.setState({loader:false})
      thisreact.setState({message:response.data.message,color:'green'});
      // thisreact.props.history.push('/admin/list') 
    })
    .catch(function (error) {
      console.log(error)
      thisreact.setState({loader:false})
      thisreact.setState({message:error.response.data.message,color:'green'});
    });  
  }
 
  render(){
    if(this.state.users.length==0){
     document.location.href="/";  
    }   
    return( <div className="container registersetion">
      <h5>Add your services</h5>
    <div className="error-msg" style={{color:this.state.color}}>{this.state.message}</div>
      <form action="">
        <div className="form-group">
          <label for="pwd">Name:</label>
          <input type="text" className="form-control" name="name" id="pwd" onChange={this.changefun} />
        </div>           
        <div className="form-group">
          <label for="email">Price:</label>
          <input type="number" className="form-control" name="price" id="email" onChange={this.changefun} />
        </div>
        <div className="form-group">
          <label for="email">Select City:</label>
          <select class="custom-select custom-select-sm" name="usertype" onChange={this.changefun}>
            <option>Choose Type</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="mohali">Mohali</option>
            <option value="punchkula">Punchkula</option>
            <option value="delhi">Delhi</option>
          </select>
        </div> 
        <button type="submit" className="btn btn-default" onClick={this.checkformsubmit}>Save</button>
      </form>
      <div><Loadershow status={this.state.loader} /></div>
    </div>)
  }
}
export  default Admin ;