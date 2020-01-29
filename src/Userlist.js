import React  from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Userlist extends React.Component{	
  constructor(props){
    super(props);
    this.state={
      users:JSON.parse(localStorage.getItem("usersSet"))||[]
    }
  }
componentDidMount = (e)=>{
  console.log("&&&&&&&&&&&")
}
renderTableData() {
  const deletclick = (e)=>{
    e.preventDefault();
    const newAry=[];
      this.state.users.map((index) => {
        if(index.userId==e.target.id){
          // console.log(index.fname,"iI am on remove section")
        }else{
          newAry.push(index)
        }
      })
      // users:JSON.parse(localStorage.setItem("usersSet",newAry))
       // let updatedZone = Object.assign({}, newAry)
       console.log(JSON.stringify(newAry),newAry,"**********")
      localStorage.setItem("usersSet",JSON.stringify(newAry))
      this.setState({users:newAry});
    }

  return this.state.users.map((student, index) => {
    const { id, userId, fname, email, password } = student //destructuring
      return (
        <tr key={id}>
        <td>{id}</td>
        <td>{fname}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td style={{display: "inline-flex"}}><button className="nav-link" id={userId}  onClick={deletclick}>Delete</button> <button className="nav-link"><Link to={`edit/${userId}`}> Edit</Link></button></td>
        </tr>
      )
    })
  }
	render(){
		return(<div className="container"><table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.renderTableData()}
  </tbody>
  </table></div>)
	}
}
export  default Userlist ;