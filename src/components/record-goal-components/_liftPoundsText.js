import React, { Component } from 'react';

class LiftPoundsText extends Component {

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {

    var isTempoGoal = this.props.goalType == "weightlifting"

    if(isTempoGoal){

    return (
        <span className = "preface"> lbs</span>
    );
    }
    else { return null; }
  }
}

export default LiftPoundsText;