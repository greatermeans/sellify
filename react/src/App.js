import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.props.loadUserFromToken();
  }
  render() {
    return (
    <div id="fh5co-main" className="fh5co-narrow-content">
			{this.props.children}
		</div>
    );
  }
}

export default App;
