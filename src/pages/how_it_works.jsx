import React from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
// import '../CSS/master.css';

import myProfile from '../images/person_head.svg';
import writingIcon from '../images/paper_pen.svg';
import baselineIcon from '../images/baselineOptimized.svg';
import timeframeIcon from '../images/timeframe.svg';
import incentiveIcon from '../images/incentive.svg';
import charityIcon from '../images/charity.svg';
import blastoffIcon from '../images/blastoff.svg';

function HowItWorks() {

// need to add event handlers that say "when mouse is scrolled over any item in a div with the class commitDiv..."

return(

    <div className = "wrapper">

        <div className ="item banner" id ="navBarLeft">
            <Link className = "pagelink" to = "/" > <span id ="home"> sweatbank </span> </Link> 
        </div>

        <div className ="item banner" id ="navBarRight">
            <Link className = "pagelink" href= "file:sweatbank_profile.html"><img src= {myProfile} id="profileIcon"/> </Link>
        </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader firstRow">
            <span className = "bigNumber">1</span> <img src= {writingIcon} className = "headerIcon"/> <br/> <span className = "title"> write down a goal </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                You can record two types of goals: <span className = "accent"> commitment goals</span> and <span className = "accent"> performance goals </span> <br/> <br/>
                Commitment - broad accountability goals (go to spin class five times this month) <br/>
                Performance - specific fitness goals (run 3 miles in 20 minutes)
            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader">
            <span className = "bigNumber">2</span> <img src= {baselineIcon} className = "headerIcon"/> <br/> <span className = "title"> write down your baseline </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                Record what you can currently do so that SweatBank can track your progress. For example: <br/> <br/>
                Goal - My goal is to do 10 pull ups <br/>
                Baseline - I can currently do 6 pull ups
            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader">
            <span className = "bigNumber">3</span> <img src={timeframeIcon} className = "headerIcon"/> <br/> <span className = "title"> set your timeframe </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                Decide how long you want to spend working towards your goal. <br/> <br/>
                Goals can be set for 1, 2, 3, or 4 weeks. <br/> <br/>
                <span className = "accent"> What if I want to set a longer goal? </span>
            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader">
            <span className = "bigNumber">4</span> <img src= {incentiveIcon} className = "headerIcon"/> <br/> <span className = "title"> put your money where your mouth is </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                Wondered what the "bank" in SweatBank is all about? <br/> <br/>
                When you record a goal, you’ll deposit $ with us that you get back if you achieve your goal. <br/> <br/>
                Deposits are $5/week, so longer timeframes have higher incentives. <br/> <br/>
                If you don’t achieve your goal, you’ll get paid back based on the amount of progress that you made. For example: <br/> <br/>
                You can currently do <span className = "accent"> 20 push-ups</span>, and your goal is to do <span className = "accent"> 40 push-ups</span>. <br/>
                You set your timeframe to <span className = "accent"> two weeks</span>, and deposit <span className = "accent">$10</span>. <br/>
                By the end of two weeks, you are able to do <span className = "accent"> 30 push-ups</span>. <br/> <br/>
                You get <span className = "accent"> $5</span> back! (because you made it halfway to your goal).

            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader">
            <span className = "bigNumber">5</span> <img src={charityIcon} className = "headerIcon"/> <br/> <span className = "title"> pick a charity </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                You didn't think we were just going to keep your money, did you?! <br/> <br/>
                Well... we are :D but only a fraction. <br/> <br/>
                If you don't achieve your goal, <span className = "accent">80%</span> of the money that you leave with us will be given to the charity of your choice, and the other <span className = "accent"> 20% </span> will be used to support our team.
            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionHeader">
            <span className = "bigNumber">6</span> <img src={blastoffIcon} className = "headerIcon"/> <br/> <span className = "title"> make it happen </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item sectionContents">
            <span className = "description">
                Now that it's all on paper, it's up to you to follow through. <br/> <br/>
                Along the way, you can record progress as often as you want with SweatBank. <br/> <br/>
                Our hope is that our platform helps users develop the habit of setting smart goals for themselves and sticking to them, no matter how small or large.<br/><br/>
                All clear? If not, <span className = "accent"> shoot us an email</span> at sweatbankapp@gmail.com.
            </span>
        </div>
        <div className = "item emptyDiv"> </div>

        <div className = "item emptyDiv"> </div>
        <div className = "item buttonsSection">
            <a className = "button" id = "performanceButton" href= "file:select_goal_type.html" >add goal</a> &nbsp; &nbsp;
            <a className = "button" id = "performanceButton" href= "file:my_goals.html" >my goals</a> &nbsp; &nbsp;
            <a className = "button" id = "performanceButton" href= "file:home.html" >back to home</a>
        </div>
        <div className = "item emptyDiv"> </div>



        <div className = "item emptyDiv bottomRow"> </div>



    </div>

);
}

export default HowItWorks;
