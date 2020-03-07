import React, { Component } from 'react';




//------------- Images Link Start -------------------

import image from '../../../assets/competition/images/P1.jpg';

//------------- Images Link End ----------------------

class PicOne extends Component {
    render() {
        return (
            <div>
                <div class="gallery">
                    <a href="images/Picture1.jpg" data-lightbox="mygallery" className="galleryItem"> 
                        <img src={image} className="gallery-img"/>
                    </a>   
                </div>
            </div>
                );
            }
        }
        
export default PicOne;