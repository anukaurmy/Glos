import React, {Component} from 'react';

//------------- Images Link Start -------------------

import images from '../../../assets/competition/images/three.jpg';

//------------- Images Link End ----------------------

class PicThree extends Component{
    render(){
        return(
            <div>
                <div className ="gallery"> 
                     <a href="images/three.jpg" data-lightbox = "mygallery" className="galleryItem">
                         <img src= {images} className = "gallery-img"/>
                     </a>
                </div>
                
            </div>
        );
    }
}

export default PicThree;