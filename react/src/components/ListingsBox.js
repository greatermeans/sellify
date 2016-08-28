import React from 'react';
import { Link } from 'react-router';
import ListingsTags from './ListingsTags'

const ListingsBox =({title, price, id, image, description, tags}) => {
  return(
    <div className='container'>
    <div className="col-md-4">
      <Link style={{color:'black'}} to={"listings/" + id}>
        <img src={image} alt={title} />
        <h3 className="list-group-item-heading">{title}</h3>
        <h4 className="list-group-item-heading">{description}</h4>
      </Link>
      <ListingsTags tags={tags}/>
    </div>
    </div>
  )
}

export default ListingsBox
