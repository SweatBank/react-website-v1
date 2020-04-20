import React, { Component } from 'react';
import { Fragment } from 'react';
import bodyweightIcon from '../images/bodyweight2.svg';

// STYLESHEETS
import '../CSS/master.css'; 

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

// GOAL INFO
import GoalIcon from '../components/record-goal-components/_goalIcon.js'; 
import GoalPrefaceText from '../components/record-goal-components/_goalPrefaceText.js';
import BodyweightGoalRepsInput from '../components/record-goal-components/_bodyweightGoalRepsInput.js';
import BodyweightExerciseInput from '../components/record-goal-components/_bodyweightExerciseInput.js';

// BASELINE INFO
import BaselineIcon from '../components/record-goal-components/_baselineIcon.js'
import BaselinePrefaceText from '../components/record-goal-components/_baselinePrefaceText.js'
import BodyweightBaselineRepsInput from '../components/record-goal-components/_bodyweightBaselineRepsInput.js'
import BodyweightBaselineExerciseText from '../components/record-goal-components/_bodyweightBaselineExerciseText.js'

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
        goalType:'bodyweight',
        goalTimeframe:'none',
        bodyweightExercise:'',
        bodyweightGoalReps:'',
        bodyweightBaselineReps:'',
        validBodyweightGoal:'',
        validBodyweightBaseline:''
      };
  }
  
  setTimeframe(s){ this.setState({goalTimeframe:s}); }
  
  setBodyweightExercise(s){ 
    this.setState({bodyweightExercise:s}) // setState
    
    var goalReps = this.state.bodyweightGoalReps // valid goal check
    var baselineReps = this.state.bodyweightBaselineReps
    
    if ( s.length > 0 
      && Number(goalReps) > 0
      &&(Number(goalReps) > Number(baselineReps) | isNaN(baselineReps) | baselineReps === "" ) ) {
      this.setState({validBodyweightGoal:true})
    }
    else {
      this.setState({validBodyweightGoal:false})
    }
    // exercise can't affect baseline
  }
  
  setBodyweightGoalReps(s){ 
    this.setState({bodyweightGoalReps:s}) // setState
    
    var exercise = this.state.bodyweightExercise // valid goal check
    var baselineReps = this.state.bodyweightBaselineReps
    
    if ( exercise.length > 0 
      && Number(s) > 0
      &&(Number(s) > Number(baselineReps) | isNaN(baselineReps) | baselineReps === "" ) ) {
      this.setState({validBodyweightGoal:true})
    }
    else {
      this.setState({validBodyweightGoal:false}) // setState
    }
    if ( Number(baselineReps) > 0
      &&(Number(s) > Number(baselineReps) | isNaN(s) | s === "" ) ) {
      this.setState({validBodyweightBaseline:true})
    }
    else {
      this.setState({validBodyweightBaseline:false})
    }
  }
  
  setBodyweightBaselineReps(s){ 
    this.setState({bodyweightBaselineReps:s}) // setState
    
    var exercise = this.state.bodyweightExercise // valid goal check
    var goalReps = this.state.bodyweightGoalReps
    
    if ( exercise.length > 0 
      && Number(goalReps) > 0
      &&(Number(goalReps) > Number(s) | isNaN(s) | s === "" ) ) {
      this.setState({validBodyweightGoal:true})
    }
    else {
      this.setState({validBodyweightGoal:false}) // setState
    }
    if ( Number(s) > 0
      &&(Number(goalReps) > Number(s) | isNaN(goalReps) | goalReps === "" ) ) {
      this.setState({validBodyweightBaseline:true})
    }
    else {
      this.setState({validBodyweightBaseline:false})
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
                <GoalIcon icon = {bodyweightIcon} validGoal = {this.state.validBodyweightGoal}/>
                <GoalPrefaceText goalType = {this.state.goalType}/> {" "}
                <BodyweightGoalRepsInput goalType = {this.state.goalType} setBodyweightGoalReps = {this.setBodyweightGoalReps.bind(this)} baselineReps = {this.state.bodyweightBaselineReps} /> {" "}
                <BodyweightExerciseInput goalType = {this.state.goalType} setBodyweightExercise = {this.setBodyweightExercise.bind(this)}/>
            </div>
        </div>
        
      {/* BASELINE DIV */}
        <div className = "item item2">
            {/* innerGoalSection is useless className */}
            <div className = "innerGoalSection">
                <BaselineIcon validBaseline = {this.state.validBodyweightBaseline} goalType = {this.state.goalType} />
                <BaselinePrefaceText goalType = {this.state.goalType}/> {" "}
                <BodyweightBaselineRepsInput goalType = {this.state.goalType} setBodyweightBaselineReps = {this.setBodyweightBaselineReps.bind(this)} reps = {this.state.bodyweightGoalReps} /> {" "}
                <BodyweightBaselineExerciseText goalType = {this.state.goalType} exercise = {this.state.bodyweightExercise} />
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
          <Submit 
            goaltype = {this.state.goalType}
            validGoal = {this.state.validBodyweightGoal} 
            validBaseline = {this.state.validBodyweightBaseline} 
            timeframe = {this.state.goalTimeframe} 
          />
          </div>
      </Fragment>

    );
  }
}

export default Goal;
