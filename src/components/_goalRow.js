import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';


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
      <div className = "item goalStringDiv"> 
        <div className = "contentDiv firstCol" > 
          <div 
            className = "internalContentDiv"
            style = {{color:this.state.textColor}}> 
            <br></br> {this.state.completeGoalString} 
          </div> 
        </div> 
      </div>
      
      <div className = "item iconDiv"> 
        <div className = "contentDiv" > 
          <img src = {this.props.icon} className ="goalTypeIcon"/> 
        </div> 
      </div>

      <div className = "item startDateDiv"> 
        <div className = "contentDiv" > 
          <div 
            className = "internalContentDiv"
            style = {{color:this.state.textColor}}> 
            <br></br> {this.state.startDate} 
          </div> 
        </div>
      </div>

      <div className = "item endDateDiv"> 
        <div className = "contentDiv" > 
          <div 
            className = "internalContentDiv"
            style = {{color:this.state.textColor}}>  
            <br></br> {this.state.endDate} 
          </div> 
        </div> 
      </div>
    
      <div className = "item progressDiv"> 
        <div className = "contentDiv" > 
          <br></br> 
          <button 
            className = "progressBar" 
            style = {{innerWidth:this.state.percentProgress}}> 
            <div className = "progressFill"> </div> 
          </button> 
        </div> 
      </div>
      
      <div className = "item buttonDiv"> 
        <div className = "contentDiv lastCol" > 
          <br></br> 
          <button id = "addMilestoneButton" > 
            <Link 
              className = "button" 
              id = "addGoal" 
              to='/selectgoal'>
                add progress
            </Link>
          </button> 
        </div> 
      </div>

      </Fragment>  
    );
  }
}

export default GoalRow;
