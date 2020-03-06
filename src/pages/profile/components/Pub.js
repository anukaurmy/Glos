import React, {Component} from 'react';
import image1 from '../temp/img1/n1.jpg';
import image2 from '../temp/img1/n2.jpg';
import image3 from '../temp/img1/n3.jpg';
import image4 from '../temp/img1/n4.jpg';
import image5 from '../temp/img1/n5.jpg';
import image6 from '../temp/img1/n22.jpg';

class Pub extends Component {
    render() {
        return (
            <div class="container competition">
         Public Photos
          <div class="bar">
              
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
              
                            <a href="img1/n1.jpg"><img src={image1} class="img1"  alt='weekly'/></a>
                            <a href="img1/n2.jpg"><img src={image2} class="img1"  alt='Monthly'/></a>
                                    <a href="img1/n3.jpg"><img src={image3} class="img1" alt='Compitition'/></a>
                                        <a href="n4.jpg"><img src={image4} class="img1"  alt='Exibition'/></a>
                                        <a href="n5.jpg"><img src={image5} class="img1"  alt='Exibition'/></a>
                                        <a href="n22.jpg"><img src={image6} class="img1"  alt='Exibition'/></a>
                                
                                        <a href="#" className="AllImage">See all</a>
                    </div>
                  
                </div>
      
            </div>
                            );
                        }
                    }

export default Pub;