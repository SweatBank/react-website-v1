import React, { Component } from 'react';

class BodyweightBaselineRepsInput extends Component {

  constructor(props) {
      super(props);
      this.setPlaceholderText = this.setPlaceholderText.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.startSizeInput = this.startSizeInput.bind(this);
    //   this.setReps = this.setReps.bind(this);
      this.state = {
        placeholder: '',
        size: '',
        fillColor:''
      };
  }

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

  componentDidUpdate(prevProps) {
    if(this.props.reps !== prevProps.reps){
      
    // valid input check
    var reps = document.getElementById("reps").value
    var baselineReps = document.getElementById("baselineReps").value

    if ( Number(baselineReps) > 0 && (Number(baselineReps) < reps | reps == "")){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("baselineReps").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    // resizing
    var placeholderLength = document.getElementById("baselineReps").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // validation
    var goalReps = document.getElementById("reps").value
    if ( Number(e.target.value) > 0 && Number(e.target.value) < goalReps ){ this.setState({fillColor: '#8A94B9'}) }    
    else { this.setState({fillColor: '#C6C0CA'}) }                                                                              
    
    // passing reps to parent Goal component
    this.props.setBodyweightBaselineReps(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 5}) }

  render() {

    var isBodyweightGoal = this.props.goalType == "bodyweight"

    if(isBodyweightGoal){

    return (
        <form className = "userInput"> 
            <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            style = {{backgroundColor: this.state.fillColor}}
            className = "exerciseInput numberInput" 
            id = "baselineReps" 
            type = "text" 
            placeholder = {this.state.placeholder} 
            /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default BodyweightBaselineRepsInput;
