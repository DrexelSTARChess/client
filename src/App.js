import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import Game from './pages/game'
import Home from './pages/home'
import Final from './pages/finalPage'
import Info from './pages/moreInfo'
import NotFound from './pages/404Page'
import BoardComponent from './components/BoardComponent';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Game" component={BoardComponent} />
                    <Route exact path="/Final" component={Final} />
                    <Route exact path="/Info" component={Info} />
                    <Route exact path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
