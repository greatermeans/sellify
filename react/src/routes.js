import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import LogInSignUp from './components/logInSignUp'
import LoggedIn from './containers/loggedIn'
import SmartAllOrganizations from './containers/allOrganizations'
import AuthDashboard from './containers/dashboard'
import AuthMyProfile from './components/myProfile'

const Routes = (
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={LogInSignUp} />
        <Route path='/home' component={LoggedIn} >
          <Route path='/organizations' component={SmartAllOrganizations} />
          <Route path='/dashboard' component={AuthDashboard} />
          <Route path='/my_profile' component={AuthMyProfile} />
        </Route>
    </Route>
  </Router>
)

export default Routes
