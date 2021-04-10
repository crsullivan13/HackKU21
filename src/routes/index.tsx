import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './signIn';
import Home from './Home';
import HackitPage from './Hackit'

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={SignIn}
                />
                <Route
                    exact
                    path="/home"
                    component={Home}
                />
                <Route
                    exact
                    path="/h/:slug"
                    component={HackitPage}
                />
            </Switch>
        </Router>
    );
}

export default AppRouter;