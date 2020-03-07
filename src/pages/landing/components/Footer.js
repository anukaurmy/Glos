import React, { Component } from 'react';
import image1 from '../../../assets/landing/LPIcons/FB.png';
import image2 from '../../../assets/landing/LPIcons/INST.png';
import image3 from '../../../assets/landing/LPIcons/TW.png';
import image4 from '../../../assets/landing/LPIcons/VK.png';
import image5 from '../../../assets/landing/LPIcons/G+.png';
import image6 from '../../../assets/landing/LPIcons/YT.png';
import image7 from '../../../assets/landing/LPIcons/Apple.png';
import image8 from '../../../assets/landing/LPIcons/Android.png';


class Footer extends Component {
    render() {
        return (
            <div>
                <div class="foot">
                    <div class="mainfooter">
                        <div class="footer1">
                            <a href="f1" class="F1">About</a>
                            <a href="f1" class="F1">Media</a>
                            <a href="f1" class="F1">FAQs</a>
                            <a href="f1" class="con" >Contact</a>
                        </div>
                        <div class="footer2ndPart">
                            <div class="footer2">

                                <div class="follow">
                                    Follow us
                            </div>
                                <div class="foollowIcons">
                                    <a href="img"><img src={image1} alt="icon" class="footericonsF" /></a>
                                    <a href="img"><img src={image2} alt="icon" class="footericonsIST" /></a>
                                    <a href="img"><img src={image3} alt="icon" class="footericons" /></a>
                                    <a href="img"><img src={image4} alt="icon" class="footericons" /></a>
                                    <a href="img"><img src={image5} alt="icon" class="footericons" /></a>
                                    <a href="img"><img src={image6} alt="icon" class="footericons" /></a>
                                </div>

                            </div>
                        </div>
                        <div class="footer3">
                          <div class="DownloadApp">Download the App</div>
                          <div class="AppIcons">
                             <a href="icon"><img src={image7} alt="icon" class="footericons"/></a>
                               <a href="icon"><img src={image8} alt="icon" class="footericons"/></a>
                          
                          </div>
                      
                      </div>


                    </div>
                        <div class="terms">
                             <a href="tr" class="TR">Terms</a>
                             <a href="tr" class="TR">Privacy</a>
                             <a href="tr" class="TR">&copy;Glostars 2017</a>
                
              </div>


                </div>
            </div>

        );
    }
}

export default Footer;