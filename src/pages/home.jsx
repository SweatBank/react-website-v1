// PACKAGES
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// CONSTANTS
import SweatBankLogoPath from '../_constants.js'

// STYLESHEETS
// import '../CSS/master.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className = "wrapper-home">
                <div className ="item titleDiv-home">
                    <div className = "title-home">
                    SweatBank
                    </div>
                </div>
                <div className ="item iconsDiv">
                    <div >
                        <svg width="137.28mm" height="200.74mm" version="1.1" viewBox="0 0 137.27745 200.7415" xmlns="http://www.w3.org/2000/svg" id = "logo">
                        <g transform="translate(144.04 -1.3416)">
                        <g transform="matrix(.11016 0 0 .11016 -143.91 -1.8324)"></g>
                        <g transform="matrix(.1544 0 0 .1544 -66.548 140.33)"></g>
                        <g transform="matrix(.12095 0 0 .12095 -150.03 63.169)"></g>
                        <g transform="matrix(.11241 0 0 .11241 -144.06 141.77)"></g>
                        <g id="XMLID_806_" transform="matrix(.1258 0 0 .1258 -73.025 66.825)"></g>
                        <g transform="matrix(.10621 0 0 .10621 -61.144 1.3416)">
                        <path d= {SweatBankLogoPath} />
                        </g>
                        {/* <animate attributeName="fill" values="#8A94B9;white;#8A94B9" dur="4s" repeatCount="indefinite" /> */}
                        </g>
                        </svg>
                    </div>
                </div>
                <div className ="item buttonsDiv-home">
                    <div className = "buttons-home">
                        <br/>
                        <Link className = "navButton navButton-home" id = "addGoal" to='/selectgoal'>add goal</Link>
                        &nbsp; &nbsp;
                        <Link className = "navButton navButton-home" id = "addGoal" to='/mygoals'>my goals</Link>
                        <br/> <br/> <br/>
                        <Link className = "infoButton-home" to='/howitworks'>how it works</Link>
                        &nbsp; &nbsp;
                        <Link className = "infoButton-home" to='/aboutus'>about us</Link>
                    </div>
                </div>
                <div className ="item item9"></div>
            </div>
        );
    }
}

export default Home;
