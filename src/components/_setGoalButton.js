
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

class SetGoalButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        buttonClasses: 'disallowed goToGoal',
        route: '/'
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedGoalType !== prevProps.selectedGoalType){
            if(this.props.selectedGoalType === "tempo"){
                this.setState({buttonClasses:'allowed goToGoal'})
                this.setState({route: '/recordtempogoal'})
            }
            if(this.props.selectedGoalType === "bodyweight"){
                this.setState({buttonClasses:'allowed goToGoal'})
                this.setState({route: '/recordbodyweightgoal'})
            }
            if(this.props.selectedGoalType === "weightlifting"){
                this.setState({buttonClasses:'allowed goToGoal'})
                this.setState({route: '/recordliftgoal'})
            }
            if(this.props.selectedGoalType === "none"){
                this.setState({buttonClasses:'disallowed goToGoal'})
            }
        }                   
    } 
  
    render() {
        return (   
            <Fragment>
                <div className = "item emptyDiv"/>
                    <div className = "item buttonDiv firstCol"> <Link className = {this.state.buttonClasses} id = "nextButton" to = {this.state.route}> set goal & timeframe </Link> </div>
                <div className = "item emptyDiv"/>
            </Fragment>
        );
    }
}

export default SetGoalButton;
