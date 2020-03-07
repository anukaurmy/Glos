import React, { Component } from 'react';


//------------- Images Link Start -------------------

import images from '../../../assets/competition/images/W-B.jpg';

//------------- Images Link End ----------------------


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