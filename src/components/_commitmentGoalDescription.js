import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class CommitmentGoalDescription extends Component {

  constructor(props) {
      super(props);
      this.state = {
        opacity:''
      };
  }

  componentDidUpdate(prevProps) { 

  }

  render() {

    return ( 
      <div className = "item commitDiv commitmentInfoDiv">
        <div className = "infoDiv">
            <button className = "commitGoal info" id ="commitmentInfo">
                <span>
                    Focus on accountability<br/><br/>
                    Commitment goals can be as broad as you would like them to be and are measured by the number of times you do an activity: <br/> <br/>
                    Examples: going to the gym, biking to work, meditating
                </span>
            </button>
        </div>
      </div>
    );
  }
}

export default CommitmentGoalDescription;
