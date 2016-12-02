import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import Page from './components/Page';
import MissingRoute from './components/MissingRoute';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routeConfig = (
    <Route path="/" component={Landing}>
        <IndexRoute component={Page} />
        <Route path="*" component={MissingRoute} />
    </Route>
);

ReactDOM.render(
    <Router
        history={hashHistory}
        routes={routeConfig}
    />,
    document.getElementById('app')
);