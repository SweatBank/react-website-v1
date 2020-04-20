// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class ProgressText extends Component {

    constructor(props) {
        super(props);
        this.setPlaceholderText = this.setPlaceholderText.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.startSizeInput = this.startSizeInput.bind(this);
        this.state = { 
            placeholder:'',
            size: '',
            fillColor: ''
        };
    }

    componentDidMount() { 
        window.addEventListener('load', this.setPlaceholderText); 
        window.addEventListener('load', this.startSizeInput);
      }
      
      componentWillUnmount() {  
        window.removeEventListener('load', this.setPlaceholderText);
        window.removeEventListener('load', this.startSizeInput);
      }
    
      startSizeInput(){
        var placeholderLength = document.getElementById("thisMilestoneWeight").placeholder.length
        this.setState({size: placeholderLength + 2}) 
      }
    
      setPlaceholderText(){ this.setState({placeholder: "205"}) }
      
      handleChange(e){
        e.preventDefault()
        
        var placeholderLength = document.getElementById("thisMilestoneWeight").placeholder.length
    
        if ( e.target.value.length > 0 ){ this.setState( {size: e.target.value.length + 2} ) } // resizing
        else { this.setState({size: placeholderLength + 2}) }
        
        if ( e.target.value.length > 0 ){ this.setState({fillColor: '#8A94B9'}) }  // valid input check
        else { this.setState({fillColor: '#C6C0CA'}) }
    
        // this.props.setLiftExercise(e.target.value) 
    
      }

    render() {
        return (
            
            <Fragment>
                <div className ="item emptyDiv"/>
                
                <div className ="item titleDiv-addprogress"> 
                    <div className = "innerTitleDiv-addprogress">
                        <span className = "title-addprogress">most recent</span>
                    </div> 
                </div>

                <div className ="item contentDiv-addprogress">
                    <div className = "innerContentDiv-addprogress">
                        <span className = "previousInput-addprogress thisMilestone"> squat </span> &nbsp; &nbsp;
                        
                        <form className = "userInput">
                            <input 
                                onChange = {this.handleChange.bind(this)} 
                                size = {this.state.size} 
                                style = {{backgroundColor: this.state.fillColor}}
                                className ="exerciseInput-addprogress" 
                                id = "thisMilestoneWeight" 
                                type ="text" 
                                placeholder = {this.state.placeholder} 
                                autofocus = "true" />
                        </form> &nbsp; &nbsp;
                        
                        <span className = "previousInput-addprogress thisMilestone units"> lbs </span> &nbsp; &nbsp;
                        
                        {/* this needs to become a valid input too! */}
                        <span className = "previousInput-addprogress thisMilestone reps"> 5 </span> &nbsp; &nbsp;
                        
                        <span className = "previousInput-addprogress"> times </span>
                    </div>
                </div>
                
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default ProgressText;