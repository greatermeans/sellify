import React, { Component } from 'react';

const SearchBar = class extends Component {

  handleOnKeyPress(event){
    if (event.charCode === 13) {
      this.props.updateState(event.target.value)
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Search" onKeyPress={this.handleOnKeyPress.bind(this)}/>
      </div>
    )
  }
}

export default SearchBar
