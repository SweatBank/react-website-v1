import React, { Component } from 'react';

class TempoDistanceInput extends Component {

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

  startSizeInput(){
    var placeholderLength = document.getElementById("distance").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    // resizing
    var placeholderLength = document.getElementById("distance").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // validation
    if ( !isNaN(e.target.value) && e.target.value > 0 ){ this.setState({fillColor: '#8A94B9'}) }    // where would be a good place to declare 
    else { this.setState({fillColor: '#C6C0CA'}) }                                                 // a global "valid input" color?

    // passing distance to Goal component
    this.props.setTempoDistance(e.target.value)

  }
  
  setPlaceholderText(){ this.setState({placeholder: 4}) }

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
            id = "distance" 
            type = "text" 
            placeholder = {this.state.placeholder} /> 
        </form>
    );
    }
    else { return null; }
  }
}

export default TempoDistanceInput;
