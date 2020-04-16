import React, { Component } from 'react';
import { Fragment } from 'react';

class OneWeekButton extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.state = {
        selected:'',
        fillColor:'',
        textColor:'',
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props.timeframe !== prevProps.timeframe){
      if( this.props.timeframe !== 1 ){
        this.setState({fillColor:'#C6C0CA'});
        this.setState({textColor:'gray'});
        this.setState({selected:false});
      }
    }
  }

  handleClick(e){
    e.preventDefault()
    if(this.state.selected === true ){
      this.setState({fillColor:'#C6C0CA'});
      this.setState({textColor:'gray'});
      this.setState({selected:false});
      this.props.setTimeframe("none");
    }
    else {
      this.setState({fillColor:'#8A94B9'});
      this.setState({textColor:'black'});
      this.setState({selected:true});
      this.props.setTimeframe(1);
    }
  }

  handleMouseLeave(e){
    if(this.state.selected === true ){
      this.setState({textColor:'black'});
    }
    else { 
      this.setState({textColor:'gray'});
    }
  }

  handleMouseEnter(e){
    this.setState({textColor:'black'});
  }

  render() {
    return (
      <Fragment>
        <button 
            onClick = {this.handleClick.bind(this)} 
            onMouseLeave = {this.handleMouseLeave.bind(this)} 
            onMouseEnter = {this.handleMouseEnter.bind(this)} 
            className = "timeframe" 
            style = {{backgroundColor: this.state.fillColor, borderColor: this.state.fillColor, color:this.state.textColor}}
            id = "oneWeek"> 
                1 week 
        </button> &nbsp; 
      </Fragment>  
    );
  }
}

export default OneWeekButton;
