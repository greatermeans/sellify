import { fetchOrganizations, fetchOrganizationsSuccess, fetchOrganizationsFailure} from '../actions/organizations';
import { connect } from 'react-redux';
import JoinOrganizationsMenu from '../components/JoinOrganizationsMenu'
import { joinOrganizations } from '../actions/organizations'
import { bindActionCreators } from 'redux'


function mapStateToProps(state) {
  return {
    organizations: state.organizations.organizationsList,
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinOrganizations: bindActionCreators(joinOrganizations, dispatch),

    fetchOrganizations: () => {
      dispatch(fetchOrganizations()).then((response) => {
            !response.error ? dispatch(fetchOrganizationsSuccess(response.payload)) : dispatch(fetchOrganizationsFailure(response.payload));
          });
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(JoinOrganizationsMenu);
