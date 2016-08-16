import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import authenticate from '../actions/index'
import { bindActionCreators } from 'redux'


class Header extends Component {
  authButton(){
    
    if(this.props.authenticated){
      return(<p>
        <button onClick={() => this.props.authenticate(false)}>
            Sign Out
        </button>
      </p>  )
    } else{
      return (<p> 
        <button onClick={() => this.props.authenticate(true)}>
            Sign In
        </button>
      </p>)
    } 
  }
  render(){
    return(
      <div> 
        {this.authButton()}
        <p>
        <Link to="/resources" className="btn btn-primary">
          View Resources
        </Link>
        </p>
      </div>
    )  
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({authenticate: authenticate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
