// PACKAGES
import React, { Component } from 'react';

// ICONS
import liftIcon from '../images/dumbbell.svg';
import bodyweightIcon from '../images/bodyweight.svg';
import tempoIcon from '../images/tempo.svg';
import profileIcon from '../images/person_head.svg';

// STYLESHEETS
import '../CSS/master.css';

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

            <div className = "wrapper">

                <div className ="item banner" id ="navBarLeft">
                    <a className = "pagelink" href= "file:home.html"> <span id ="home"> sweatbank </span> </a> 
                </div>
                
                <div className ="item banner" id ="navBarRight">
                    <a className = "pagelink" href= "file:sweatbank_profile.html"><img src={profileIcon} id="profileIcon"/> </a>
                </div>

                <div className = "item emptyDiv"> </div>

                <div className ="item headerDiv firstCol">
                    <span id = "instructions"> Click to select a type of performance goal: </span>
                </div>

                <div className = "item emptyDiv"> </div>
                
                {/* NEEDS TO BECOME A COMPONENT */}

                <GoalDescription goalType = "tempo" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {tempoIcon} selectedGoalType = {this.state.selectedGoalType} />
                <GoalDescription goalType = "bodyweight" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {bodyweightIcon} selectedGoalType = {this.state.selectedGoalType} />
                <GoalDescription goalType = "weightlifting" setSelectedGoalType = {this.setSelectedGoalType.bind(this)} icon = {liftIcon} selectedGoalType = {this.state.selectedGoalType} />
                <SetGoalButton selectedGoalType = {this.state.selectedGoalType} />

                <div className = "item bottomDiv">  </div>

            </div>
        );
    }
}

export default SelectPerformanceGoal;
