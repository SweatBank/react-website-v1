
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../images/person_head.svg';
import '../../CSS/master.css';

class Banner extends Component {

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (   
      <Fragment>
          <div className = "navBarWrapper">
            <div className = "navBarLeft">
              <Link to = "/"> 
                <span id ="home"> sweatbank </span> 
              </Link> 
            </div>
          
            <div 
              className = "navBarRight">
              <Link to = "/profile"> 
                <img src= {homeIcon} id= "profileIcon"/> 
              </Link> 
            </div>
          </div>
      </Fragment>
    );
  }
}

export default Banner;