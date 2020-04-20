import React, { Component } from 'react';

class TempoGoalTimeInput extends Component {

  constructor(props) {
      super(props);
      this.setPlaceholderText = this.setPlaceholderText.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.startSizeInput = this.startSizeInput.bind(this);
      this.state = {
        placeholder: '',
        size: '',
        fillColor:''
      };
  }

  isTempoGoal() { return this.props.goalType == "tempo"; }

  componentDidMount() { 
    if(this.isTempoGoal()){
      window.addEventListener('load', this.setPlaceholderText); 
      window.addEventListener('load', this.startSizeInput);
    }
  }
  
  componentWillUnmount() {  
    if(this.isTempoGoal()){
      window.removeEventListener('load', this.setPlaceholderText);
      window.removeEventListener('load', this.startSizeInput);
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.baselineTime !== prevProps.baselineTime){
      
    // valid input check
    var goalTime = document.getElementById("time").value
    var baselineTime = document.getElementById("baselineTime").value

    if ( Number(goalTime) > 0 && (Number(baselineTime) > goalTime | baselineTime == "")){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("time").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    // resizing
    var placeholderLength = document.getElementById("time").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // validation
    var baselineTime = document.getElementById("baselineTime").value
    if ( Number(e.target.value) > 0 && (Number(e.target.value) < baselineTime | baselineTime == "")){ this.setState({fillColor: '#8A94B9'}) } 
    else { this.setState({fillColor: '#C6C0CA'}) }                                                 

     // passing time to parent Goal component, which then passes time to the TempoMinutesText component
     this.props.setTempoGoalTime(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 30}) }

  render() {

    var isTempoGoal = this.props.goalType == "tempo"

    if(isTempoGoal){

    return (
        <form className = "userInput"> 
            <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            style = {{backgroundColor: this.state.fillColor}}
            className = "exerciseInput numberInput" 
            id = "time" 
            type = "text" 
            maxlength = "4"
            placeholder = {this.state.placeholder} /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default TempoGoalTimeInput;
