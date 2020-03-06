import React, {Component} from 'react';
import NavCon from './NavCon';
import Profile from './Profile';
import Bar from './Bar';
import Competition from './Competition';
import Pub from './Pub';
import Mutual from'./Mutual';
import '../temp/css/profilePage.css';
import '../temp/css/normalize.css';
import Text from './Text' 
import Container from './Container';
import './assets/css/s.css';
import './assets/css/lightbox.min.css';



class Main extends Component{
    render(){
        return(
            <div>
                <NavCon></NavCon>
                <Profile></Profile>
                <Bar></Bar>
                <Competition></Competition>
                <Pub></Pub>
                <Mutual></Mutual>
                <Text></Text>
                <Container></Container>
                
            </div>
        );
    }
}

export default Main;