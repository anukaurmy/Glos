import React, { Component } from 'react';
import PicOne from './PicOne'
import PicTwo from './PicTwo'
import PicThree from './PicThree'



class RowOne extends Component {
    render() {
        return (
            <div className="ProBar">
            

               <PicOne></PicOne>
                <PicTwo></PicTwo>
                <PicThree></PicThree>

                
            </div >
        );
    }
}

export default RowOne;