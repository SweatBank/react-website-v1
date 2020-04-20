import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class PerformanceGoalDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity:.3
    };
}

componentDidUpdate(prevProps) { 
  if(this.props.selected !== prevProps.selected){
    if (this.props.selected !== "performance"){
      this.setState({opacity:.3})
    }
    else{
      this.setState({opacity:1})
    }
  }

  if(this.props.hover !== prevProps.hover){
    if (this.props.selected !== "performance"){
      if (this.props.hover !== "performance"){
        this.setState({opacity:.3})
      }
      else{
        this.setState({opacity:.7})
      }
    }
  }
}

handleClick(e){
  if (this.props.selected !== "performance"){
    this.props.setSelected("performance")
  }
  else {
    this.props.setSelected("none")
  }
}

handleMouseLeave(e){ this.props.setHover("none") }
handleMouseEnter(e){ this.props.setHover("performance") }

  render() {

    return ( 
        <div className = "item performDiv performanceInfoDiv"
        onClick = {this.handleClick.bind(this)}
        onMouseLeave = {this.handleMouseLeave.bind(this)} 
        onMouseEnter = {this.handleMouseEnter.bind(this)} >
            <div className = "infoDiv">
                <button 
                className = "performGoal infoSelectGoal" 
                id ="performanceInfo"
                style = {{opacity : this.state.opacity}} > 
                    <span>
                        Focus on a specific exercise <br/><br/>
                        There are three types of performance goals: <br/><br/>
                        Paced: running, biking, swimming, etc. <br/>
                        Bodyweight exercises: push ups, pull ups, etc. <br/>
                        Weightlifting: squats, bench press, curls, etc. <br/>
                    </span>
                </button>
            </div>
        </div>
    );
  }
}

export default PerformanceGoalDescription;
