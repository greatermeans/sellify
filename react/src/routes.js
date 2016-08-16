import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import AuthHome from './containers/home'
import AuthMyProfile from './components/myProfile'

const Routes = (
  <Router>
    <Route path='/' component={App} />
    <Route path='/home' component={AuthHome}>
      <Route path='/my_profile' component={AuthMyProfile} />
    </Route>
  </Router>
)

export default Routes
