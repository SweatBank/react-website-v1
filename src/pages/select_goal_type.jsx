// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
import '../CSS/master.css';

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

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
            selected:'',
            hover:''
        };
    }

    setSelected(s){
        this.setState({selected:s})
    }

    setHover(s){
        this.setState({hover:s})
    }

    render(){
    
        return(
        
        <Fragment>
        <Banner/>    
        <div className = "wrapper-selectgoal">

            <div className = "itemSelectGoal emptyDiv"/>
            <div className = "headerDivSelectGoal itemSelectGoal">Click to select a goal type: </div>
            <div className = "itemSelectGoal emptyDiv"/> <div className = "itemSelectGoal emptyDiv"/>

            <CommitmentGoalTitle 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />

            <PerformanceGoalTitle 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />

            <div className = "itemSelectGoal emptyDiv"/> <div className = "itemSelectGoal emptyDiv"/>

            <CommitmentGoalIcon 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />

            <PerformanceGoalIcon 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />
            
            <div className = "itemSelectGoal emptyDiv"/> <div className = "itemSelectGoal emptyDiv"/>

            <CommitmentGoalDescription 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />

            <PerformanceGoalDescription 
                selected = {this.state.selected} 
                setSelected = {this.setSelected.bind(this)}
                hover = {this.state.hover} 
                setHover = {this.setHover.bind(this)}
            />
            
            <div className = "itemSelectGoal emptyDiv"/> <div className = "itemSelectGoal emptyDiv"/>
            
            <CommitmentGoalButton selected = {this.state.selected} />
            <PerformanceGoalButton selected = {this.state.selected} />
            
            <div className = "itemSelectGoal emptyDiv"/>

            <div className = "itemSelectGoal emptyDiv bottomRow"> </div>

        </div>
        </Fragment>

        );
    }
}

export default SelectGoalType;

