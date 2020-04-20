import React, { Component } from 'react';

class CommitmentTimesInput extends Component {

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

  isCommitmentGoal() { return this.props.goalType == "commitment"; }

  componentDidMount() { 
    if(this.isCommitmentGoal()){
      window.addEventListener('load', this.setPlaceholderText); 
      window.addEventListener('load', this.startSizeInput);
    }
  }
  
  componentWillUnmount() {  
    if(this.isCommitmentGoal()){
      window.removeEventListener('load', this.setPlaceholderText);
      window.removeEventListener('load', this.startSizeInput);
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
    if ( !isNaN(e.target.value) && e.target.value > 0 ){ this.setState({fillColor: '#8A94B9'}) }    // where would be a good place to declare 
    else { this.setState({fillColor: '#C6C0CA'}) }                                                 // a global "valid input" color?

     // passing reps to parent Goal component, which then passes reps to the LiftEndText component
    this.props.setCommitmentTimes(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 8}) }

  render() {

    var isCommitmentGoal = this.props.goalType == "commitment"

    if(isCommitmentGoal){

    return (
        <form className = "userInput"> 
            <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            style = {{backgroundColor: this.state.fillColor}}
            className = "exerciseInput numberInput" 
            id = "reps" 
            type = "text" 
            maxLength = "3"
            placeholder = {this.state.placeholder} /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default CommitmentTimesInput;
