import React, {Component} from 'react';
import image1 from '../temp/img1/n1.jpg';
import image2 from '../temp/img1/n2.jpg';
import image3 from '../temp/img1/n3.jpg';
import image4 from '../temp/img1/n4.jpg';
import image5 from '../temp/img1/n5.jpg';

class Competitiong extends Component {
    render() {
        return (
            <div class="container competition">
         Compitition Photos
          <div class="bar">
              
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
              
                            <img src={image1} class="img1"  alt='weekly'/>
                            <img src={image2} class="img1"  alt='Monthly'/>
                            <img src={image3} class="img1" alt='Compitition'/>
                            <img src={image4} class="img1"  alt='Exibition'/>
                            <img src={image5} class="img1"  alt='Exibition'/>
                                
                            <a href="see" className="AllImage">See all</a>
                    </div>
                  
                </div>
      
            </div>
                            );
                        }
                    }

export default Competitiong;