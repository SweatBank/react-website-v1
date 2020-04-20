import React, { Component } from 'react';
import { Fragment } from 'react';

class Submit extends Component {
  constructor(props) {
      super(props);
      this.state = {
        buttonClasses: 'navButton navButtonRecordGoal disallowed'
    };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.goaltype !== "commitment"){
      if(this.props.validGoal !== prevProps.validGoal 
        |this.props.validBaseline !== prevProps.validBaseline 
        |this.props.timeframe !== prevProps.timeframe ){
        if ( this.props.validBaseline && this.props.validGoal && this.props.timeframe !== "none" ){ 
          this.setState({buttonClasses:'navButton navButtonRecordGoal allowed'})
        }
        else { 
          this.setState({buttonClasses:'navButton navButtonRecordGoal disallowed'})
        }
      }
    }
    else {
      if(this.props.validGoal !== prevProps.validGoal 
        |this.props.timeframe !== prevProps.timeframe ){
        if ( this.props.validGoal && this.props.timeframe !== "none" ){ 
          this.setState({buttonClasses:'navButton navButtonRecordGoal allowed'})
        }
        else { 
          this.setState({buttonClasses:'navButton navButtonRecordGoal disallowed'})
        }
      }
    }
  }

  render() {
    return (
      <Fragment>
          <div className = "item item6"> 
            <br/>
            <button className = {this.state.buttonClasses}> submit goal </button> 
          </div>
          <div className = "item item7"> </div>
      </Fragment>  
    );
  }
}

export default Submit;