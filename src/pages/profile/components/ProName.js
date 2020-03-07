import React, { Component } from 'react';


//------------ Components Start ------------------

import ProReco from './ProReco';

//------------ Components End ------------------


//------------- Images Link Start -------------------

import Man_woman from '../../../assets/profile/img1/images-of-man-and-woman-in-love.jpg';

//------------- Images Link End ----------------------

class ProName extends Component {
    render() {
        return (
            <div>
                <div class="container-floating profilePortion">
                    <div class="row PFPI">
                        <div class="col-lg-4 col-xl-4 PI">
                            <div class="ProfileImageName">
                                <img src={Man_woman} class="profilepic" />
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


                        <ProReco></ProReco>

                    </div>

                    <br />

                </div>
            </div>

        );
    }
}

export default ProName;