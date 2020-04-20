// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
import '../CSS/master.css'; 

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

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
            
            <Fragment>
                <Banner/>
            <div className = "wrapper-mygoals">

                <Fragment>
                <div className = "item"> <div className = "headerDiv-mygoals firstCol" > Goal </div> </div>
                <div className = "item"> <div className = "headerDiv-mygoals" > Type </div> </div>
                <div className = "item"> <div className = "headerDiv-mygoals" > Start </div> </div>
                <div className = "item"> <div className = "headerDiv-mygoals" > End </div> </div>
                <div className = "item"> <div className = "headerDiv-mygoals" > Progress </div> </div>
                <div className = "item"> <div className = "headerDiv-mygoals lastCol" > Update </div> </div>
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
             </Fragment>
        );
    }
}

export default MyGoals;