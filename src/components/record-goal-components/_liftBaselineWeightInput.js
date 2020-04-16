import React, { Component } from 'react';
import { Fragment } from 'react';

class LiftBaselineWeightInput extends Component {

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

  componentDidUpdate(prevProps) {
    if(this.props.goalWeight !== prevProps.goalWeight){
      
    // valid input check
    var goalWeight = document.getElementById("weight").value
    var baselineWeight = document.getElementById("baselineWeight").value
    if(baselineWeight.length > 0 ){
      if ( Number(baselineWeight) > 0 && (Number(baselineWeight) < goalWeight | goalWeight == "" | isNaN(goalWeight)) ){ this.setState({fillColor: '#8A94B9'}) }  
      else { this.setState({fillColor: '#C6C0CA'}) }
      }
    }
  }

  startSizeInput(){
    var placeholderLength = document.getElementById("baselineWeight").placeholder.length
    this.setState({size: placeholderLength + 2}) 
  }

  handleChange(e){
    
    e.preventDefault()
    
    var placeholderLength = document.getElementById("baselineWeight").placeholder.length
    var goalWeight = document.getElementById("weight").value

    // resizing
    if ( e.target.value.length > 0 ){ 
      this.setState( {size: e.target.value.length + 2} ) 
    }
    else { 
      this.setState({size: placeholderLength + 2}) 
    }

    // valid input check
    if ( Number(e.target.value) > 0 && (Number(e.target.value) < Number(goalWeight) | isNaN(goalWeight) | goalWeight === "") ){ 
      this.setState({fillColor: '#8A94B9'}) 
    }  
    else { 
      this.setState({fillColor: '#C6C0CA'}) 
    }

    // passing to parent
    this.props.setLiftBaselineWeight(e.target.value) 
  }
  
  setPlaceholderText(){ this.setState({placeholder: 115}) }

  render() {
    return (
      <Fragment>
        <form className = "userInput"> 
            <input 
            onChange = {this.handleChange.bind(this)} 
            size = {this.state.size} 
            className = "exerciseInput numberInput" 
            style = {{backgroundColor: this.state.fillColor}}
            id = "baselineWeight" 
            type = "text" 
            placeholder = {this.state.placeholder} /> 
        </form>
        {" "}
        <span className = "preface">lbs</span>
      </Fragment> 
    );
  }
}

export default LiftBaselineWeightInput;
