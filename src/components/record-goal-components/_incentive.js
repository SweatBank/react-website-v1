import React, { Component } from 'react';
import { Fragment } from 'react';
import moneyIcon from '../../images/incentive.svg';

class Incentive extends Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }

  callBack1() {
      
    // who knows what is going here
    
  }

  render() {

    return (

      <Fragment>
        <div className = "item item4">
            <div className = "innerGoalSection">
                <span className = "sectionTitle"> <img src= {moneyIcon} id = "incentive" className = "icon"/> </span> <br/> <br/>
                <span id = "incentiveDollarSign"> $ </span> <span id = "incentiveAmount"> </span>
            </div>
        </div>
      </Fragment>  

    );
  }
}

export default Incentive;
