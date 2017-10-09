
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
import NavBar from './components/nav-bar';
import Home from './components/home';
import Students from './components/students';
import StudentsNew from './components/students-new';
import Income from './components/income';
import Payments from './components/payments';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDom.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/home" component={ Home } />
          <Route path="/alunos/novo" component={ StudentsNew } />
          <Route path="/alunos" component={ Students } />
          <Route path="/rendimentos" component={ Income } />
          <Route path="/pagamentos" component={ Payments } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('content')
);