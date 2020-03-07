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
                                <a href="img1/images-of-man-and-woman-in-love.jpg" class="profilepic">
                                    <img src={Man_woman} classNmae="profilepic" alt='image man and woman' />
                                </a>
                                <div> <h5>Your name</h5>
                                    <p>some text some text some text</p>

                                </div>

                            </div>



                        </div>


                        <ProReco></ProReco>

                    </div>

                    <br></br>
                </div>
            </div>

        );
    }
}

export default ProName;