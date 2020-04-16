import React, { Component } from 'react';

class LiftTimesText extends Component {

  constructor(props) {
      super(props);
      this.setText = this.setText.bind(this);
      this.state = {
        text: '',
      };
  }

  componentDidMount() { window.addEventListener('load', this.setTextFromProps()) }
  componentWillUnmount() { window.removeEventListener('load', this.setTextFromProps()) }

  componentDidUpdate(prevProps) {
    if(this.props.reps !== prevProps.reps){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.reps)
  }

  setText(reps){
    if(Number(reps) === 1){ this.setState({text: "time"}) }
    else { this.setState({text: "times"}) } 
  }

  render() {

    var isLiftGoal = this.props.goalType == "weightlifting"

    if(isLiftGoal){

    return (
        <span className = "preface" id = "goalTimes"> {this.state.text} </span>
    );
    }
    else { return null; }
  }
}

export default LiftTimesText;
