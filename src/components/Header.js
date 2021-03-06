import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import SearchBar from './SearchBar'

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.deletedListing.error && nextProps.deletedListing.error.message) {
      alert(nextProps.deletedListing.error.message || 'Could not delete. Please try again.');
    } else if(nextProps.deletedListing.listing && !nextProps.deletedListing.error) {
      this.context.router.push('/');
    } else if(this.props.user.user && !nextProps.user.user) {
      browserHistory.push('/');
    }
  }

  renderSignInLinks(authenticatedUser) {
    if(authenticatedUser) {
      return (
        <ul>
          <li><Link to={'/profile'}>{authenticatedUser.name}</Link></li>
          <li><Link to={'/dashboard'}>Dashboard</Link></li>
          <li><Link to={'/listings'}>All Listings</Link></li>
          <li><Link to={'/organizations'}>My organizations</Link></li>
          <li> <SearchBar /> </li>
          <li><Link to={'/'} onClick={this.props.logout}>Log Out</Link></li>
        </ul>
      );
    }
    return (
      <ul>
        <li><Link to={'/signup'}>Sign Up</Link></li>
        <li><Link to={'/signin'}>Sign In</Link></li>
      </ul>
   );
  }

	renderLinks() {
		const { type, authenticatedUser } = this.props;
		if(type === 'listings_index') {
       return (
         <ul>
           {this.renderSignInLinks(authenticatedUser)}
         </ul>
  		 );
  	} else if(type === 'listings_new') {
       return (
         <ul>
           {this.renderSignInLinks(authenticatedUser)}
         </ul>
  		 );
  	} else if(type === 'all_listings') {
       return (
         <ul>
           {this.renderSignInLinks(authenticatedUser)}
         </ul>
  		 );
  	} else if(type === 'listings_show') {
  			return (
          <ul>
            {this.renderSignInLinks(authenticatedUser)}
    	   </ul>
  		);
  	}
    else if(type === 'users_new') {
  			return (
          <ul>
          {this.renderSignInLinks(authenticatedUser)}
    	   </ul>
  		);
  	}
    else if(type === 'join_organizations') {
      			return (
              <ul>
              {this.renderSignInLinks(authenticatedUser)}
        	   </ul>
      		);
      	}
	};

	render() {
			return (
        <aside id="fh5co-aside" role="complementary" className="border js-fullheight">
          <h1 id="fh5co-logo">
          <a href='/dashboard'><img src="/images/logo.png" alt='logo' /><br /></a>
          </h1>
          <nav id="fh5co-main-menu" role="navigation">
            {this.renderLinks()}
          </nav>
          <div className="fh5co-footer">
          <small>© 2016 Sellify</small><br />
          <a href='https://github.com/greatermeans/sellify'><i className='icon-github'/></a>
          </div>

        </aside>
			);
	}
}

export default Header
