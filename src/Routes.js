import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Provider from './components/Provider';
import Projects from './components/Parents';
import Login from './components/Login';

class Routes extends Component {
    render(){
        return (
            <div>
                <Switch>                
                    <Route exact path='/' component={Provider}/>   
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Provider' component={Provider}/>
                    <Route exact path='/Parents' component={Projects}/>
                    <Route exact path='/Login' component={Login}/>
                </Switch> 
            </div>
        )
    };
}
export default Routes;