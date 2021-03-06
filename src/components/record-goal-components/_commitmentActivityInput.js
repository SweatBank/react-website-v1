import React, { Component } from 'react';

class CommitmentActivityInput extends Component {

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

  setPlaceholderText(){ 
    this.setState({placeholder: "go to spin class"}) 
  }

  handleChange(e){
    e.preventDefault()

    // resizing
    var placeholderLength = document.getElementById("exercise").placeholder.length

    if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) }
    else { this.setState({size: placeholderLength + 2}) }

    // valid input check
    if ( e.target.value.length > 0 ){ this.setState({fillColor: '#8A94B9'}) }  
    else { this.setState({fillColor: '#C6C0CA'}) }

    // passing activity to parent
    this.props.setCommitmentActivity(e.target.value)
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
            maxLength = "50"
            autofocus /> 
        </form> 
    );
  }
}

export default CommitmentActivityInput;
