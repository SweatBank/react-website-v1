// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class ProgressText extends Component {

    constructor(props) {
        super(props);
        this.setPlaceholderTextWeight = this.setPlaceholderTextWeight.bind(this);
        this.startSizeInputWeight = this.startSizeInputWeight.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.setPlaceholderTextReps = this.setPlaceholderTextReps.bind(this);
        this.startSizeInputReps = this.startSizeInputReps.bind(this);
        this.handleRepsChange = this.handleRepsChange.bind(this);
        this.state = { 
            placeholderWeight:'',
            sizeWeight: '',
            fillColorWeight: '',
            
            placeholderReps:'',
            sizeReps: '',
            fillColorReps: ''
        };
    }

    componentDidMount() { 
        window.addEventListener('load', this.setPlaceholderTextWeight); 
        window.addEventListener('load', this.startSizeInputWeight);
        window.addEventListener('load', this.setPlaceholderTextReps);
        window.addEventListener('load', this.startSizeInputReps);
      }
      
      componentWillUnmount() {  
        window.removeEventListener('load', this.setPlaceholderTextWeight);
        window.removeEventListener('load', this.startSizeInputWeight);
        window.removeEventListener('load', this.setPlaceholderTextReps);
        window.removeEventListener('load', this.startSizeInputReps);
      }
    
      setPlaceholderTextWeight(){ this.setState({placeholderWeight: "205"}) }
      setPlaceholderTextReps(){ this.setState({placeholderReps: "5"}) }

      startSizeInputWeight(){
        var placeholderLength = document.getElementById("thisMilestoneWeight").placeholder.length
        this.setState({sizeWeight: placeholderLength + 2}) 
      }

      startSizeInputReps(){
        var placeholderLength = document.getElementById("thisMilestoneReps").placeholder.length
        this.setState({sizeReps: placeholderLength + 2}) 
      }
      
      handleWeightChange(e){
        e.preventDefault()
        var placeholderLength = document.getElementById("thisMilestoneWeight").placeholder.length
        if ( e.target.value.length > 0 ){ this.setState( {sizeWeight: e.target.value.length + 2} ) } // resizing
        else { this.setState({sizeWeight: placeholderLength + 2}) }
        if ( e.target.value.length > 0 ){ this.setState({fillColorWeight: '#8A94B9'}) }  // valid input check
        else { this.setState({fillColorWeight: '#C6C0CA'}) }
        // this.props.setLiftExercise(e.target.value) 
      }
      
      handleRepsChange(e){
        e.preventDefault()
        var placeholderLength = document.getElementById("thisMilestoneReps").placeholder.length
        if ( e.target.value.length > 0 ){ this.setState( {sizeReps: e.target.value.length + 2} ) } // resizing
        else { this.setState({sizeReps: placeholderLength + 2}) }
        if ( e.target.value.length > 0 ){ this.setState({fillColorReps: '#8A94B9'}) }  // valid input check
        else { this.setState({fillColorReps: '#C6C0CA'}) }
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
                    <span className = "previousInputText-addprogress"> squat </span> &nbsp;
                        
                        <form className = "userInput">
                            <input 
                                onChange = {this.handleWeightChange.bind(this)} 
                                size = {this.state.sizeWeight} 
                                style = {{backgroundColor: this.state.fillColorWeight}}
                                className ="exerciseInput-addprogress" 
                                id = "thisMilestoneWeight" 
                                type ="text" 
                                placeholder = {this.state.placeholderWeight} 
                                autofocus = "true" />
                        </form> &nbsp; 
                        
                        <span className = "previousInputText-addprogress"> lbs </span> &nbsp;

                        <form className = "userInput">
                            <input 
                                onChange = {this.handleRepsChange.bind(this)} 
                                size = {this.state.sizeReps} 
                                style = {{backgroundColor: this.state.fillColorReps}}
                                className ="exerciseInput-addprogress" 
                                id = "thisMilestoneReps" 
                                type ="text" 
                                placeholder = {this.state.placeholderReps} 
                                />
                        </form> &nbsp; 
                        
                        <span className = "previousInputText-addprogress"> times </span> &nbsp;
                    </div>
                </div>
                
                <div className ="item emptyDiv"/>
            </Fragment>
        );
    }
}

export default ProgressText;