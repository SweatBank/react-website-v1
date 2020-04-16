import React, { Component } from 'react';

class LiftBaselineExerciseText extends Component {

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
    if(this.props.exercise !== prevProps.exercise){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.exercise)
  }

  setText(exercise){
    if( exercise === "" ){
      this.setState({text: "squat"}) 
    }
    else { this.setState({text: exercise})  }
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

export default LiftBaselineExerciseText;
