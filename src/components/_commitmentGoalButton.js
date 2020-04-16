import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class CommitmentGoalButton extends Component {

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
        <div className = "item buttonDiv commitButtonDiv">
            <Link 
                className = "button disallowed" 
                id = "commitmentButton" 
                to = "/recordgoal" >
                add details
            </Link>
        </div>
    );
  }
}

export default CommitmentGoalButton;
