import React, {Component} from 'react';

import images from './assets/images/three.jpg'


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