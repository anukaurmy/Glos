import React, {Component} from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Bar from './Bar';
import Competition from './Competition';
import Pub from './Pub';
import Mutual from'./Mutual';

class Main extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Profile></Profile>
                <Bar></Bar>
                <Competition></Competition>
                <Pub></Pub>
                <Mutual></Mutual>
            </div>
        );
    }
}

export default Main;