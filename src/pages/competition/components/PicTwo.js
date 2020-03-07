import React, {Component} from 'react';


//------------- Images Link Start -------------------

import image from '../../../assets/competition/images/F-H.jpg';

//------------- Images Link End ----------------------




class PicTwo extends Component{
    render(){
        return(
            <div>
                <div class="gallery">
                    <a href="images/F-H.jpg" data-lightbox="mygallery" class="galleryItem"> 
                        <img src={image} class="gallery-img"/>
                    </a>   
                </div>
            </div>
        );  
    }
}
 export default PicTwo;