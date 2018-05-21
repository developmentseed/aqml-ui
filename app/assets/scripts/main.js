'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import About from './pages/about';
import Data from './pages/data';
import Map from './pages/map';
import NoMatch from './pages/404';

import store from './store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <main role="main">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/data' component={Data} />
          <Route exact path='/cities/:city' component={Map} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>
);

render(
  <Root store={store} />,
  document.querySelector('#app')
);
