import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Reducers from './reducers/combineReducer'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, Route, browserHistory } from 'react-router'
import Routes from './routes'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(Reducers)}>
	  		<Router history={browserHistory} routes={Routes} />
  	</Provider>
  ,
  document.getElementById('root')

);
