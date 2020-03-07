import React, {Component} from 'react';

//------------ Components Start ------------------

import RowOne from './components/RowOne';
import RowTwo from './components/RowTwo';

//------------ Components End ------------------


class Competition extends Component{
    render(){
        return(
            <div>
                <RowOne></RowOne>
                <RowTwo></RowTwo>
            </div>
        );
    }
}


export default Competition;