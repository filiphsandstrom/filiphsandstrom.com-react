import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';
import Freelance from '../../Views/Freelance';
import Events from '../../Views/Events';
import Music from '../../Views/Music';
import Merch from '../../Views/Merch';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/freelance' component={Freelance}/>
                    <Route exact path='/events' component={Events}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/merch' component={Merch}/>
                </Switch>
            </main>
        );
    }
}
export default Main;