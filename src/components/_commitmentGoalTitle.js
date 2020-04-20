import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';


class CommitmentGoalTitle extends Component {

  constructor(props) {
      super(props);
      this.state = {
        opacity:.3
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.selected !== prevProps.selected){
      if (this.props.selected !== "commitment"){
        this.setState({opacity:.3})
      }
      else{
        this.setState({opacity:1})
      }
    }

    if(this.props.hover !== prevProps.hover){
      if (this.props.selected !== "commitment"){
        if (this.props.hover !== "commitment"){
          this.setState({opacity:.3})
        }
        else{
          this.setState({opacity:.7})
        }
      }
    }
  }

  handleClick(e){
    if (this.props.selected !== "commitment"){
      this.props.setSelected("commitment")
    }
    else {
      this.props.setSelected("none")
    }
  }

  handleMouseLeave(e){ this.props.setHover("none") }
  handleMouseEnter(e){ this.props.setHover("commitment") }

  render() {

    return ( 
        <div 
        className = "itemSelectGoal commitDiv titleDiv"
        onClick = {this.handleClick.bind(this)}
        onMouseLeave = {this.handleMouseLeave.bind(this)} 
        onMouseEnter = {this.handleMouseEnter.bind(this)} >
          <button className = "commitGoal" id ="commitmentTitle">
              <span 
              className = "title"
              style = {{opacity : this.state.opacity}} > 
                Commitment 
              </span>
          </button>
        </div>
    );
  }
}

export default CommitmentGoalTitle;
