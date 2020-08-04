import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import LoginPage from '../pages/LoginPage';
import { AuthContext } from '../contexts/AuthContext';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        isAuthenticated={ user.logged }
                        path="/login" 
                        component={ LoginPage } 
                    />
                    <PrivateRoute 
                        isAuthenticated={ user.logged }
                        path="/" 
                        component={ DashboardRouter } 
                    />
                </Switch>
            </div>
        </Router>
    )
};
