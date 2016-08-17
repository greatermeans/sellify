import React, { Component } from 'react';

export default class OrganizationBox extends Component {
  onChange(e){
    debugger
    this.setState({ inputValue: e.target.value });
  }

  render({name, id}){
    return(
      <div>
        <label>{name}</label>
        <input type='checkbox' value={id} onChange={this.onChange.bind(this)}/>
      </div>

    )
  }
}
