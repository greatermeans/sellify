import React, {Component} from 'react'


class JoinOrganizationsMenu extends Component{

  componentDidMount(){
    this.props.fetchOrganizations();
  }

  render(){
    return(
      <div>
      hello
      </div>
    )
  }
}
