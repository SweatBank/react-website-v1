import React, { Component } from 'react';

class PrefaceText extends Component {

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
    if (this.props.goalType === "bodyweight"){ this.setState({text: "My goal is to do"}) }
    else { this.setState({text: "My goal is to"}) }
  }

  render() {

    return (
        <span className = "preface"> 
          {this.state.text} 
        </span>
    );
  }
}

export default PrefaceText;
