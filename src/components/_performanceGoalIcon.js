import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

import performanceIcon from '../images/performanceIcon.svg';

class PerformanceGoalIcon extends Component {

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
      <div className = "item commitDiv iconDiv">
      <button className = "commitGoal" id ="performanceIcon">
          <img src= {performanceIcon} className = "icon"/>
      </button>
  </div>
    );
  }
}

export default PerformanceGoalIcon;
