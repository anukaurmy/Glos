import React, { Component } from 'react';

import image from '../temp/img1/images-of-man-and-woman-in-love.jpg';

class ProName extends Component {
    render() {
        return (
            <div class="container-floating profilePortion">
                <div className="ProBar">
                    <div class="col-lg-4 col-xl-4 PI">
                        <div className="ProfileImageName">
                            <a href="img1/images-of-man-and-woman-in-love.jpg" className="ProfileImageNam">
                                <img src={image} classNmae="profilepic" alt='image man and woman' />
                            </a>
                            <div> <h5>Your name</h5>
                                <p>some text some text some text</p>

                            </div>

                        </div>



                    </div>

                    <div class="col-md-5 col-lg-4 col-xl-4 AB">

                        <div class="AboutProfile">
                            <div class="AboutProfiletext">
                                <h5>About me:</h5>
                                <p>Some text some text some text some text some text some text some text</p>

                                <h5>Interests:</h5>
                                <p>Some text some text some text some text some text some text some text</p>
                            </div>

                            <a href="#" class="EditProfile" data-toggle="modal" data-target="#ModelName" aria-hidden="true">Edit</a>
                        </div>
                    </div>




                </div>
            </div>
        );
    }
}

export default ProName;