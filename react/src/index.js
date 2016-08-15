import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import combineReducer from './reducers/combine_reducer'
import { createStore , combineReducers, bindActionCreators } from 'redux'
import { connect, Provider} from 'react-redux'

const store = createStore(combineReducer)


ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>
  ,
  document.getElementById('root')

);
