import React, {Component} from 'react';



class Navbar extends Component{
    render(){
        return(
            <div>
                <header>
                    <div class="container-floating">
                        <div class="row RNM">
                            <div class="col-sm-6 col-md-6 col-lg-7 col-xl-6 LGC">
                                <div class="logo"><img src="icons/glostars%20logo%20small%20lv.png" class="logo"/></div>                
                            </div>

                            <button class="btn navber-togglers hidden-xl-up LG-button" type="button" data-toggle="collapse" data-target=".navheadercollapse" aria-expanded="false" aria-controls="CollapseNavbar"> Login</button>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}