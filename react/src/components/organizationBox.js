import React, { Component } from 'react';

const OrganizationBox = ({name}) => (
  <div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src='' alt="..." />
      <div className="caption">
        <h3>{name}</h3>
        <p></p>
        <p>
        <a href='' className="btn btn-primary" role="button">click to view</a>
        </p>
      </div>
    </div>
  </div>
</div>
  )


export default OrganizationBox
