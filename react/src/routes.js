import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import ListingsIndex from './pages/ListingsIndex';
import ListingsNew from './pages/ListingsNew';
import ListingsShow from './pages/ListingsShow';
import SignIn from './pages/SignIn';
import SignInFormContainer from './containers/SignInFormContainer.js';
import SignUp from './pages/SignUp';
import ForgotPwd from './pages/ForgotPwd';
import ValidateEmail from './pages/ValidateEmail';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import JoinOrganizations from './pages/JoinOrganizations';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/dashboard" component={ListingsIndex} />
    <Route path="listings/new" component={ListingsNew} />
    <Route path="listings/:id" component={ListingsShow} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgotPwd" component={ForgotPwd} />
    <Route path="/validateEmail/:token" component={ValidateEmail} />
    <Route path="/profile" component={Profile} />
    <Route path="/organizations" component={JoinOrganizations} />
  </Route>
);
