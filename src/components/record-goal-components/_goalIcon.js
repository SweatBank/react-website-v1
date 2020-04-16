import React, { Component } from 'react';
import { Fragment } from 'react';

class GoalIcon extends Component {

  constructor(props) {
      super(props);
      this.state = {
        opacity:''
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.validGoal !== prevProps.validGoal){
      if (this.props.validGoal === true){ 
        this.setState({opacity: 1})
      }
      else { 
        this.setState({opacity: .3})
      }
    }
  }

  render() {
    return (
        <Fragment>
            <img 
            src = {this.props.icon}
            id= "goal" 
            className = "icon"
            style = {{opacity:this.state.opacity}}
            />
            <br/> <br/>
        </Fragment>  
    ); 
  }
}

export default GoalIcon;
