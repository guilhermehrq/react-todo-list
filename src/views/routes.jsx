import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from './todo/todo';
import Sobre from './sobre/sobre';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route path="/sobre" component={ Sobre } />
            <Route exact path={ props.match.path }  component={ Todo } />
        </Switch>
    </BrowserRouter>
);

export default Routes;