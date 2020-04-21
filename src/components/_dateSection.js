// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class TodayText extends Component {

    constructor(props) {
        super(props);
        this.setDates = this.setDates.bind(this);
        this.state = { 
            today: '',
            goalEndDate:'', // will be passed in via goal ID as prop
            daysLeft:''
        };
    }


    componentDidMount() { 
        window.addEventListener('load', this.setDates)
    }
      
    componentWillUnmount() {  
        window.removeEventListener('load', this.setDates)
    }

    setDates(){
        var today = new Date();
        var todayString = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()
        this.setState({today: todayString})


    }



    render() {
        

        
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>
                
                <div className ="item titleDiv-addprogress todayDiv-addprogress">
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">today</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress todayDiv-addprogress"> 
                    <div className = "innerContentDiv-addprogress" id = "today"> 
                        <span> {this.state.today} </span> 
                    </div>
                </div>
                
                <div className ="item emptyDiv"/> <div className ="item emptyDiv"/>
                
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
                
                <div className ="item emptyDiv"/> <div className ="item emptyDiv"/>
                
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
                
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default TodayText;