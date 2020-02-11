import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import swal from 'sweetalert';

class Contactus extends React.Component{ 
  constructor(props){
      super(props)
      this.state={
          name:'',
          email:'',
          message:'',
          validation:''
      }
       
  }
   

submitclick =()=>{    
    if(this.state.name==""){
        swal('Name is empty')
        return false
    }
    if(this.state.email==""){
        swal('Email is empty')
        return false
    }
    console.log(this.state,'***')
    if(this.state.message==""){
        swal('Message is empty')
        return false
    }
    swal("Success", "Your request is successfully sent", "success")
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
   
render(){ 
     
    
    return(<div className="container"> 
    <section class="mb-4"> {this.state.validation}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2> 
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="row"> 
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST"> 
                <div class="row"> 
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" onChange={this.handleChange} name="name" class="form-control"  require="" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div> 
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" onChange={this.handleChange} require="" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div> 
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" require="" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div> 
                <div class="row"> 
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea type="text"  onChange={this.handleChange} id="message" name="message" rows="2" class="form-control md-textarea" require=""></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div> 
            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onClick={this.submitclick}>Send</a>
            </div>
            <div class="status"></div>
        </div>
    </div>
</section></div>)
  }
}
export  default Contactus ;