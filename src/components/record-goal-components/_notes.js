import React, { Component } from 'react';
import { Fragment } from 'react';
import notesIcon from '../../images/notebook.svg';

class Notes extends Component {

  constructor(props) {
      super(props);
      this.state = {
        // new states will reflect all possible types of goals

      };
  }

  callBack1() {
      // who knows what's going in here
  }

  render() {

    return (

      <Fragment>
        <div className = "item item5">
            <div className = "innerGoalSection">
                <span className = "sectionTitle"> <img src= {notesIcon} id = "notes" className = "icon"/> </span> <br/> <br/> 
                <form className = "userInput"> <textarea className = "notesInput" id = "noteArea" type = "text" placeholder= "Add some words of encouragement or a note to yourself about why this is important to you (optional)."> </textarea> </form>
            </div>
        </div>
      </Fragment>  
    );
  }
}

export default Notes;
