import React, { Component } from 'react';
import { Fragment } from 'react';

class LiftGoalWeightInput extends Component {

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

  // these aren't getting called when the page is navigated to via the select goal type page (react router)
  componentDidMount() { 
      window.addEventListener('load', this.setPlaceholderText); 
      window.addEventListener('load', this.startSizeInput);
  }
  
  componentWillUnmount() {  
      window.removeEventListener('load', this.setPlaceholderText);
      window.removeEventListener('load', this.startSizeInput);
  }

  componentDidUpdate(prevProps) {
    if(this.props.baselineWeight !== prevProps.baselineWeight){
      
      // valid input check
      var goalWeight = document.getElementById("weight").value
      var baselineWeight = document.getElementById("baselineWeight").value
      if(goalWeight.length > 0 ){
        if ( Number(goalWeight) > 0 && (Number(baselineWeight) < goalWeight | baselineWeight == "" | isNaN(baselineWeight)) ){ 
          this.setState({fillColor: '#8A94B9'}) 
        }  
        else { 
          this.setState({fillColor: '#C6C0CA'}) 
        }
      }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("weight").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    var placeholderLength = document.getElementById("weight").placeholder.length
    var baselineWeight = document.getElementById("baselineWeight").value

    // resizing
    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // valid input check
    
    if ( Number(e.target.value) > 0 && (Number(e.target.value) > Number(baselineWeight) | isNaN(baselineWeight) | baselineWeight === "") ){ 
      this.setState({fillColor: '#8A94B9'}) 
    }
    else { 
      this.setState({fillColor: '#C6C0CA'}) // old line
    }                                 
    
    // pass as prop even if input is invalid (so that baselineWeight can be validated on change)
    this.props.setLiftGoalWeight(e.target.value)
  }
  
  setPlaceholderText(){ this.setState({placeholder: 150}) }

  render() {
    return (
      <Fragment>
        <form className = "userInput"> 
          <input 
          onChange = {this.handleChange.bind(this)} 
          size = {this.state.size} 
          className = "exerciseInput numberInput" 
          style = {{backgroundColor: this.state.fillColor}}
          id = "weight" 
          type = "text" 
          placeholder = {this.state.placeholder} /> 
        </form> 
        {" "}
        <span className = "preface">lbs</span>
      </Fragment> 
    );
  }
}

export default LiftGoalWeightInput;
