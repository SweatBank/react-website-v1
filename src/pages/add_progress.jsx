// PACKAGES
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
// import '../CSS/master.css';

// IMAGES
import liftIcon from '../images/dumbbell.svg';
import myProfile from '../images/person_head.svg';


class AddProgress extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className = "wrapper wrapper-addprogress">

                <div className ="item item01 banner" id ="navBarLeft"> 
                    <a href= "file:home.html"> 
                        <span id ="home"> sweatbank </span> 
                    </a> 
                </div>
                
                <div className ="item item02 banner" id ="navBarMid"> </div>
                
                <div className ="item item03 banner" id ="navBarRight"> 
                    <a href= "file:sweatbank_profile.html"> 
                        <img src= {myProfile} id="profileIcon"/> 
                    </a> 
                </div>


                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress firstRow-addprogress">
                        <span className = "title-addprogress">goal</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress firstRow-addprogress">
                        <span className = "staticText previousInput goal lift"> squat </span> &nbsp;
                        <span className = "staticText previousInput goal goalWeight"> 255 </span> &nbsp;
                        <span className = "staticText previousInput goal units"> lbs </span> &nbsp;
                        <span className = "staticText previousInput goal reps"> 5 </span> &nbsp;
                        <span className = "staticText goal"> times </span>
                    </div>
                </div>

                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">baseline</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress">
                        <span className = "staticText previousInput baseline lift"> squat </span> &nbsp;
                        <span className = "staticText previousInput baseline baselineWeight"> 175 </span> &nbsp;
                        <span className = "staticText previousInput baseline units"> lbs </span> &nbsp;
                        <span className = "staticText previousInput baseline reps"> 5 </span> &nbsp;
                        <span className = "staticText goal"> times </span>
                    </div>
                </div>

                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">this milestone</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress">
                        <span className = "staticText previousInput thisMilestone lift"> squat </span> &nbsp;
                        <form className = "userInput"><input className ="exerciseInput" id = "thisMilestoneWeight" type ="text" placeholder="205" autofocus/></form> &nbsp;
                        <span className = "staticText previousInput thisMilestone units"> lbs </span> &nbsp;
                        <span className = "staticText previousInput thisMilestone reps"> 5 </span> &nbsp;
                        <span className = "staticText goal"> times </span>
                    </div>
                </div>

                <div className ="item titleDiv-addprogress">
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">today</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress"> 
                    <div className = "innerContentDiv-addprogress" id = "today"> 
                        <span> 4/15/2020 </span> 
                    </div>
                </div>

                <div className ="item titleDiv-addprogress">
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">goal end date</span>
                    </div>
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress" id = "goalEndDate"> 
                        <span> 4/21/2020 </span> 
                    </div>
                </div>

                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">days remaining</span>
                    </div>
                </div>
                
                <div className ="item contentDiv-addprogress"> 
                    <div className = "innerContentDiv-addprogress" id = "daysLeft"> 
                        <span> 6 </span> 
                    </div>
                </div>

                <div className ="item titleDiv-addprogress">
                    <div className = "buttonSection-addprogress"> 
                        <button className = "navButton navButton-addprogress disallowed"> 
                            record milestone 
                        </button>
                    </div>
                </div>
                
                <div className ="item contentDiv-addprogress">
                    <div className = "iconSection-addprogress">
                        <img className = "goalTypeIcon-addprogress"src = {liftIcon} ></img>
                    </div>
                </div>

                <div className ="item bottomRow-addprogress"></div>

            </div>
        );
    }
}

export default AddProgress;
