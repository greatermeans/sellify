import React, { Component } from 'react';

const Data = class extends Component {


render(){
  var bgColors = { "Default": "#81b71a",
                      "Blue": "#00B1E1",
                      "Cyan": "#37BC9B",
                      "Green": "#8CC152",
                      "Red": "#E9573F",
                      "Yellow": "#F6BB42",
  };

  return(
<div className="fh5co-counters animated" style={{backgroundColor: bgColors.Yellow}} data-stellar-background-ratio="0.5" id="counter-animate">
  <div className="fh5co-narrow-content animate-box fadeInUp animated">
    <div className="row" >
      <div className="col-md-4 text-center animate-box fadeInUp animated">
        <span className="fh5co-counter js-counter" data-from="0" data-to="67" data-speed="5000" data-refresh-interval="50">200</span>
        <span className="fh5co-counter-label">Clients Worked With</span>
      </div>
      <div className="col-md-4 text-center animate-box fadeInUp animated">
        <span className="fh5co-counter js-counter" data-from="0" data-to="130" data-speed="5000" data-refresh-interval="50">351</span>
        <span className="fh5co-counter-label">Completed Projects</span>
      </div>
      <div className="col-md-4 text-center animate-box fadeInUp animated">
        <span className="fh5co-counter js-counter" data-from="0" data-to="27232" data-speed="5000" data-refresh-interval="50">48</span>
        <span className="fh5co-counter-label">Line of Codes</span>
      </div>
    </div>
  </div>
</div>
)
}
}

export default Data
