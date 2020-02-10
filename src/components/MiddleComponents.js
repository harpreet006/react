import React  from 'react';
import grid1 from '../images/grid1.jpg'
import grid2 from '../images/grid2.jpg'
import grid3 from '../images/grid3.jpg'
import { Link } from 'react-router-dom';
class MiddleComponents extends React.Component{ 
  constructor(props){
      super(props)
    }
  render(){   
    return(
    <div className='homeSection'> 
      <p>
        The earliest account of major services being catered in the United States is a 1778 ball in Philadelphia catered by Caesar Cranshell to celebrate the departure of British General William Howe.[1] Catering business began to form around 1820, centering in Philadelphia.[1][2] Catering became a respectable and profitable business. The early catering industry was disproportionately founded by African-Americans.[1][2][3]

        The industry began to professionalize under the reigns of Robert Bogle who is recognized as "the originator of catering."[2] By 1840, the second generation of Philadelphia black caterers formed, who began to combine their catering businesses with restaurants they owned.[2] Common usage of the word "caterer" came about in the 1880s at which point local directories began listing numerous caterers.[1] White businessmen eventually moved into the industry and by the 1930s, the black businesses had virtually disappeared
      </p>      
      <div className="row">
      <div className="col-sm-4">
      <div className="content-holder">
        <div className="img-div"><img src={grid1} alt="" /></div>
        <button type="button" class="btn btn-primary"><Link className="nav-link" to='/services/corporate/chandigarh'>Corporate View</Link></button>
        <div className="text-div">Corporate Catering</div>
      </div>
      </div>
      <div className="col-sm-4">
      <div className="content-holder">
        <div className="img-div"><img src={grid2} alt="" /></div>
        <button type="button" class="btn btn-primary"><Link className="nav-link" to='/services/wedding/chandigarh'>Wedding View</Link></button>
        <div className="text-div">Wedding Catering</div>
      </div>
      </div>
      <div className="col-sm-4">
        <div className="content-holder">
        <div className="img-div"><img src={grid3} alt="" /></div>
        <button type="button" class="btn btn-primary"><Link className="nav-link" to='/services/social/chandigarh'>Social View</Link></button>
        <div className="text-div">Social Event Catering</div>
      </div>
      </div>
      </div>  
    </div>
      )
  }
}
export  default MiddleComponents ;