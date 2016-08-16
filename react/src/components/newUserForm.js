import React, {Component} from 'react'
import addUser from '../actions/addUser'
import { reduxForm } from 'redux-form';

class NewUserForm extends Component {

  submitHandler(userData) {
    this.props.addUser(userData)
  }

 render() {
   const {fields: {first_name, last_name, password, email, street_address, city, state, phone}, handleSubmit} = this.props;
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
    <label>Phone:</label>
    <input type='text' {...phone}/><br/>
    <label>Street Address:</label>
    <input type='text' {...street_address}/><br/>
    <label>City:</label>
    <input type='text' {...city}/><br/>
    <label>State:</label>
    <select {...state}>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    <button type='submit'>Submit</button>
  </form>

   );
 }
}

export default reduxForm({
 form: 'newForm',
 fields: ['first_name', 'last_name', 'email', 'password',
'email', 'street_address', 'city', 'state', 'phone']
}, null,{addUser})(NewUserForm);
