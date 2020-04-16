import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class PerformanceGoalTitle extends Component {

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
        <div className = "item performDiv titleDiv">
            <button className = "performGoal" id ="performanceTitle">
                <span className = "title"> Performance </span>
            </button>   
        </div>
    );
  }
}

export default PerformanceGoalTitle;
