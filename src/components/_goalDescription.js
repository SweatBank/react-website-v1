
import React, { Component } from 'react';
import { Fragment } from 'react';

class GoalDescription extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.setExercises = this.setExercises.bind(this);
      this.setInformation = this.setInformation.bind(this);
      this.setExample = this.setExample.bind(this);
      this.state = {
        exercises:'',
        information:'',
        example:'',
        selected:'',
        opacity:.3,
        textColor:''
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedGoalType !== prevProps.selectedGoalType){
      if( this.props.selectedGoalType !== this.props.goalType ){
        this.setState({textColor:'gray'})
        this.setState({opacity:.3})
        this.setState({selected:false})
      }
    }
  }

  componentDidMount() { 
    window.addEventListener('load', this.setExercises); 
    window.addEventListener('load', this.setInformation); 
    window.addEventListener('load', this.setExample);
  }
  
  componentWillUnmount() {  
    window.removeEventListener('load', this.setExercises); 
    window.removeEventListener('load', this.setInformation); 
    window.removeEventListener('load', this.setExample);
  }

  // Q for Sam: better way to map than using multiple if statements?
  setExercises(){
    if (this.props.goalType === "tempo"){ this.setState({exercises: "running, walking, biking, swimming, etc"}) }
    if (this.props.goalType === "bodyweight"){ this.setState({exercises: "push ups, pull ups, burpees, etc"}) }
    if (this.props.goalType === "weightlifting"){ this.setState({exercises: "squats, curls, lunges, bench press, etc"}) }
  }

  setInformation(){
    if (this.props.goalType === "tempo"){ this.setState({information: "distance, time"}) }
    if (this.props.goalType === "bodyweight"){ this.setState({information: "number of reps"}) }
    if (this.props.goalType === "weightlifting"){ this.setState({information: "number of reps, weight"}) }
  }

  setExample(){
    if (this.props.goalType === "tempo"){ this.setState({example: "run 2 miles in 15 minutes"}) }
    if (this.props.goalType === "bodyweight"){ this.setState({example: "8 pull ups"}) }
    if (this.props.goalType === "weightlifting"){ this.setState({example: "squat 150 lbs for 8 reps"}) }
  }

  handleClick(e){
    if (this.state.selected === true){
        this.setState({textColor:'gray'})
        this.setState({opacity:.3})
        this.setState({selected:false})
        this.props.setSelectedGoalType("none")
    }
    else {
        this.setState({textColor:'black'})
        this.setState({opacity:1})
        this.setState({selected:true})
        this.props.setSelectedGoalType(this.props.goalType)
    }
  }

  handleMouseLeave(e){
    if (this.state.selected === true){
        // do nothing
    }
    else {
        this.setState({textColor:'gray'})
        this.setState({opacity:.3})
    }
  }

  handleMouseEnter(e){
    if (this.state.selected === true){
        // do nothing
    }
    else {
        this.setState({textColor:'gray'})
        this.setState({opacity:.7})
    }
  }

  render() {
    return (   
        <Fragment>
            <div className = "item emptyDiv"/>
            
            <div 
                className ="item iconDiv-performance"
                onClick = {this.handleClick.bind(this)} 
                onMouseLeave = {this.handleMouseLeave.bind(this)} 
                onMouseEnter = {this.handleMouseEnter.bind(this)} >
                    <img 
                      className = "performanceGoalIcon" 
                      src={this.props.icon} 
                      style = {{opacity:this.state.opacity}}
                    />
            </div>

            <div 
                className ="item textDiv-performance"
                onClick = {this.handleClick.bind(this)} 
                onMouseLeave = {this.handleMouseLeave.bind(this)} 
                onMouseEnter = {this.handleMouseEnter.bind(this)} >

                <div className = "description" style = {{opacity:this.state.opacity}}>
                    <span style = {{color:this.state.textColor}}> {this.props.goalType}: </span>
                    
                    <span className = "examples" id = "tempoDescription">
                    {this.state.exercises} <br/> 
                    
                    <span style = {{color:this.state.textColor}}> info: </span>
                    {this.state.information} <br/> 

                    <span style = {{color:this.state.textColor}}> ex: </span>
                    {this.state.example} <br/> 
                    </span>
                </div>
            </div>
            
            <div className = "item emptyDiv"/>
        </Fragment>
        
    );
  }
}

export default GoalDescription;
