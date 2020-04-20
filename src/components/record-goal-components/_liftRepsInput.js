import React, { Component } from 'react';

class LiftRepsInput extends Component {

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

  componentDidMount() { 
    window.addEventListener('load', this.setPlaceholderText); 
    window.addEventListener('load', this.startSizeInput);
  }
  
  componentWillUnmount() {  
    window.removeEventListener('load', this.setPlaceholderText);
    window.removeEventListener('load', this.startSizeInput);
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
    if ( !isNaN(e.target.value) && e.target.value > 0 ){ this.setState({fillColor: '#8A94B9'}) } 
    else { this.setState({fillColor: '#C6C0CA'}) }                                               

    //  passing to parent
    this.props.setLiftReps(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 8}) }

  render() {
    return (
      <form className = "userInput"> 
          <input 
          onChange = {this.handleChange.bind(this)} 
          size = {this.state.size} 
          style = {{backgroundColor: this.state.fillColor}}
          className = "exerciseInput numberInput" 
          id = "reps" 
          type = "text" 
          maxlength = "3"
          placeholder = {this.state.placeholder} /> 
      </form>
    );
  }
}

export default LiftRepsInput;
