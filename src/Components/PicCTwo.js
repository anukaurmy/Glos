import React, { Component } from 'react';
import images from './assets/images/W-B.jpg';


class PicCTwo extends Component {
    render() {
        return (
            <div>
                <div className="gallery">
                    <a href="images/W-B.jpg" data-lightbox="mygallery" className="galleryItem">
                        <img src={images} className="gallery-img"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default PicCTwo;