import React, { Component } from 'react';

class BaselinePrefaceText extends Component {

  constructor(props) {
      super(props);
      this.setText = this.setText.bind(this);
      this.state = {
        text: ''
      };
  }

  componentDidMount() { window.addEventListener('load', this.setText); }
  componentWillUnmount() {  window.removeEventListener('load', this.setText); }
  
  setText(){
    if (this.props.goalType === "bodyweight"){ this.setState({text: "I can currently do"}) }
    else { this.setState({text: "I can currently"}) }
  }

  render() {

    var showBaseline = this.props.goalType !== "commitment"

    if (showBaseline){
      return (
        <span className = "preface"> 
          {this.state.text} 
        </span>
    );
    } else {return null;}    
  }
}

export default BaselinePrefaceText;
