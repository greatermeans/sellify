import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Landing from './pages/Landing';
import ListingsIndex from './pages/ListingsIndex';
import AllListings from './pages/AllListings';
import ListingsNew from './pages/ListingsNew';
import ListingsShow from './pages/ListingsShow';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import JoinOrganizations from './pages/JoinOrganizations';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/dashboard" component={ListingsIndex} />
    <Route path="/listings" component={AllListings} />
    <Route path="listings/new" component={ListingsNew} />
    <Route path="listings/:id" component={ListingsShow} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/profile" component={Profile} />
    <Route path="/organizations" component={JoinOrganizations} />
  </Route>
);
