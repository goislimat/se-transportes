
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import reducers from './reducers/index';
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDom.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={ Home } />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('content')
);