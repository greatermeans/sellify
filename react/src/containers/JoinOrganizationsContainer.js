import { fetchOrganizations, fetchOrganizationsSuccess, fetchOrganizationsFailure} from '../actions/organizations';
import { connect } from 'react-redux';
import JoinOrganizationsMenu from './components/JoinOrganizationsMenu'


function mapStateToProps(state) {
  return {
    organizationsList: state.organizations.organizationsList};
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrganizations: () => {
      dispatch(fetchOrganizations()).then((response)=>{
        dispatch(fetchOrganizationsSuccess(response.payload))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinOrganizationsMenu);
