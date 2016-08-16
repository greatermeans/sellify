import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from  '../components/navBar'
import NewListingForm from '../components/newListingForm'
import BookMarked from '../components/bookmarked'
import SmartAllListing from '../components/allListing'


const Home = class extends Component {


	componentWillMount(){
		if(!this.props.authenticated){
        browserHistory.push('/')
      }
	}

	componentWillUpdate(newProps){
		if(!newProps.authenticated){
			browserHistory.push('/')
		}
	}

	render() {
		return(
			<div>
				<NewListingForm />
			  SmartAllListing here
				<BookMarked />
			</div>
	)}
}

function mapStateToProps(state) {
	return { user: state.user, authenticated: state.authenticated }
}

const SmartHome = connect(mapStateToProps)(Home)

export default SmartHome
