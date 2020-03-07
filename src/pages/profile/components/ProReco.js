import React, { Component } from 'react';


//------------- Images Link Start -------------------

import Weekly_small from '../../../assets/profile/badges/Weekly_small.png';
import Monthly_small from '../../../assets/profile/badges/Monthly_small.png';
import Grand_Competition_small from '../../../assets/profile/badges/Grand_Competition_small.png';
import Exhibition_small from '../../../assets/profile/badges/Exhibition_small.png';


//------------- Images Link End -------------------




class ProReco extends Component {
    render() {
        return (
            <div>
                <div class="col-md-5 col-lg-4 col-xl-4 RG">
                    <div class="recognition">
                        <h5>Recognition:</h5>
                        <br></br>
                        <a href="badges/Weekly_small.png"><img src={Weekly_small} class="badges" alt='weekly' /></a>
                        <a href="badges/Monthly_small.png"><img src={Monthly_small} class="badges" alt='Monthly' /></a>
                        <a href="badges/Grand_Competition_small.png"><img src={Grand_Competition_small} class="badges" alt='Compitition' /></a>
                        <a href="badges/Exhibition_small.png"><img src={Exhibition_small} class="badges" alt='Exibition' /></a>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProReco;