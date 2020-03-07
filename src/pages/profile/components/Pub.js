import React, {Component} from 'react';


//------------- Images Link Start -------------------

import number1 from '../../../assets/profile/img1/numbers-01.jpg';
import number2 from '../../../assets/profile/img1/numbers-02.jpg';
import number6 from '../../../assets/profile/img1/numbers-06.jpg';
import number9 from '../../../assets/profile/img1/numbers-09.jpg';
import number12 from '../../../assets/profile/img1/numbers-12.jpg';
import number22 from '../../../assets/profile/img1/n22.jpg';

//------------- Images Link End ----------------------

class Pub extends Component {
    render() {
        return (
            <div>
                <div class="container competition">
                    <h6>Public Photos</h6>
                    <div class="row">

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number1} class="ImageG" /></a>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number2} class="ImageG" /></a>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number6} class="ImageG" /></a>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number9} class="ImageG" /></a>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number12} class="ImageG" /></a>

                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={number22} class="ImageG" /></a>

                        </div>
                        <a href="#" class="AllImage">See all</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pub;