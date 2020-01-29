
import React  from 'react';
import Innernav from './Innernav.js';
import axios from 'axios';
// import dataIndex from './data/custom.json';
import LoaderComponents from "./LoaderComponents.js"
class Customfoldercomponent extends React.Component{ 
  constructor(props){
      super(props)
       this.state = {
         users: [],
         checkboxAry: [],
         selectValue: '0',
         checkboxValue: '0',
         errorSelectMsg: '',
         errorCheckboxMsg: '',
        }
    }

    getAction =(e)=>{
       if(this.state.selectValue==0){
          this.setState({errorSelectMsg:'Please select option'}) 
          return false         
       }else{
        this.setState({errorSelectMsg:' '}) 
       }
      if(this.state.checkboxValue==0){
          this.setState({errorCheckboxMsg:'Please select checkbox'}) 
          return false;         
       }else{
        this.setState({errorCheckboxMsg:' '}) 
       }
      axios.post('http://127.0.0.1:3001/custom', 
        { to:this.state.selectValue,
          pagekey:'custom',
          from:'custom',
          checkbox: this.state.checkboxValue
        }
      )
      .then(res => {
        this.setState({users:res.data})      
      })       
    }    
    
    getCheckbox =(e)=>{
      this.state.checkboxAry.push(Number(e.target.value))
      this.setState({checkboxValue:this.state.checkboxAry})      
    }
    

    selectonchnage =(e)=>{
      this.setState({selectValue:e.target.value},function(){
        console.log(this.state.selectValue,"******")        
      })
    }
    componentDidMount() {
      axios.get(`http://127.0.0.1:3001/custom`)
      .then(res => {
        const users = res.data;
        this.setState({ users :users});
      })
    }
    tablelisting(){
    return(
      this.state.users.map((users,key) => 
        <tbody>
          <tr key={key}>
            <td>
            <input type='checkbox' value={users.id} onClick={this.getCheckbox} />{users.name}
            </td>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td>{users.address.zipcode}</td> 
          </tr>
        </tbody>)
      )      
    } 
  filtersection(){
    return (
    <div>
      <div>
        {this.state.errorSelectMsg} {this.state.errorCheckboxMsg}
      </div>
      <select id='actionSelect' onChange={this.selectonchnage}>
        <option value='0'>Select-Action</option>
        <option value='spam'>moved to spam</option>
        <option value='delete'>moved to trash</option>
        <option value='index'>moved to index</option>
      </select>
      <button className='actionTrigger' onClick={this.getAction}>Action</button>
    </div>
    )
  } 

  render(){
     const loaderTime = this.state.users;
    var  loaderIcon='';
    if (loaderTime.length==0) {
      loaderIcon = <LoaderComponents />;
    }
    return(
      <div className="container">
        <main>
          <div class="container-fluid">
            <div class="row">
             <Innernav />
            <div class="content col-sm-9">
              <div className="jumbotron" id="jumbotron">
                {this.filtersection()}
                {loaderIcon}
                {this.tablelisting()}
            </div>      
            </div>
          </div>
          </div>
        </main>
      </div>)
  }
}
export  default Customfoldercomponent ;