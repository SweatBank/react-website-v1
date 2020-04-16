import React, { Component } from 'react';

class CommitmentTimesText extends Component {

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
    if(this.props.times !== prevProps.times){
      this.setTextFromProps();
    }
  }

  setTextFromProps(){
    this.setText(this.props.times)
  }

  setText(times){
    if(Number(times) === 1){ this.setState({text: "time"}) }
    else { this.setState({text: "times"}) } 
  }

  render() {

    var isLiftGoal = this.props.goalType == "commitment"

    if(isLiftGoal){

    return (
        <span className = "preface" id = "commitmentTimes"> {this.state.text} </span>
    );
    }
    else { return null; }
  }
}

export default CommitmentTimesText;