import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import LogInSignUp from './components/logInSignUp'
import LoggedIn from './containers/loggedIn'
import SmartAllOrganizations from './containers/allOrganizations'
import AuthDashboard from './containers/dashboard'
import AuthAllListing from './containers/allListings'
import AuthMyProfile from './components/myProfile'
import Listing from './containers/listing'

const Routes = (
  // Listing routes need to be authorized!
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={LogInSignUp} />
        <Route path='/home' component={LoggedIn} >
          <Route path='/organizations' component={SmartAllOrganizations} />
          <Route path='/dashboard' component={AuthDashboard} />
          <Route path='/listings' component={AuthAllListing} />
          <Route path='/my_profile' component={AuthMyProfile} />
          <Route path='/listings/:id' component={Listing} />
        </Route>
    </Route>
  </Router>
)

export default Routes
