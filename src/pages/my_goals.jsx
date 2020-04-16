// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
// import '../CSS/master.css'; 

// ICONS
import profileIcon from '../images/person_head.svg';
import liftIcon from '../images/dumbbell.svg';
import tempoIcon from '../images/tempo.svg';
import bodyweightIcon from '../images/bodyweight2.svg';
import commitmentIcon from '../images/commitment.svg';

// COMPONENTS
import GoalRow from '../components/_goalRow.js';


class MyGoals extends Component {

    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    render() {
        return (
            <div className = "wrapper">

                <div className ="item banner" id ="navBarLeft"> 
                    <Link to = "/"> 
                        <span id ="home"> sweatbank </span> 
                    </Link> 
                </div>
                
                <div className ="item banner" id ="navBarRight"> 
                    <a href= "file:sweatbank_profile.html">
                        <img src={profileIcon} id="profileIcon"/>
                    </a> 
                </div>

                <Fragment>
                <div className = "item"> <div className = "headerDiv firstCol" > Goal </div> </div>
                <div className = "item"> <div className = "headerDiv" > Type </div> </div>
                <div className = "item"> <div className = "headerDiv" > Start </div> </div>
                <div className = "item"> <div className = "headerDiv" > End </div> </div>
                <div className = "item"> <div className = "headerDiv" > Progress </div> </div>
                <div className = "item"> <div className = "headerDiv lastCol" > Update </div> </div>
                </Fragment>

                {/* 
                
                need to talk with Sam about how to render this properly. 
                this can be a topic of technical discussion on thursday 
                
                */}

                <GoalRow icon = {liftIcon}/>
                <GoalRow icon = {commitmentIcon}/>
                <GoalRow icon = {bodyweightIcon}/>
                <GoalRow icon = {liftIcon}/>
                <GoalRow icon = {tempoIcon}/>
                <GoalRow icon = {tempoIcon}/>
                <GoalRow icon = {bodyweightIcon}/>
                <GoalRow icon = {commitmentIcon}/>
                <GoalRow icon = {liftIcon}/>

             </div>
        );
    }
}

export default MyGoals;