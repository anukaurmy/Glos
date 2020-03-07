import React, { Component } from 'react';
import PicCOne from './PicCOne'
import PicCTwo from './PicCTwo'

class RowTwo extends Component {
    render() {
        return (
            <div className="ProBar">
                

                <PicCOne></PicCOne>
                <PicCTwo></PicCTwo>
                
            </div>
        );

    }
}
export default RowTwo;