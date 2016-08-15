import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import MyProfile from './components/myProfile'
import Start from './components/start'
import LogInSignUp from './components/logInSignUp'
import NewUser from './components/newUser'

const Routes = (
  <Router>
    <Route path='/' component={Start}>
      <IndexRoute component={LogInSignUp}/>
      <Route path='/home' component={App} />
      <Route path='/my_profile' component={MyProfile} />
      <Route path='/sign_up' component={NewUser} />
    </Route>
  </Router>
)

export default Routes