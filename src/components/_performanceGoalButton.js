import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PerformanceGoalButton extends Component {

  constructor(props) {
      super(props);
      this.state = {
        buttonClasses:'navButton disallowed'
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.selected !== prevProps.selected){
      if (this.props.selected !== "performance"){
        this.setState({buttonClasses:"navButton disallowed"})
      }
      else{
        this.setState({buttonClasses:"navButton allowed"})
      }
    }
  }

  render() {

    return ( 
        <div className = "itemSelectGoal buttonDiv performButtonDiv">
            <Link 
                className = {this.state.buttonClasses}
                id = "performanceButton" 
                to = "/performancegoal" >
                add details
            </Link>
        </div>
    );
  }
}

export default PerformanceGoalButton;