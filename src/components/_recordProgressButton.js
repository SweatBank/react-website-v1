// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

import { Button } from '@material-ui/core';

// IMAGES
import liftIcon from '../images/dumbbell.svg';

class RecordProgressButton extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            validRecord: true
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
                        <br/> <br/>
                        {/* <Button 
                            disabled = {!this.state.validRecord} 
                            color = "secondary"
                            variant = "outlined" >  
                          MUI button 
                        </Button> */}
                    </div>
                </div>
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default RecordProgressButton;