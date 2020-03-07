import React, { Component } from 'react';
import image from '../../..//assets/landing/img1//images-of-man-and-woman-in-love.jpg';



class Container extends Component {
    render() {
        return (
            <div>
                <div class="container">
          <div class=" Ppart">
        <section> <div class="item-1"><img src={image} alt="pimage1" class="Pimage1"/>
            
               <p class="P2">
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText<br/><a href="edit" class="Edit" >Learn more</a></p>
           
            </div></section>
            <hr/>
            <section><div class="item-2"><img src={image} alt="pimage1" class="Pimage"/>
               <p class="ptext">
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText<br/><a href="edit" class="Edit">Learn more</a></p>
                
            </div></section>
            <hr/>
            <section><div class="item-3"><img src={image} alt="pimage1" class="Pimage1"/>
               <p class="P2">
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText
             SomeText SomeText SomeText SomeText SomeText SomeText SomeText SomeText<br/><a href="edit" class="Edit">Learn more</a></p>
            </div>
                </section>
        
         </div>
        </div>
        </div>
        );
    }
}

export default Container;