import React  from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
class LoaderComponents extends React.Component{ 
  constructor(props){
      super(props)      
    }

    render(){
      return(<Loader type="Puff" color="#00BFFF"  height={100}   style={{textAlign: 'center'}} width={100}  />)
    }
}
export  default LoaderComponents ;