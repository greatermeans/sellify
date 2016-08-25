import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListingsTags extends Component {

  renderTags(tags) {
      if (tags !== undefined) {
     return tags.map((t,idx) => {
        return (
          <Link to={"filter/" + t.name.split(',')[0]} key={idx} className="list-group-item-text">{" " + t.name + " "}</Link>
        );
     });
   }
  }

  render(){
    return(
      <div>
        {this.renderTags(this.props.tags)}
      </div>
    )
  }
}
