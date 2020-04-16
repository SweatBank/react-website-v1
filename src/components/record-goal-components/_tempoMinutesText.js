import React, { Component } from 'react';

class TempoMinutesText extends Component {

  constructor(props) {
      super(props);
      this.setText = this.setText.bind(this);
      this.state = {
        text: '',
      };
  }

  componentDidMount() { window.addEventListener('load', this.setTextFromProps()) }
  componentWillUnmount() {  window.removeEventListener('load', this.setTextFromProps()) }

  componentDidUpdate(prevProps) {
    if(this.props.time !== prevProps.time){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.time)
  }

  setText(time){
    if(Number(time) === 1){ this.setState({text: "minute"}) }
    else { this.setState({text: "minutes"}) } 
  }

  render() {

    var isTempoGoal = this.props.goalType == "tempo"

    if(isTempoGoal){

    return (
        <span className = "preface" id = "goalMinutes"> {this.state.text} </span>
    );
    }
    else { return null; }
  }
}

export default TempoMinutesText;
