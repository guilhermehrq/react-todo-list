import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Todo from './todo/todo';
import Sobre from './sobre/sobre';

const Routes = props => (
    <Switch>
        <Route exact path='/' component={ Todo } />
        <Route path='/sobre' component={ Sobre } />
    </Switch>
);

export default Routes;