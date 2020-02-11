import React  from 'react'; 
import LoaderComponents from '../LoaderComponents';
import axios from 'axios';
import swal from 'sweetalert';

class Tableshow extends React.Component{ 
  constructor(props){
      super(props)
      this.state={  
        // data:[],
        // test:''      
      }
      // alert('dfs')
    }
   
  book=(item,getID)=>{
      const thisreact=this
      if(item==1){
        swal("Already Book");
        return false
      }

    swal("Write something here:", {
      content: "input",
    })
    const logId=JSON.parse(localStorage.getItem("usersSet"))
      // alert(logId)
      if(logId){
      let Service= {'getID':getID,'logid':logId}
      axios.post('http://localhost:4001/getBooking/add',Service)    
      .then(function (response) {
        if(response.data.status==="exist"){
          swal("Your request is in queue");
          return false
        }
      })
      .catch(function (error) {
        console.log(error,"Error section")
      }); 
    }else{
        swal("Please Login first"); 
    }
    }

    looptable(){
      // this.setState({data:this.props.data}) 
      let dataSection=this.props.data;
      // console.log(dataSection,'Hello')      
      return (dataSection.map((e,key)=>            
            <tr>
            <td scope="row" key={key}>{key}</td>
            <td>{e.service_name}</td>
            <td>{e.city}</td>
            <td>{e.price}</td>
            <td><button type="submit" className="btn btn-default" onClick={()=>this.book(e.status,e.id)} >{(e.status)?'Book' : 'booking'}</button></td>
          </tr>        
          ))
    }
  render(){
      console.log(this.props.data)
      let showResult=''        
      if(this.props.data.length){

          showResult=
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th> 
                <th>Action</th> 
              </tr>
              </thead>
              <tbody>
                {this.looptable()}
              </tbody>
              
          </table>
      }else{
        showResult=<LoaderComponents status={true} />
      }  
    return(showResult)
  }
}
export  default Tableshow ;