import React, {Component} from 'react';

//------------ Components Start ------------------
import Navbar from './components/Navbar';
//------------ Components End ------------------


//----------------- CSS Start-------------------

import '../../assets/landing/CSS/normalize.css';
import '../../assets/landing/CSS/bootstrap.min.css';
import '../../assets/landing/CSS/NAV.css';

//----------------- CSS End-------------------

class Landing extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
            </div>
        );
    }
}


export default Landing;