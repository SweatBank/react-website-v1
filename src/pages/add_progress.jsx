// PACKAGES
import React, {Component} from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';

// COMPONENTS
import GoalText from '../components/_goalText.js';
import BaselineText from '../components/_baselineText.js';
import ProgressText from '../components/_progressText.js';
import TodayText from '../components/_todayText.js';
import EndDateText from '../components/_endDateText.js';
import DaysLeftText from '../components/_daysLeftText.js';
import RecordProgressButton from '../components/_recordProgressButton.js';

// STYLESHEETS
import '../CSS/master.css';

// BANNER
import Banner from '../components/record-goal-components/_banner.js';


class AddProgress extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            
            <Fragment>
            <Banner/>              
            
            <div className = "wrapper-addprogress">
            
                <div className ="item emptyDiv"/>
                <div className ="item headerDiv-addprogress"> Add Progress </div>
                <div className ="item emptyDiv"/>

                <GoalText/>
                <BaselineText/>
                <ProgressText/>
                <TodayText/>
                <EndDateText/>
                <DaysLeftText/>
                <RecordProgressButton/>

                <div className ="item bottomRow-addprogress"></div>

            </div>
            </Fragment>
        );
    }
}

export default AddProgress;
