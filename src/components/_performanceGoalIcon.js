import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

import performanceIcon from '../images/performanceIcon.svg';

class PerformanceGoalIcon extends Component {

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
      <div className = "itemSelectGoal commitDiv iconDivSelectGoal"
      onClick = {this.handleClick.bind(this)}
      onMouseLeave = {this.handleMouseLeave.bind(this)} 
      onMouseEnter = {this.handleMouseEnter.bind(this)} >
        <button className = "performGoal">
        <img 
            className = "icon-selectgoal"
            src= {performanceIcon} 
            style = {{opacity : this.state.opacity}} />
        </button>
      </div>
    );
  }
}

export default PerformanceGoalIcon;
