import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Parents';
import Login from './components/Login';

class Routes extends Component {
    render(){
        return (
            <div>
                <Switch>                   
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Parents' component={Projects}/>
                    <Route exact path='/Login' component={Login}/>
                </Switch> 
            </div>
        )
    };
}
export default Routes;