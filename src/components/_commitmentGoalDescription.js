import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class CommitmentGoalDescription extends Component {

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
      className = "item commitDiv commitmentInfoDiv"
      onClick = {this.handleClick.bind(this)}
      onMouseLeave = {this.handleMouseLeave.bind(this)} 
      onMouseEnter = {this.handleMouseEnter.bind(this)} >
        <div className = "infoDiv">
            <button 
            className = "commitGoal infoSelectGoal" 
            id ="commitmentInfo"
            style = {{opacity : this.state.opacity}} > 
                <span>
                    Focus on accountability<br/><br/>
                    Commitment goals can be as broad as you would like them to be and are measured by the number of times you do an activity: <br/> <br/>
                    Examples: going to the gym, biking to work, meditating
                </span>
            </button>
        </div>
      </div>
    );
  }
}

export default CommitmentGoalDescription;
