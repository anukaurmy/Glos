import React, {Component} from 'react';

//------------ Components Start ------------------

import Nav from './components/Nav';
import Profilesection from './components/Profilesection';
import Bar from './components/Bar';
import Competition from './components/Competition';
import Pub from './components/Pub';
import Mutual from './components/Mutual';
import Text from './components/Text';

//------------ Components End ------------------


//----------------- CSS Start-------------------

//import '../../assets/landing/CSS/normalize.css';
//import '../../assets/landing/CSS/bootstrap.min.css';
//import '../../assets/landing/CSS/NAV.css';

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
                <Text></Text>
            </div>
        );
    }
}


export default Profile;