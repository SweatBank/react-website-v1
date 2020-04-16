import React, { Component } from 'react';
import { Fragment } from 'react';

import timeframeIcon from '../../images/timeframe.svg';

class TimeframeIcon extends Component {

  constructor(props) {
      super(props);
      this.state = {
        opacity:''
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.timeframe !== prevProps.timeframe){
      if (this.props.timeframe !== "none"){ this.setState({opacity: 1})}
      else { this.setState({opacity: .3})}
    }
  }

  render() {
    return (
        <Fragment>
            <img 
            src= {timeframeIcon} 
            id= "goal" 
            className = "icon"
            style = {{opacity:this.state.opacity}}
            />
            <br/> <br/>
            <span className = "preface"> Timeframe </span> 
            <br/> <br/> 
        </Fragment>
        
    );
  }
}

export default TimeframeIcon;
