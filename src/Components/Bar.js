import React, {Component} from 'react';

class Bar extends Component{
    render(){
        return(
            <div>
                <table className='bar'>
                    <thead>
                        <tr>
                            <th>Photos</th>
                            <th className='chart'>Following</th>
                            <th className='chart'>Followers</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Bar;