import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/add' component={Form}/>
            <Route path='/add/:id' component={Form}/>
        </Switch>
    )
}