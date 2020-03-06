import React, { Component } from 'react';
import RowOne from './RowOne';
import RowTwo from './RowTwo';

class Container extends Component {
    render() {
        return (
            <div>
               
                <RowOne></RowOne>
                <RowTwo></RowTwo>
            </div>
        )
    }

}
export default Container;