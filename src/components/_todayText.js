// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class TodayText extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>
                
                <div className ="item titleDiv-addprogress todayDiv-addprogress">
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">today</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress todayDiv-addprogress"> 
                    <div className = "innerContentDiv-addprogress" id = "today"> 
                        <span> 4/15/2020 </span> 
                    </div>
                </div>
                
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default TodayText;