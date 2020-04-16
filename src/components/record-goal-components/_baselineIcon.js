import React, { Component } from 'react';
import { Fragment } from 'react';

import baselineIcon from '../../images/baseline.svg';

class BaselineIcon extends Component {

  constructor(props) {
      super(props);
      this.state = {
        opacity:''
      };
  }

  componentDidUpdate(prevProps) { 
    if(this.props.validBaseline !== prevProps.validBaseline){
      if (this.props.validBaseline === true){ 
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
            src= {baselineIcon} 
            id= "baseline" 
            className = "icon"
            style = {{opacity:this.state.opacity}}
            />
            <br/> <br/>
        </Fragment>
        
    );
  }
}

export default BaselineIcon;
