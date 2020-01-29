import React  from 'react';
export  default class FilterSelect extends React.Component{	
  constructor(props){
    super(props);
    this.state={
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
      this.setState({errorSelectMsg:''}) 
     }
     console.log(this.state.checkboxValue,"ddddddddd")
    if(this.state.checkboxValue==0){
        this.setState({errorCheckboxMsg:'Please select checkbox'}) 
        return false;         
     }else{
      this.setState({errorCheckboxMsg:''}) 
     }
     // console.log(this.state.selectValue,'*******',this.state.checkboxValue)
  }
  
  getCheckbox =(e)=>{
    alert('dfsf')
      this.state.checkboxAry.push(e.target.value)
      this.setState({checkboxValue:this.state.checkboxAry},()=>{
        console.log(this.state.checkboxValue)
      })      
    }
    

    selectonchnage =(e)=>{
      this.setState({selectValue:e.target.value},function(){
        console.log(this.state.selectValue,"******")        
      })
    }
	render(){
		return(
      <div>
        <div>{this.state.errorSelectMsg} {this.state.errorCheckboxMsg}</div>
        <select id='actionSelect' onChange={this.selectonchnage}>
          <option value='0'>Select-Action</option>
          <option value='span'>moved to span</option>
          <option value='delete'>moved to trash</option>
          <option value='custom'>moved to custom folder</option>
        </select>
        <button className='actionTrigger' onClick={this.getAction}>Action</button>
      </div>)
	}
}