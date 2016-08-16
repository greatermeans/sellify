import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import Start from './components/start'
import NavBar from './components/navBar'
import Login from './containers/login'
import MyProfile from './components/myProfile'
import LogInSignUp from './components/logInSignUp'
import NewUserForm from './components/newUserForm'

const Routes = (
  <Router>
    <Route path='/' component={Start} />
    <Route path='/authorize' component={LogInSignUp} />
    <Route path='/home' component={App}>
      <Route path='/my_profile' component={MyProfile} />
    </Route>
  </Router>
)

export default Routes
