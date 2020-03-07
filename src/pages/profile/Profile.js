import React, {Component} from 'react';

//------------ Components Start ------------------

import Nav from './components/Nav';
import Profilesection from './components/Profilesection';
import Bar from './components/Bar';
import Competition from './components/Competition';
import Pub from './components/Pub';
import Mutual from './components/Mutual';
import Edit from './components/Edit';

//------------ Components End ------------------


//----------------- CSS Start-------------------
import '../../assets/profile/css/normalize.css';
import '../../assets/profile/css/bootstrap.min.css';
import '../../assets/profile/css/profilePage.css';

//----------------- CSS End-------------------

class Profile extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Profilesection></Profilesection>
                <Bar></Bar>
                <Competition></Competition>
                <Pub></Pub>
                <Mutual></Mutual>
                <Edit></Edit>
            </div>
        );
    }
}


export default Profile;