import React from 'react';
import Navbar from '../components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelPage from '../pages/MarvelPage';
import DcPage from '../pages/DcPage';
import HeroesPage from '../pages/HeroesPage';
import DashboardPage from '../pages/DashboardPage';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/dashboard" component={ DashboardPage } />
                    <Route exact path="/marvel" component={ MarvelPage } />
                    <Route exact path="/dc" component={ DcPage } />
                    <Route exact path="/hero/:id" component={ HeroesPage } />
                    <Redirect to="/dashboard" />
                </Switch>
            </div>
        </>
    )
}
