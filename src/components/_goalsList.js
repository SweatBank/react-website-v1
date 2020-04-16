// PACKAGES
import React, { Component } from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

// STYLESHEETS
// import '../CSS/home.css'; 
import '../CSS/my_goals.css';

// ICONS
import profileIcon from '../images/person_head.svg';

// COMPONENTS
import GoalRow from '../components/_goalRow.js';


class GoalsList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <ol>
            {/* Not sure if I actually need to do this */}
            </ol>
        );
    }
}

export default GoalsList;