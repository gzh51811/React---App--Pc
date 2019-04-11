import React from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/pages/Login';
import App from './App';

export default()=>(
    <Router>
        <Switch>
            <Route path='/login' component={Login}/> 
            <Route path='/app' component={App}/>
        </Switch>
    </Router>
)

