import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import App from './App';
import './index.css';

import { REDUCER } from "./reducers/REDUCER";

const store = createStore(REDUCER, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
