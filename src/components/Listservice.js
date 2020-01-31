import React  from 'react';
import axios from 'axios';
import Loadershow from '../LoaderComponents'
class Listservice extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        users:[],
        loader:false,
      }
    }
    looptable(){
      let dataSection=this.props.data      
      return (dataSection.map((e,key)=>            
            <tr>
            <th scope="row">{key}</th>
            <td>{e.name}</td>
            <td>{e.name}</td>
            <td>{e.name}</td>
          </tr>        
          ))
    }
 
  render(){   
    let showResult=''        
      if(this.state.users.length){
          showResult=
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
              <tbody>
                {this.looptable()}
              </tbody>
            </thead>  
          </table>
      }else{
        showResult=<Loadershow status={true} />
      }  
    return(showResult)
  }
}
export  default Listservice ;