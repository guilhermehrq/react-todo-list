import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from './todo/todo';
import Sobre from './sobre/sobre';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route exact={ true } path='/'  component={ Todo } />
            <Route path='/sobre' component={ Sobre } />
        </Switch>
    </BrowserRouter>
);

export default Routes;