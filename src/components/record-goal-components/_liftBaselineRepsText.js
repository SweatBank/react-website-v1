import React, { Component } from 'react';

class LiftBaselineRepsText extends Component {

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
    if( reps === "" | reps === 0 ){
      this.setState({text: "8"}) 
    }
    else { this.setState({text: reps})  }
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

export default LiftBaselineRepsText;
