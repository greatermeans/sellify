import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './App';
import LogInSignUp from './components/logInSignUp'
import LoggedIn from './containers/loggedIn'
import AuthDashboard from './containers/dashboard'
import AuthMyProfile from './components/myProfile'
import SmartAllListing from './components/allListing'
import Listing from './containers/listing'

const Routes = (
  // Listing routes need to be authorized!
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={LogInSignUp} />
        <Route path='/home' component={LoggedIn} >
          <Route path='/dashboard' component={AuthDashboard} />
          <Route path='/my_profile' component={AuthMyProfile} />
<<<<<<< HEAD
          <Route path='/listings' component={SmartAllListing} >
            <Route path='/:id' component={Listing} />
          </Route>
=======
          <Route path='/listings(/:id)' component={} />
>>>>>>> 7172c26de5f5526e237ac7fbd2222cdca234e157
        </Route>
    </Route>
  </Router>
)

export default Routes
