import React, { Component } from 'react';

class TempoBaselineDistanceText extends Component {

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
    if(this.props.distance !== prevProps.distance){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.distance)
  }

  setText(distance){
    if( distance === "" ){
      this.setState({text: "4"}) 
    }
    else { this.setState({text: distance})  }
  }

  render() {

    var isLiftGoal = this.props.goalType == "tempo"

    if(isLiftGoal){

    return (
        <span className = "preface" id = "baselineDistance"> {this.state.text} </span>
    );
    }
    else { return null; }
  }
}

export default TempoBaselineDistanceText;
