// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class BaselineText extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>

                <div className ="item titleDiv-addprogress baselineDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">baseline</span>
                    </div> 
                </div>
                
                <div className ="item contentDiv-addprogress baselineDiv-addprogress">
                    <div className = "innerContentDiv-addprogress">
                        <span className = "previousInput-addprogress"> squat </span> &nbsp; &nbsp;
                        <span className = "previousInput-addprogress"> 175 </span> &nbsp; &nbsp;
                        <span className = "previousInput-addprogress"> lbs </span> &nbsp; &nbsp;
                        <span className = "previousInput-addprogress"> 5 </span> &nbsp; &nbsp;
                        <span className = "previousInput-addprogress"> times  </span>
                    </div>
                </div>

                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default BaselineText;