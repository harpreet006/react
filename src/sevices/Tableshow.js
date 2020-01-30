import React  from 'react'; 
import LoaderComponents from '../LoaderComponents';
class Tableshow extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        data:''
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
      if(this.props.data.length){
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
        showResult=<LoaderComponents status={true} />
      }  
    return(showResult)
  }
}
export  default Tableshow ;