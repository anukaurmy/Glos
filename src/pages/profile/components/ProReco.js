import React, { Component } from 'react';
import image1 from '../temp/badges/Weekly small.png';
import image2 from '../temp/badges/Monthly small.png';
import image3 from '../temp/badges/Grand Competition small.png';
import image4 from '../temp/badges/Exhibition small.png';

class ProReco extends Component {
    render() {
        return (
            <div>
                <div class="col-md-5 col-lg-4 col-xl-4 RG">
                    <div class="recognition">
                        <h5>Recognition:</h5>
                        
                            <a href="badges/Weekly small.png"><img src={image1} class="badges"  alt='weekly'/></a>
                            <a href="badges/Monthly small.png"><img src={image2} class="badges"  alt='Monthly'/></a>
                                    <a href="badges/Grand Competition small.png"><img src={image3} class="badges" alt='Compitition'/></a>
                                        <a href="badges/Exhibition small.png"><img src={image4} class="badges"  alt='Exibition'/></a>
                                
                        
                    </div>
                  
                </div>
      
            </div>
                            );
                        }
                    }
                    
export default ProReco;