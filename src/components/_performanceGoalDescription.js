import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class PerformanceGoalDescription extends Component {

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
        <div className = "item performDiv performanceInfoDiv">
            <div className = "infoDiv">
                <button className = "performGoal info" id ="performanceInfo">
                    <span>
                        Focus on a specific exercise <br/><br/>
                        There are three types of performance goals: <br/><br/>
                        Paced: running, biking, swimming, etc. <br/>
                        Bodyweight exercises: push ups, pull ups, etc. <br/>
                        Weightlifting: squats, bench press, curls, etc. <br/>
                    </span>
                </button>
            </div>
        </div>
    );
  }
}

export default PerformanceGoalDescription;
