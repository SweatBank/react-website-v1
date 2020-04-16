import React, { Component } from 'react';
import { Fragment } from 'react';
import commitmentIcon from '../images/commitment.svg';

// STYLESHEETS
// import '../CSS/master.css'; 

// BANNER
import Banner from '../components/record-goal-components/_banner.js';

// GOAL INFO
import GoalIcon from '../components/record-goal-components/_goalIcon.js'; 
import GoalPrefaceText from '../components/record-goal-components/_goalPrefaceText.js';
import CommitmentActivityInput from '../components/record-goal-components/_commitmentActivityInput.js';
import CommitmentTimesInput from '../components/record-goal-components/_commitmentTimesInput.js';
import CommitmentTimesText from '../components/record-goal-components/_commitmentTimesText.js';

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
      goalType:'commitment',
      goalTimeframe:'none',
      commitmentActivity:'',
      commitmentTimes:'',
      validCommitmentGoal:''
    };
  }
  
  setTimeframe(s){ this.setState({goalTimeframe:s}); }
  
  setCommitmentActivity(s){  
    this.setState({commitmentActivity:s}); // setState
    
    var times = this.state.commitmentTimes // valid commitment goal check
    if (s.length > 0 && Number(times) > 0) {
      this.setState({validCommitmentGoal:true})
    }
    else {
      this.setState({validCommitmentGoal:false})
    }
  }
  
  setCommitmentTimes(s){  
    this.setState({commitmentTimes:s}); // setState
    var activity = this.state.commitmentActivity // valid commitment goal check
    if (activity.length > 0 && Number(s) > 0) {
      this.setState({validCommitmentGoal:true})
    }
    else {
      this.setState({validCommitmentGoal:false})
    }
  }

  render() {
    return (
      <Fragment>
        <Banner/>
        <div className = "item item1">
            <div className = "innerGoalTitle">
                <GoalIcon icon = {commitmentIcon} validGoal = {this.state.validCommitmentGoal}/>
                <GoalPrefaceText goalType = {this.state.goalType}/> {" "}
                <CommitmentActivityInput goalType = {this.state.goalType} setCommitmentActivity = {this.setCommitmentActivity.bind(this)} /> {" "}
                <CommitmentTimesInput setCommitmentTimes = {this.setCommitmentTimes.bind(this)} goalType = {this.state.goalType} /> {" "}
                <CommitmentTimesText times = {this.state.commitmentTimes} goalType = {this.state.goalType} />
            </div>
        </div>

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
            validGoal = {this.state.validCommitmentGoal}             
            timeframe = {this.state.goalTimeframe} 
          />
      </Fragment>
    );
  }
}

export default Goal;
