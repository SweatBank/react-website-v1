import React, { Component } from 'react';

class TempoExerciseInput extends Component {

  constructor(props) {
      super(props);
      this.setPlaceholderText = this.setPlaceholderText.bind(this);
      this.startSizeInput = this.startSizeInput.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
  
  setPlaceholderText(){ this.setState({placeholder: "run"}) }

  handleChange(e){
    
    e.preventDefault()

    // resizing
    var placeholderLength = document.getElementById("exercise").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // valid input check
    if ( e.target.value.length > 0 ){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }

    // passing exercise to parent
    this.props.setTempoExercise(e.target.value)
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
          maxlength = "15"
          placeholder = {this.state.placeholder} 
          autofocus = "true" /> 
      </form> 
    );
  }
}

export default TempoExerciseInput;
