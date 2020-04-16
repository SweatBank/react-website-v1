import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

import commitmentIcon from '../images/commitmentIcon.svg';

class CommitmentGoalIcon extends Component {

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
      <button className = "commitGoal" id ="commitmentIcon">
          <img src= {commitmentIcon} className = "icon"/>
      </button>
  </div>
    );
  }
}

export default CommitmentGoalIcon;
