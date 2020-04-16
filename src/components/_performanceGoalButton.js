import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PerformanceGoalButton extends Component {

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
        <div className = "item buttonDiv performButtonDiv">
            <Link 
                className = "button disallowed" 
                id = "performanceButton" 
                to = "/performancegoal" >
                add details
            </Link>
        </div>
    );
  }
}

export default PerformanceGoalButton;