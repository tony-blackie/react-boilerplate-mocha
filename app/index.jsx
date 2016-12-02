import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routeConfig = (
    <Route path="/" component={Landing}>
        <IndexRoute component={Landing} />
        <Route path="/other" component={Other} />
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