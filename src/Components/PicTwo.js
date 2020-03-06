import React, {Component} from 'react';
import image from './assets/images/F-H.jpg';
class PicTwo extends Component{
    render(){
        return(
            <div>
                <div class="gallery">
                    <a href="images/F-H.jpg" data-lightbox="mygallery" className="galleryItem"> 
                        <img src={image} className="gallery-img"/>
                    </a>   
                </div>
            </div>
        );  
    }
}
 export default PicTwo;