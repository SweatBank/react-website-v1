// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';

// ICONS
import liftIcon from '../images/dumbbell.svg';
import bodyweightIcon from '../images/bodyweight.svg';
import tempoIcon from '../images/tempo.svg';
import profileIcon from '../images/person_head.svg';

// STYLESHEETS
import '../CSS/master.css';

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

import GoalDescription from '../components/_goalDescription.js'
import SetGoalButton from '../components/_setGoalButton.js'

class SelectPerformanceGoal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGoalType:''
          };
    }

    setSelectedGoalType(s){ 
        this.setState({selectedGoalType:s})
    }

    render(){
        return(
            <Fragment>
            <Banner/>
            <div className = "wrapper-performance">

                <div className = "item emptyDiv"> </div>

                <div className ="item headerDiv-performance firstCol-performance">
                    <span id = "instructionsPerformance"> Click to select a type of performance goal: </span>
                </div>

                <div className = "item emptyDiv"> </div>
                
                {/* NEEDS TO BECOME A COMPONENT */}

                <GoalDescription goalType = "tempo" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {tempoIcon} selectedGoalType = {this.state.selectedGoalType} />
                <GoalDescription goalType = "bodyweight" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {bodyweightIcon} selectedGoalType = {this.state.selectedGoalType} />
                <GoalDescription goalType = "weightlifting" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {liftIcon} selectedGoalType = {this.state.selectedGoalType} />
                <SetGoalButton selectedGoalType = {this.state.selectedGoalType} />

                <div className = "item bottomDiv-performance">  </div>
            </div>
            </Fragment>
        );
    }
}

export default SelectPerformanceGoal;
