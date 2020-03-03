import React, {Component} from 'react';
//import image from '../temp/img1/images-of-man-and-woman-in-love.jpg';
import image from '../temp/img1/images-of-man-and-woman-in-love.jpg';

class ProName extends Component{
    render(){
        return(
            <div>
                <div className="ProfileImageName">
                <a href="img1/images-of-man-and-woman-in-love.jpg" className="ProfileImageNam">
                    <img src={image} classNmae="profilepic" alt='image man and woman'/>
                </a>   
                </div>                    
            </div>
        );
    }
}

export default ProName;