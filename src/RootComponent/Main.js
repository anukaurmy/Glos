import React, {Component} from 'react';

//------------ Components Start ------------------

import Landing from '../pages/landing/Landing';
/*
import NavCon from './NavCon';
import Profile from './Profile';
import Bar from '../pages/profile/components/Bar';
import Competition from '../pages/profile/components/Competition';
import Pub from '../pages/profile/components/Pub';
import Mutual from'../pages/profile/components/Mutual';

import Text from '../pages/profile/components/Text' 
import Container from './Container';
*/

//------------ Components End ------------------


//----------------- CSS Start-------------------

//import '../temp/css/profilePage.css';
//import '../temp/css/normalize.css';
//import '../assets/css/s.css';
//import '../assets/css/lightbox.min.css';

//----------------- CSS End-------------------




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link    
} from 'react-router-dom';


class Main extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                            <Route exact path="/">
                                <Landing></Landing>
                            </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;