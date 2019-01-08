import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './views/main';
import Todo from './views/todo/todo';
import Sobre from './views/sobre/sobre';

const routes = [
    {
        path: '/',
        component: Main,
        routes: [
            {
                path: '/',
                component: Todo
            },
            {
                path: '/sobre',
                component: Sobre
            }
        ]
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={ route.path }
            render={ props => (
                <route.component { ...props } routes={ route.routes }/>
            ) } />
    );
}

export default class MainRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                {
                    routes.map((route, i) => (
                        <RouteWithSubRoutes key={ i } { ...route} />
                    ))
                }
            </BrowserRouter>
        )
    }
}