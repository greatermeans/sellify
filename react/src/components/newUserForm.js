import React, {Component, PropTypes} from 'react'
import addUser from '../actions/addUser'
import { reduxForm } from 'redux-form';
var Modal = require('boron/DropModal');

class NewUserForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  showModal() {
    this.refs.modalone.show();
  }

  nextModal() {
    this.refs.modalone.hide();
    this.refs.modaltwo.show();
  }

  hideModal() {
    this.refs.modalone.hide();
    this.refs.modaltwo.hide();
  }

  submitHandler(userData) {
    this.props.addUser(userData)
    this.props.getOrganizations()
    .then((self) => {

      this.context.router.push('/home')
    })
  }

 render() {
   const {fields: {first_name, last_name, password, email, zipcode}, handleSubmit} = this.props;
   return (
    <div>
      <button onClick={this.showModal.bind(this)}>Sign Up</button>
      <form id='new_user' onSubmit={handleSubmit(this.submitHandler.bind(this))}>
        <Modal ref="modalone">
          <h3>Sign Up</h3>
          <label>Email:</label>
          <input type='text' {...email}/><br/>
          <label>Password:</label>
          <input type='password' {...password}/><br/>
          <button type='button' onClick={this.nextModal.bind(this)}>Submit</button>
          <button onClick={this.hideModal.bind(this)}>X</button>
        </Modal>
        <Modal ref="modaltwo">
          <h3>Sign Up</h3>
          <label>First name:</label>
          <input type='text' {...first_name}/><br/>
          <label>Last name:</label>
          <input type='text' {...last_name}/><br/>
          <label>Zip Code:</label>
          <input type='text' {...zipcode}/><br/>
          <button type='submit'>Submit</button>
          <button onClick={this.hideModal.bind(this)}>X</button>
        </Modal>
        <Modal ref="modalthree">
          <h3>Choose Your Organizations</h3>
          <input type='text' {...last_name}/><br/>
          <label>Zip Code:</label>
          <input type='text' {...zipcode}/><br/>
          <button type='submit'>Submit</button>
          <button onClick={this.hideModal.bind(this)}>X</button>
        </Modal>
      </form>
    </div>
   );
 }
}



function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default reduxForm({
 form: 'newUserForm',
 fields: ['first_name', 'last_name', 'email', 'password', 'zipcode']
}, mapStateToProps,{addUser})(NewUserForm);
