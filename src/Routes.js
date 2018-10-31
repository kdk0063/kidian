import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Provider from './components/Provider';
import Login from './components/Login';
import HomeLanding from './components/HomeLanding';


class Routes extends Component {
    render(){
        return (
            <div>
                <Switch>                
                    <Route exact path='/' component={Provider}/>   
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Provider' component={Provider}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/HomeSearch' component={HomeLanding}/>
                </Switch> 
            </div>
        )
    };
}
export default Routes;