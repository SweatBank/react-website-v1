// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
// import '../CSS/master.css';

import myProfile from '../images/person_head.svg';

import CommitmentGoalTitle from '../components/_commitmentGoalTitle.js';
import CommitmentGoalIcon from '../components/_commitmentGoalIcon.js';
import CommitmentGoalDescription from '../components/_commitmentGoalDescription.js';
import CommitmentGoalButton from '../components/_commitmentGoalButton.js';

import PerformanceGoalTitle from '../components/_performanceGoalTitle.js';
import PerformanceGoalIcon from '../components/_performanceGoalIcon.js';
import PerformanceGoalDescription from '../components/_performanceGoalDescription.js';
import PerformanceGoalButton from '../components/_performanceGoalButton.js';

class SelectGoalType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover:'',
            selected:'',
        };
    }

    setHover(s){

    }

    setSelected(s){

    }

    render(){
    
        return(

            <div className = "wrapper">

            <div className ="item banner" id ="navBarLeft">
                <Link className = "pagelink" to = "/">
                    <span id ="home"> sweatbank </span>
                </Link>
            </div>
            
            <div className ="item banner" id ="navBarRight">
                <Link className = "pagelink" to = "/myprofile" > 
                    <img src={myProfile} id="profileIcon"/> 
                </Link>
            </div>

            <div className = "item emptyDiv"/>
            <div className = "item HeaderDiv"> Click to select a goal type: </div>
            <div className = "item emptyDiv"/> <div className = "item emptyDiv"/>

            <CommitmentGoalTitle hover = {this.state.hover} selected = {this.state.selected} setHover/>
            <PerformanceGoalTitle />

            <div className = "item emptyDiv"/> <div className = "item emptyDiv"/>

            <CommitmentGoalIcon/>
            <PerformanceGoalIcon/>
            
            <div className = "item emptyDiv"/> <div className = "item emptyDiv"/>

            <CommitmentGoalDescription/>
            <PerformanceGoalDescription/>
            
            <div className = "item emptyDiv"/> <div className = "item emptyDiv"/>
            
            <CommitmentGoalButton/>
            <PerformanceGoalButton/>
            
            <div className = "item emptyDiv"/>

            <div className = "item emptyDiv bottomRow"> </div>

        </div>

        );
    }
}

export default SelectGoalType;
