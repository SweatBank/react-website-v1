import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// composition:
// container that takes an ID, from which 

class GoalRow extends Component {

  constructor(props) {
      super(props);
      this.state = {
        goalID: "",
        completeGoalString: "bench press 250 lbs 5 times",
        startDate: "3/4/2020",
        endDate: "3/23/2020",
        goalType: "",
        percentProgress: "",
        textColor:"gray",
        // most of these should probably be props associated with a goal ID, rather than states
      };
  }


  render() {
    return (
      <Fragment>
      <div className = "itemMyGoals goalStringDiv"> 
        <div className = "contentDiv-mygoals firstCol" > 
          <div 
            className = "internalcontentDiv-mygoals"
            style = {{color:this.state.textColor}}> 
            <br></br> {this.state.completeGoalString} 
          </div> 
        </div> 
      </div>
      
      <div className = "itemMyGoals iconDiv"> 
        <div className = "contentDiv-mygoals" > 
          <img src = {this.props.icon} className ="goalTypeIcon"/> 
        </div> 
      </div>

      <div className = "itemMyGoals startDateDiv"> 
        <div className = "contentDiv-mygoals" > 
          <div 
            className = "internalcontentDiv-mygoals"
            style = {{color:this.state.textColor}}> 
            <br></br> {this.state.startDate} 
          </div> 
        </div>
      </div>

      <div className = "itemMyGoals endDateDiv"> 
        <div className = "contentDiv-mygoals" > 
          <div 
            className = "internalcontentDiv-mygoals"
            style = {{color:this.state.textColor}}>  
            <br></br> {this.state.endDate} 
          </div> 
        </div> 
      </div>
    
      <div className = "itemMyGoals progressDiv"> 
        <div className = "contentDiv-mygoals" > 
          <br></br> 
          <button 
            className = "progressBar" 
            style = {{innerWidth:this.state.percentProgress}}> 
            <div className = "progressFill"> </div> 
          </button> 
        </div> 
      </div>
      
      <div className = "itemMyGoals buttonDivMyGoals"> 
        <div className = "contentDiv-mygoals lastCol" > 
          <button id = "addProgressButton" > 
            <Link 
              className = "navButton navButton-mygoals" 
              id = "addGoal" 
              to='/addprogress'>add progress
            </Link>
          </button> 
        </div> 
      </div>

      </Fragment>  
    );
  }
}

export default GoalRow;
