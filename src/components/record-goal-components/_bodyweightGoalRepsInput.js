import React, { Component } from 'react';

class BodyweightRepsInput extends Component {

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
    if(this.props.baselineReps !== prevProps.baselineReps){
      
    // valid input check
    var reps = document.getElementById("reps").value
    var baselineReps = document.getElementById("baselineReps").value

    if ( Number(reps) > 0 && (Number(reps) > baselineReps | baselineReps == "")){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("reps").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    // resizing
    var placeholderLength = document.getElementById("reps").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // validation
    var baselineReps = document.getElementById("baselineReps").value
    // console.log(!isNaN(e.target.value))
    // console.log(e.target.value > 0)
    // console.log(e.target.value > baselineReps)

    if ( Number(e.target.value) > 0 && Number(e.target.value) > baselineReps ){ this.setState({fillColor: '#8A94B9'}) }    // where would be a good place to declare 
    else { this.setState({fillColor: '#C6C0CA'}) }                                             
    
     // passing reps to parent Goal component, which then passes reps to the LiftEndText component
     this.props.setBodyweightGoalReps(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 10}) }

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
            id = "reps" 
            type = "text" 
            placeholder = {this.state.placeholder} 
            maxLength = "5"
            autoFocus = "true" /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default BodyweightRepsInput;
