import React from 'react';

import Home from './pages/home.jsx';
import SelectGoal from './pages/select_goal_type.jsx';
import RecordLiftGoal from './pages/record_lift_goal.jsx';
import RecordBodyweightGoal from './pages/record_bodyweight_goal.jsx';
import RecordTempoGoal from './pages/record_tempo_goal.jsx';
import MyGoals from './pages/my_goals.jsx';
import RecordCommitmentGoal from './pages/record_commitment_goal.jsx';
import SelectPerformanceGoal from './pages/select_performance_goal.jsx';
import HowItWorks from './pages/how_it_works.jsx';
import AddProgress from './pages/add_progress.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//  REACT ROUTER TUTORIAL
//  https://www.youtube.com/watch?v=Law7wfdg_ls
// 
// ABOUT TRANSITIONS BETWEEN ROUTES (think about this later, purely cosmetic)
// https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9


function App() {
  return(
    <Router>
        <Switch>
          <Route exact path = "/" component = {Home} /> 
          <Route exact path = "/selectgoal" component = {SelectGoal} /> 
          <Route exact path = "/performancegoal" component = {SelectPerformanceGoal} />
          {/* add a render property after component property? */}
          <Route exact path = "/recordliftgoal" component = {RecordLiftGoal} />
          <Route exact path = "/recordbodyweightgoal" component = {RecordBodyweightGoal} />
          <Route exact path = "/recordtempogoal" component = {RecordTempoGoal} />
          <Route exact path = "/recordcommitmentgoal" component = {RecordCommitmentGoal} />
          <Route exact path = "/mygoals" component = {MyGoals} />
          <Route exact path = "/addprogress" component = {AddProgress} />
          <Route exact path = "/howitworks" component = {HowItWorks} />
        </Switch>
    </Router>
  );
}

export default App;