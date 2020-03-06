import React, { Component } from 'react';
import image1 from '../temp/img1/images-of-man-and-woman-in-love.jpg';
import image2 from '../temp/icons/glostars logo small lv.png';
import image3 from '../temp/icons/upload full 2 A.png';
import image4 from '../temp/icons/house W.png';
import image5 from '../temp/icons/Competition.png';
import image6 from '../temp/icons/notificatiion.png';
import image7 from '../temp/icons/power.png';



class Nav extends Component {
    render() {
        return (
            <div>
                <div className="container-floating Header">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="mainlogo">
                            <a className="navbar-brand" href="logo"><img src={image2} class="logo" alt='logo' /></a>
                        </div>

                        <div class="collapse navbar-collapse navP" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <form class="searchportion">
                                        <input class="form-control Search" type="text" placeholder="Search..."/>
                                            <button class="btn my-2 my-sm-0 uploadbutton" type="submit">
                                                <img src={image3} class="uploadicon" alt='upload'/></button>
                                    </form>
                                </li>
                            </ul>
                            <div class="navright">

                                <a href="home"><img src={image4} class="naviconHouse" alt='House' /></a>
                                <a href="com"><img src={image5} class="naviconCompetition" alt='Competition' /></a>
                                <a href="noti"><img src={image6} class="naviconNotification" alt='Notificatio' /></a>
                                <a href="pro"><img src={image1} class="navprofilepic" alt='Profile' /></a>
                                <button class="btn my-2 my-sm-0 accountholdername" type="submit">Your First name here</button>
                                <a href="Power"><img src={image7} class="naviconPower" alt='Power' /></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
                );
            }
        }
        
export default Nav;