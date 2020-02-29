import React, {Component} from 'react';
import ProName from './ProName';
import ProReco from './ProReco';

class Profile extends Component{
    render(){
        return(
            <div className='ProBar'>
                profile container
                <ProName></ProName>
                <ProReco></ProReco>
            </div>
        );
    }
}

export default Profile;