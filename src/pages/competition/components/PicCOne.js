import React, { Component } from 'react';


//------------- Images Link Start -------------------

import images from '../../../assets/competition/images/S-H.jpg';

//------------- Images Link End ----------------------

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

