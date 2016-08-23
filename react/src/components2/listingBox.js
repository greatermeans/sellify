import React from 'react';

const ListingBox = ({title, price, image, description}) => (
  <div className="col-sm-6 col-md-6">
    <div className="thumbnail">
      <img src={image} alt="..." />
      <div className="caption">
        <h3>{title}</h3>
        <p> ${price} {description}</p>
        <p>
        <a href='' className="btn btn-primary" role="button">click to view</a>
        </p>
      </div>
    </div>
  </div>

  )


export default ListingBox
