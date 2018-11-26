import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from 'components/pages/Home';
import DynamicPage from 'components/pages/DynamicPage';
import NoMatch from 'components/pages/NoMatch';
import Loading from './Loading';

// const AsyncDynamicPAge = importedComponent(
//     () => import(/* webpackChunkName:'DynamicPage' */ 'components/pages/DynamicPage'),
//     {
//         LoadingComponent: Loading
//     }
// );

// const AsyncNoMatch = importedComponent(
//     () => import(/* webpackChunkName:'NoMatch' */ 'components/pages/NoMatch'),
//     {
//         LoadingComponent: Loading
//     }
// );

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dynamic" component={DynamicPage} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;