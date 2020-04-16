import React, { Component } from 'react';

class LiftBaselineUnitsText extends Component {

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
    if(this.props.units !== prevProps.units){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.units)
  }

  setText(units){
    if( units === "" ){
      this.setState({text: "lbs/kg"}) 
    }
    else { this.setState({text: units})  }
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

export default LiftBaselineUnitsText;
