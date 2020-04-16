import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class CommitmentGoalTitle extends Component {

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
        <div className = "item commitDiv titleDiv">
          <button className = "commitGoal" id ="commitmentTitle">
              <span className = "title"> Commitment </span>
          </button>
        </div>
    );
  }
}

export default CommitmentGoalTitle;
