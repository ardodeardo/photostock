import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Errors from '../pages/Errors/index';
import Login from '../pages/Login/index';
import Collection from '../pages/Collection';
import Search from '../pages/Search';


const Index = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/collection" exact component={Collection} />
        <Route path="/search" exact component={Search} />

        {/* 404 */}
        <Route
            render={(props) => (
                <Errors {...props} title="Page not found!" content="Sorry, the route you requested does not exist" />
            )}
        />
    </Switch>
);

export default Index;