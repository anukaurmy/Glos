import React, { Component } from 'react';

class Bar extends Component {
    render() {
        return (
            <div>
                <div class="container photoinfo">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 col-xl-4 Photo">31 Photos</div>
                        <div class="col-md-4 col-lg-4 col-xl-4 following">34 Following</div>
                        <div class="col-md-4 col-lg-4 col-xl-4 follower">23 Followers</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;