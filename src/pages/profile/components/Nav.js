import React, { Component } from 'react';


//------------- Images Link Start -------------------

import Man_woman from '../../../assets/profile/img1/images-of-man-and-woman-in-love.jpg';
import Glostars_logo from '../../../assets/profile/icons/glostars_logo_small_lv.png';
import upload from '../../../assets/profile/icons/upload_full_2_A.png';
import house_W from '../../../assets/profile/icons/house_W.png';
import Competition from '../../../assets/profile/icons/Competition.png';
import notificatiion from '../../../assets/profile/icons/notificatiion.png';
import power from '../../../assets/profile/icons/power.png';


//------------- Images Link End ----------------------



class Nav extends Component {
    render() {
        return (
            <div>
                <header>      
                    <div className="container-floating Header">
                        <nav className="navbar navbar-toggleable-md navbar-light">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="mainlogo">
                                <a className="navbar-brand" href="logo"><img src={Glostars_logo} class="logo" alt='logo' /></a>
                            </div>

                            <div class="collapse navbar-collapse navP" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <form class="searchportion">
                                            <input class="form-control Search" type="text" placeholder="Search..." />
                                            <button class="btn my-2 my-sm-0 uploadbutton" type="submit">
                                                <img src={upload} class="uploadicon" alt='upload' /></button>
                                        </form>
                                    </li>
                                </ul>
                                <div class="navright">
                                    <a href="home"><img src={house_W} class="naviconHouse" alt='House' /></a>
                                    <a href="com"><img src={Competition} class="naviconCompetition" alt='Competition' /></a>
                                    <a href="noti"><img src={notificatiion} class="naviconNotification" alt='Notificatio' /></a>
                                    <a href="pro"><img src={Man_woman} class="navprofilepic" alt='Profile' /></a>
                                    <button class="btn my-2 my-sm-0 accountholdername" type="submit">Your First name here</button>
                                    <a href="Power"><img src={power} class="naviconPower" alt='Power' /></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Nav;