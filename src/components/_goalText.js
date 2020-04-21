// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class GoalText extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>

                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress firstRow-addprogress">
                        <span className = "title-addprogress">goal</span>
                    </div> 
                </div>
                
                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress firstRow-addprogress">
                        <span className = "previousInputText-addprogress"> squat </span> &nbsp;
                        {/* this should be an "unstyled" add progress text element */}
                        
                        <span className = "previousInput-addprogress"> 255 </span> &nbsp; 
                        {/* this should be a "styled" add progress text element */}
                        
                        <span className = "previousInputText-addprogress"> lbs </span> &nbsp; 
                        <span className = "previousInput-addprogress"> 5 </span> &nbsp;
                        <span className = "previousInputText-addprogress"> times </span>
                    </div>
                </div>

                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default GoalText;