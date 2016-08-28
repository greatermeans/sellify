import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import JoinOrganizationsContainer from '../containers/JoinOrganizationsContainer'

export default class JoinOrganizations extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="join_organizations"/>
        <JoinOrganizationsContainer />
      </div>
    )
  }
}
