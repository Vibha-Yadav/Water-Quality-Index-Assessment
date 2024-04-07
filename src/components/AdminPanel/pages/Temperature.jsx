import React from "react";
import timage from '../images/temperature.png';

const Temperature=()=>{
    return(
        <div>
          {/* <h1>Temperature</h1> */}
          <img src={timage} alt="" />
        </div>
    );
};

export default Temperature;