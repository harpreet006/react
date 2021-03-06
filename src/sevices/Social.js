import React  from 'react'; 
import { Link } from 'react-router-dom';
import Innernav from './Innernav';
import Serviceview from './Serviceview';
import Tableshow from './Tableshow';
class Social extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
        data:[
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }]
      }
    }
  render(){
      let url='';
      if(this.props.url.length){
        url=this.props.url;
      }else{
        url='';
      }   
    return(
      <div class="row re45">
         <div class="col-sm-2"><Innernav url={url} /></div>
         <div class="col-sm-10 r45Sect"><Tableshow key='wedding' data={this.state.data} /></div>
      </div>
    )
  }
}
export  default Social ;