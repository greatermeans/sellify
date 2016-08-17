import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../reducers/organizationSelectReducer'
import organizationSelect from '../actions/selectOrganization'

const OrganizationSelectBox = class extends Component {
  render(){

    return
    <div>
      <div>

      </div>
    </div>
  }
}

function mapStateToProps(state){
  return {
    organizationSelect: state.organizationSelect
  }
}



function

export default connect(mapStateToProps, {organizationSelect})(OrganizationSelectBox)
