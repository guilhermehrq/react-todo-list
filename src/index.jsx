import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './views/main';
import './index.scss';

function IndexRouter() {
    return (
        <Router>
            <Main />
        </Router>
    )
}

ReactDOM.render(IndexRouter(), document.getElementById('root'));