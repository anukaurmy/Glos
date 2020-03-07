import React, {Component} from 'react';

//------------ Components Start ------------------
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignUpForm from './components/SignUpForm';
import Container from './components/Container';
import Footer from './components/Footer';
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
                <SignUp></SignUp>
                <SignUpForm></SignUpForm>
                <Container></Container>
                <Footer></Footer>
            </div>
        );
    }
}


export default Landing;