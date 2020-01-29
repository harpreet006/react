import React  from 'react';
class MiddleComponents extends React.Component{ 
  constructor(props){
      super(props)
    }
  render(){   
    return(
      <div className="row">
    <div className="col-sm-4">
      <div className="content-holder">
        <div className="img-div"><img src="http://placehold.it/100x100" alt="" /></div>
        <div className="text-div">Text 2</div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="content-holder">
        <div className="img-div"><img src="http://placehold.it/100x100" alt="" /></div>
        <div className="text-div">Text 2</div>
      </div>
    </div>
    <div className="col-sm-4">
       <div className="content-holder">
        <div className="img-div"><img src="http://placehold.it/100x100" alt="" /></div>
        <div className="text-div">Text 2</div>
      </div>
    </div>
    </div>
      )
  }
}
export  default MiddleComponents ;