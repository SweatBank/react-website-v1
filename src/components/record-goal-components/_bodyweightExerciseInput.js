import React, { Component } from 'react';

class BodyweightExerciseInput extends Component {

  constructor(props) {
      super(props);
      this.setPlaceholderText = this.setPlaceholderText.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.startSizeInput = this.startSizeInput.bind(this);
      this.state = {
        placeholder: '',
        size: '',
        fillColor: ''
      };
  }

  // TO-DO: APPLY THIS SAME CHANGE TO ALL LIFT GOAL COMPONENTS

  isBodyweightGoal() { return this.props.goalType == "bodyweight"; }

  componentDidMount() { 
    if(this.isBodyweightGoal()){
      window.addEventListener('load', this.setPlaceholderText); 
      window.addEventListener('load', this.startSizeInput);
    }
  }
  
  componentWillUnmount() {  
    if(this.isBodyweightGoal()){
      window.removeEventListener('load', this.setPlaceholderText);
      window.removeEventListener('load', this.startSizeInput);
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("exercise").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()

    // resizing
    var placeholderLength = document.getElementById("exercise").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // valid input check
    if ( e.target.value.length > 0 ){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }

    // passing exercise to parent Goal component
    this.props.setBodyweightExercise(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: "pull ups"}) }

  render() {

    var isBodyweightGoal = this.props.goalType == "bodyweight"

    if(isBodyweightGoal){

    return (
        <form className = "userInput"> 
          <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            className = "exerciseInput" 
            style = {{backgroundColor: this.state.fillColor}}
            id = "exercise" 
            type = "text" 
            maxLength = "20"
            placeholder = {this.state.placeholder} 
          /> 
        </form> 
    );
    }
    else { return null; }
  }
}

export default BodyweightExerciseInput;
