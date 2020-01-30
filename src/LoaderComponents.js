import React  from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
class LoaderComponents extends React.Component{ 
  constructor(props){
      super(props)
    }

    render(){
      console.log(this.props,'loader')
      let loaderComponent=''
      if(this.props.status){
        loaderComponent= <Loader type="Puff" color="#00BFFF"  height={100}   style={{textAlign: 'center'}} width={100}  />
      }
      return(loaderComponent)
    }
}
export  default LoaderComponents ;