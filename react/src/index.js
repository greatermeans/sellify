import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reducers from './reducers/combineReducer'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

const createStoreWithMiddleware = applyMiddleware(reduxThunk,ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(Reducers)}>
	  		<Router history={browserHistory} routes={Routes} />
  	</Provider>,
  document.getElementById('root')
);
