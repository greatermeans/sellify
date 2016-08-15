import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Reducers from './reducers/combineReducer'
import { createStore , combineReducers, bindActionCreators } from 'redux'
import { connect, Provider} from 'react-redux'

const store = createStore(Reducers)


ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>
  ,
  document.getElementById('root')

);
