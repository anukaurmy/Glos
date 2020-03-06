import React, { Component } from 'react';
import images from './assets/images/S-H.jpg';

class PicCOne extends Component {
    render() {
        return (
            <div>
                <div className="gallery">
                    <a href="images/S-H.jpg" data-lightbox="mygallery" className="galleryItem">
                        <img src={images} className="gallery-img"/>
                    </a>

                </div>
            </div>
        );
    }
}

export default PicCOne;

