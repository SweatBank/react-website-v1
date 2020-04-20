import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class CommitmentGoalButton extends Component {

  constructor(props) {
      super(props);
      this.state = {
        buttonClasses:'navButton disallowed'
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.selected !== prevProps.selected){
      if (this.props.selected !== "commitment"){
        this.setState({buttonClasses:"navButton disallowed"})
      }
      else{
        this.setState({buttonClasses:"navButton allowed"})
      }
    }
  }

  render() {

    return ( 
        <div className = "itemSelectGoal buttonDiv commitButtonDiv">
            <Link 
                className = {this.state.buttonClasses}
                id = "commitmentButton" 
                to = "/recordcommitmentgoal" >
                add details
            </Link>
        </div>
    );
  }
}

export default CommitmentGoalButton;
