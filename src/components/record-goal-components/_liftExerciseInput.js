import React, { Component } from 'react';

class LiftExerciseInput extends Component {

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

  componentDidMount() { 
    window.addEventListener('load', this.setPlaceholderText); 
    window.addEventListener('load', this.startSizeInput);
  }
  
  componentWillUnmount() {  
    window.removeEventListener('load', this.setPlaceholderText);
    window.removeEventListener('load', this.startSizeInput);
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("exercise").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  setPlaceholderText(){ this.setState({placeholder: "squat"}) }
  
  handleChange(e){
    e.preventDefault()
    var placeholderLength = document.getElementById("exercise").placeholder.length
    
    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) } // resizing
    else { this.setState({size: placeholderLength + 2}) }
    
    if ( e.target.value.length > 0 ){ this.setState({fillColor: '#8A94B9'}) }  // valid input check
    else { this.setState({fillColor: '#C6C0CA'}) }

    this.props.setLiftExercise(e.target.value) // passing activity to parent

  }
  
  render() {
    return (
      <form className = "userInput"> 
        <input 
          onChange = {this.handleChange.bind(this)} 
          size = {this.state.size} 
          className = "exerciseInput" 
          style = {{backgroundColor: this.state.fillColor}}
          id = "exercise" 
          type = "text" 
          placeholder = {this.state.placeholder} 
          maxlength = "20"
          autoFocus // autofocus is not working for some reason
        /> 
      </form> 
    );
  }
}

export default LiftExerciseInput;
