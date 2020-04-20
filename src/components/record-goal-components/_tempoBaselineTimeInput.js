import React, { Component } from 'react';

class TempoBaselineTimeInput extends Component {

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
    if(this.props.goalTime !== prevProps.goalTime){
      
    // valid input check
    var goalTime = document.getElementById("time").value
    var baselineTime = document.getElementById("baselineTime").value

    if ( Number(baselineTime) > 0 && (Number(baselineTime) > goalTime | goalTime == "")){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("baselineTime").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
     
    // resizing
    var placeholderLength = document.getElementById("baselineTime").placeholder.length
    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // valid input check
    var goalTime = document.getElementById("time").value
    if ( Number(e.target.value) > 0 && (Number(e.target.value) > goalTime | goalTime == "")){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }

    // passing baselineTime to parent Goal component
    this.props.setTempoBaselineTime(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 40}) }

  render() {

    var isTempoGoal = this.props.goalType == "tempo"

    if(isTempoGoal){

    return (
        <form className = "userInput"> 
            <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            className = "exerciseInput numberInput" 
            style = {{backgroundColor: this.state.fillColor}}
            id = "baselineTime" 
            type = "text" 
            maxlength = "4"
            placeholder = {this.state.placeholder} /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default TempoBaselineTimeInput;
