import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/pages/home/home'
import Mobiles from './components/pages/mobiles/mobiles';
import Babyteethers from './components/pages/babyteethers/babyteethers';
import Diapers from './components/pages/diapers/diapers';
import Decor from './components/pages/decor/decor';

export default (
    <Switch>
        <Route exact path = '/' component={ Homepage }  />
        <Route path='/mobiles' component={ Mobiles }/>
        <Route path='/babyteethers' component={ Babyteethers }/>
        <Route path='/diapers' component={ Diapers }/>
        <Route path='/decor' component={ Decor }/>
    </Switch>
)