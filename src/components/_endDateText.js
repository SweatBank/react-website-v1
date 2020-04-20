// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class EndDateText extends Component {

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
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">goal end date</span>
                    </div>
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress" id = "goalEndDate"> 
                        <span> 4/21/2020 </span> 
                    </div>
                </div>
                
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default EndDateText;