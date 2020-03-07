import React, {Component} from 'react';

//------------ Components Start ------------------

import Landing from '../pages/landing/Landing';
import Competition from '../pages/competition/Competition';
import Profile from '../pages/profile/Profile';

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
                    <ul>
                        <li>
                            <Link to="/">Landing</Link>
                        </li>
                        <li>
                            <Link to="/competition">Competition</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                            <Route exact path="/">
                                <Landing></Landing>
                            </Route>
                            <Route path="/competition">
                                <Competition></Competition>
                            </Route>
                            <Route path="/profile">
                                <Profile></Profile>
                            </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;