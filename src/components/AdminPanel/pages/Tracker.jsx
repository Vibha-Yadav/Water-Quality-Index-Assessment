import React from "react";
import trimage from '../images/tracker.png';
import './Tracker.css';

const Tracker=()=>{
    return(
        <div className="TrackerClass">
          <h1>Tracker</h1>
          <img src={trimage} alt="Tracker" />
        </div>
    );
};

export default Tracker;