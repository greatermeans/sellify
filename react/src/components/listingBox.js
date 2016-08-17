import React, { Component } from 'react';

const ListingBox = ({title, price, image}) => (
    <li>
      {title}
      {price}
      {image}
    </li>
  )


export default ListingBox
