import React, { Component } from 'react';
import { Fragment } from 'react';
import tempoIcon from '../images/tempo.svg';

// STYLESHEETS
import '../CSS/master.css';

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

// GOAL INFO
import GoalIcon from '../components/record-goal-components/_goalIcon.js'; 
import GoalPrefaceText from '../components/record-goal-components/_goalPrefaceText.js';
import TempoExerciseInput from '../components/record-goal-components/_tempoExerciseInput.js';
import TempoDistanceInput from '../components/record-goal-components/_tempoDistanceInput.js';
import TempoMilesText from '../components/record-goal-components/_tempoMilesText.js';
import TempoInText from '../components/record-goal-components/_tempoInText.js';
import TempoGoalTimeInput from '../components/record-goal-components/_tempoGoalTimeInput.js';
import TempoMinutesText from '../components/record-goal-components/_tempoMinutesText.js';

// BASELINE INFO
import BaselineIcon from '../components/record-goal-components/_baselineIcon.js'
import BaselinePrefaceText from '../components/record-goal-components/_baselinePrefaceText.js'
import TempoBaselineExerciseText from '../components/record-goal-components/_tempoBaselineExerciseText.js'
import TempoBaselineDistanceText from '../components/record-goal-components/_tempoBaselineDistanceText.js'
import TempoBaselineTimeInput from '../components/record-goal-components/_tempoBaselineTimeInput.js'
import TempoBaselineMinutesText from '../components/record-goal-components/_tempoBaselineMinutesText.js'

// TIMEFRAME INFO
import TimeframeIcon from '../components/record-goal-components/_timeframeIcon.js';
import OneWeekButton from '../components/record-goal-components/_oneWeekButton.js';
import TwoWeeksButton from '../components/record-goal-components/_twoWeeksButton.js';
import ThreeWeeksButton from '../components/record-goal-components/_threeWeeksButton.js';
import FourWeeksButton from '../components/record-goal-components/_fourWeeksButton.js';

// SUBMIT
import Submit from '../components/record-goal-components/_submit.js';

class Goal extends Component {

  constructor(props) {
      super(props);
      this.state = {
        goalType:'tempo',
        goalTimeframe:'none',
        tempoExercise:'',
        tempoDistance:'',
        tempoGoalTime:'',
        tempoBaselineTime:'',
        validTempoGoal:'',
        validTempoBaseline:''
      };
  }
  
  setTimeframe(s){ this.setState({goalTimeframe:s}); }
  
  setTempoExercise(s){ 
    this.setState({tempoExercise:s}); // setState
    var distance = this.state.tempoDistance // valid tempo goal check
    var goalTime = this.state.tempoGoalTime
    var baselineTime = this.state.tempoBaselineTime
    if ( s.length > 0
        && Number(distance) > 0 && Number(goalTime) > 0
        && Number(goalTime) < Number(baselineTime) | isNaN(baselineTime) | baselineTime === ""){
        this.setState({validTempoGoal:true})
      }
      else{
        this.setState({validTempoGoal:false})
      }
  }

  setTempoDistance(s){ 
    this.setState({tempoDistance:s}); // setStae
    var exercise = this.state.tempoExercise // valid tempo goal check
    var goalTime = this.state.tempoGoalTime
    var baselineTime = this.state.tempoBaselineTime
    if ( exercise.length > 0
      && Number(s) > 0 && Number(goalTime) > 0
      && Number(goalTime) < Number(baselineTime) | isNaN(baselineTime) | baselineTime === ""){
      this.setState({validTempoGoal:true})
    }
    else{
      this.setState({validTempoGoal:false})
    }
  }
  
  setTempoGoalTime(s){ 
    this.setState({tempoGoalTime:s}); // setState
    var exercise = this.state.tempoExercise // valid tempo goal check
    var distance = this.state.tempoDistance    
    var baselineTime = this.state.tempoBaselineTime
    if ( exercise.length > 0
      && Number(distance) > 0 && Number(s) > 0
      && Number(s) < Number(baselineTime) | isNaN(baselineTime) | baselineTime === ""){
      this.setState({validTempoGoal:true})
    }
    else{
      this.setState({validTempoGoal:false})
    }
    if ( Number(s) > 0 && Number(s) >= Number(baselineTime) ){
      this.setState({validTempoBaseline:false})
    }
    else if ( Number(baselineTime) > 0 
          && (Number(s) < Number(baselineTime) | isNaN(s) | s === "") ) {
            this.setState({validTempoBaseline:true})
    }
  }

  setTempoBaselineTime(s){ 
    this.setState({tempoBaselineTime:s}); // setState
    var exercise = this.state.tempoExercise // valid tempo goal check
    var distance = this.state.tempoDistance
    var goalTime = this.state.tempoGoalTime
    if ( exercise.length > 0
      && Number(distance) > 0 && Number(goalTime) > 0
      && Number(goalTime) < Number(s) | isNaN(s) | s === ""){
      this.setState({validTempoGoal:true})
    }
    else{
      this.setState({validTempoGoal:false})
    }
    if ( Number(s) > 0
      && (Number(s) > Number(goalTime) | isNaN(goalTime) | goalTime === "") ){
      this.setState({validTempoBaseline:true})
    }
    else {
      this.setState({validTempoBaseline:false})
    }
  }

  render() {
    return (
      <Fragment>
      <Banner/>
      <div className = "wrapperRecordGoal">  
      {/* GOAL DIV */}
        <div className = "item item1">
            <div className = "innerGoalTitle">
                <GoalIcon icon = {tempoIcon} validGoal = {this.state.validTempoGoal}/>
                <GoalPrefaceText goalType = {this.state.goalType}/> {" "}
                <TempoExerciseInput goalType = {this.state.goalType} setTempoExercise = {this.setTempoExercise.bind(this)} /> {" "}
                <TempoDistanceInput goalType = {this.state.goalType} setTempoDistance = {this.setTempoDistance.bind(this)}/> {" "}
                <TempoMilesText goalType = {this.state.goalType} /> {" "}
                <TempoInText goalType = {this.state.goalType} /> {" "}
                <TempoGoalTimeInput goalType = {this.state.goalType} setTempoGoalTime = {this.setTempoGoalTime.bind(this)} baselineTime = {this.state.tempoBaselineTime}/> {" "}
                <TempoMinutesText time = {this.state.tempoGoalTime} goalType = {this.state.goalType} />
            </div>
        </div>
        
      {/* BASELINE DIV */}
        <div className = "item item2">
            <div className = "innerGoalSection">
                <BaselineIcon validBaseline = {this.state.validTempoBaseline} goalType = {this.state.goalType} />
                <BaselinePrefaceText goalType = {this.state.goalType}/> {" "}
                <TempoBaselineExerciseText exercise = {this.state.tempoExercise} goalType = {this.state.goalType}/> {" "}
                <TempoBaselineDistanceText distance = {this.state.tempoDistance} goalType = {this.state.goalType}/> {" "}
                <TempoMilesText goalType = {this.state.goalType} /> {" "}
                <TempoInText goalType = {this.state.goalType} /> {" "}
                <TempoBaselineTimeInput goalType = {this.state.goalType} setTempoBaselineTime = {this.setTempoBaselineTime.bind(this)} goalTime = {this.state.tempoGoalTime} /> {" "}
                <TempoBaselineMinutesText baselineTime = {this.state.tempoBaselineTime} goalType = {this.state.goalType} />
            </div>
        </div>
        
      {/* TIMEFRAME DIV */}
        <div className = "item item3">
            <div className = "innerGoalSection">
                <TimeframeIcon timeframe = {this.state.goalTimeframe} />
                <OneWeekButton setTimeframe = {this.setTimeframe.bind(this)} timeframe = {this.state.goalTimeframe} />
                <TwoWeeksButton setTimeframe = {this.setTimeframe.bind(this)} timeframe = {this.state.goalTimeframe} />
                <ThreeWeeksButton setTimeframe = {this.setTimeframe.bind(this)} timeframe = {this.state.goalTimeframe} />
                <FourWeeksButton setTimeframe = {this.setTimeframe.bind(this)} timeframe = {this.state.goalTimeframe} />
            </div>
          </div>

          {/* <Incentive/> */}
          {/* <Notes/> */}

        {/* SUBMIT BUTTON */}
          <Submit 
            goaltype = {this.state.goalType}
            validGoal = {this.state.validTempoGoal} 
            validBaseline = {this.state.validTempoBaseline}
            timeframe = {this.state.goalTimeframe} 
          />
          </div>

      </Fragment>

    );
  }
}

export default Goal;
