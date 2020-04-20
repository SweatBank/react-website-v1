import React, { Component } from 'react';
import { Fragment } from 'react';
import liftIcon from '../images/dumbbell.svg';

// STYLESHEETS
import '../CSS/master.css'; 

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

// GOAL INFO
import GoalIcon from '../components/record-goal-components/_goalIcon.js'; 
import GoalPrefaceText from '../components/record-goal-components/_goalPrefaceText.js';
import LiftExerciseInput from '../components/record-goal-components/_liftExerciseInput.js';
import LiftGoalWeightInput from '../components/record-goal-components/_liftGoalWeightInput.js';
import LiftRepsInput from '../components/record-goal-components/_liftRepsInput.js';
import LiftTimesText from '../components/record-goal-components/_liftTimesText.js';

// BASELINE INFO
import BaselineIcon from '../components/record-goal-components/_baselineIcon.js'
import BaselinePrefaceText from '../components/record-goal-components/_baselinePrefaceText.js'
import LiftBaselineExerciseText from '../components/record-goal-components/_liftBaselineExerciseText.js'
import LiftBaselineWeightInput from '../components/record-goal-components/_liftBaselineWeightInput.js'
import LiftBaselineRepsText from '../components/record-goal-components/_liftBaselineRepsText.js'

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
      this.setGoalType = this.setGoalType.bind(this);
      this.state = {
        goalType:'',
        goalTimeframe:'none',
        liftExercise:'', 
        liftGoalWeight:'',
        liftUnits:'',
        liftReps:'',
        liftBaselineWeight:'',
        validLiftGoal:'',
        validLiftBaseline:'',
      };
  }
  
  componentDidMount() { 
    window.addEventListener('load', this.setGoalType); 
  }

  setGoalType(){
    this.setState({goalType:'weightlifting'});
  }
  
  setTimeframe(s){ this.setState({goalTimeframe:s}); }

  setLiftExercise(s){ 
    
    // setState
    this.setState({liftExercise:s});
    
    // valid lift goal check
    var liftGoalWeight = this.state.liftGoalWeight
    var liftReps = this.state.liftReps
    var liftBaselineWeight = this.state.liftBaselineWeight
    
    if ( s.length > 0 
          && liftGoalWeight > 0 && liftReps > 0 
          && (Number(liftGoalWeight) > Number(liftBaselineWeight) | isNaN(liftBaselineWeight) | liftBaselineWeight === "") ){
        this.setState({validLiftGoal:true})
      }
      else { 
        this.setState({validLiftGoal:false})
      }
  }

  setLiftGoalWeight(s){ 
    
    // setState
    this.setState({liftGoalWeight:s});
    
    // valid lift goal check
    var liftExercise = this.state.liftExercise
    var liftReps = this.state.liftReps
    var liftBaselineWeight = this.state.liftBaselineWeight

    if ( liftExercise !== ""
          && Number(s) > 0 && liftReps > 0 
          && (Number(s) > Number(liftBaselineWeight) | isNaN(liftBaselineWeight) | liftBaselineWeight === "") ){
        this.setState({validLiftGoal:true})
        if( Number(liftBaselineWeight) > 0 ){
          this.setState({validLiftBaseline:true})
        }
      }
      else { 
        this.setState({validLiftGoal:false})
          if ( Number(s) > 0 && Number(s) <= Number(liftBaselineWeight) ){
            this.setState({validLiftBaseline:false})
          }
          else if ( Number(liftBaselineWeight) > 0 && (isNaN(s) | s === "") ){
            this.setState({validLiftBaseline:true})
          }
      }
  }
  
  setLiftReps(s){ 
    
    // setState
    this.setState({liftReps:s});

    // valid lift goal check
    var liftExercise = this.state.liftExercise
    var liftGoalWeight = this.state.liftGoalWeight
    var liftBaselineWeight = this.state.liftBaselineWeight

    if ( liftExercise !== "" 
          && liftGoalWeight > 0 && Number(s) > 0
          && (Number(liftGoalWeight) > Number(liftBaselineWeight) | isNaN(liftBaselineWeight) | liftBaselineWeight === "") ){
        this.setState({validLiftGoal:true})
      }
      else { 
        this.setState({validLiftGoal:false})
      }
  }
  
  setLiftBaselineWeight(s){ 
    
    // setState
    this.setState({liftBaselineWeight:s});
    
    // valid baseline check
    var liftGoalWeight = this.state.liftGoalWeight
    var liftExercise = this.state.liftExercise
    var liftReps = this.state.liftReps

    if ( s.length > 0 && Number(s) > 0 && (Number(liftGoalWeight) > Number(s) | isNaN(liftGoalWeight) | liftGoalWeight === "") ){
      this.setState({validLiftBaseline:true})
      if ( liftExercise !== "" && Number(liftGoalWeight) > 0 && Number(liftReps) > 0) {
        this.setState({validLiftGoal:true})
      }
    }
    else { 
      this.setState({validLiftBaseline:false})
      if ( Number(liftGoalWeight) <= Number(s) ){
        this.setState({validLiftGoal:false})
      }
      else if ( liftExercise !== "" && Number(liftGoalWeight) > 0 && Number(liftReps) > 0) {
        this.setState({validLiftGoal:true})
      }
    }
  }

  render() {

    // need to figure out how to show or hide components depending on which goal type is being rendered

    return (
      <Fragment>
      <Banner/>
      <div className = "wrapperRecordGoal">  
      {/* GOAL DIV */}
        <div className = "item item1">
          <div className = "innerGoalTitle">
            <GoalIcon icon = {liftIcon} validGoal = {this.state.validLiftGoal}/>
            <GoalPrefaceText goalType = {this.state.goalType}/> {" "}
            <LiftExerciseInput goalType = {this.state.goalType} setLiftExercise = {this.setLiftExercise.bind(this)} /> {" "}
            <LiftGoalWeightInput goalType = {this.state.goalType} setLiftGoalWeight = {this.setLiftGoalWeight.bind(this)} baselineWeight = {this.state.liftBaselineWeight} /> {" "}
            <LiftRepsInput goalType = {this.state.goalType} setLiftReps = {this.setLiftReps.bind(this)} /> {" "}
            <LiftTimesText reps = {this.state.liftReps} goalType = {this.state.goalType} />
          </div>
        </div>
        
      {/* BASELINE DIV */}
        <div className = "item item2">
          <div className = "innerGoalSection">
            <BaselineIcon validBaseline = {this.state.validLiftBaseline} goalType = {this.state.goalType} />
            <BaselinePrefaceText goalType = {this.state.goalType}/> {" "}
            <LiftBaselineExerciseText exercise = {this.state.liftExercise} goalType = {this.state.goalType}/> {" "}
            <LiftBaselineWeightInput goalType = {this.state.goalType} setLiftBaselineWeight = {this.setLiftBaselineWeight.bind(this)} goalWeight = {this.state.liftGoalWeight} />
            <LiftBaselineRepsText reps = {this.state.liftReps} goalType = {this.state.goalType}/> {" "}
            <LiftTimesText reps = {this.state.liftReps} goalType = {this.state.goalType} />
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
            validGoal = {this.state.validLiftGoal} 
            validBaseline = {this.state.validLiftBaseline} 
            timeframe = {this.state.goalTimeframe} 
          />
        </div>  
      </Fragment>

    );
  }
}

export default Goal;
