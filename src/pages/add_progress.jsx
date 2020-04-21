// PACKAGES
import React, {Component} from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';

// COMPONENTS
import GoalText from '../components/_goalText.js';
import BaselineText from '../components/_baselineText.js';
import ProgressText from '../components/_progressText.js';
import DateSection from '../components/_dateSection.js';
import RecordProgressButton from '../components/_recordProgressButton.js';

// STYLESHEETS
import '../CSS/master.css';

// BANNER
import Banner from '../components/record-goal-components/_banner.js';


class AddProgress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goalType:'', // how should the rendering logic work here? 
        };
    }

    render(){
        return(
            
            <Fragment>
            <Banner/>              
            
            <div className = "wrapper-addprogress">
            
                <div className ="item emptyDiv"/>
                {/* <Typography> Add Progress </Typography> */}
                <div className ="item headerDiv-addprogress"> Add Progress </div>
                <div className ="item emptyDiv"/>

                <GoalText/>
                <BaselineText/>
                <ProgressText/>
                <DateSection/>
                <RecordProgressButton/>

                <div className ="item bottomRow-addprogress"></div>

            </div>
            </Fragment>
        );
    }
}

export default AddProgress;
