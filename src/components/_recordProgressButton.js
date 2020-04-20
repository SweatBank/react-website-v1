// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// IMAGES
import liftIcon from '../images/dumbbell.svg';

class RecordProgressButton extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>
                <div className ="item titleDiv-addprogress buttonDiv-addprogress">
                    <div className = "buttonSection-addprogress"> 
                        <button className = "navButton navButton-addprogress disallowed"> 
                            record progress 
                        </button>
                    </div>
                </div>
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default RecordProgressButton;