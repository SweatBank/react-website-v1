
import React, { Component } from 'react';
import { Fragment } from 'react';
import homeIcon from '../../images/person_head.svg';
import '../../CSS/record_goal.css';

class Banner extends Component {

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (   
      <Fragment>
          <div className = "item banner" id = "navBarLeft">
            <a href= "file:home.html"> 
              <span id = "home"> 
                sweatbank 
              </span> 
            </a>
          </div>

          <div className = "item banner" id = "navBarMid"/>

          <div className = "item banner" id = "navBarRight">
            <a  href= "file:sweatbank_profile.html"> <img src= {homeIcon} id= "profileIcon"/> </a>
          </div>
      </Fragment>
    );
  }
}

export default Banner;
