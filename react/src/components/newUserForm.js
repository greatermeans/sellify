import React, {Component, PropTypes} from 'react'
import addUser from '../actions/addUser'
import { reduxForm } from 'redux-form';

class NewUserForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  submitHandler(userData) {
    this.props.addUser(userData)
    .then(() => {
      debugger
      this.context.router.push('/home')
    })
  }

 render() {
   const {fields: {first_name, last_name, password, email, zipcode, phone}, handleSubmit} = this.props;
   return (
  <form id='new_user' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
    <label>First name:</label>
    <input type='text' {...first_name}/><br/>
    <label>Last name:</label>
    <input type='text' {...last_name}/><br/>
    <label>Password:</label>
    <input type='password' {...password}/><br/>
    <label>Email:</label>
    <input type='text' {...email}/><br/>
    <label>Zip Code:</label>
    <input type='text' {...zipcode}/><br/>
    <button type='submit'>Submit</button>
  </form>

   );
 }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default reduxForm({
 form: 'newForm',
 fields: ['first_name', 'last_name', 'email', 'password',
'email', 'street_address', 'city', 'state', 'phone']
}, mapStateToProps,{addUser})(NewUserForm);
