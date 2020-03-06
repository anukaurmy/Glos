import React, { Component } from 'react';
import image from './assets/images/P1.jpg';

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