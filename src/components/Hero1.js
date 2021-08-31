import React from "react";

class Hero1 extends React.Component{
  render(){
    return (
      <div>
        <img className="w3-image" src="https://www.w3schools.com/w3images/map.jpg" alt="Architecture"/>
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
        </div>
      </div>
        
      );
  }
  
    
};

export default Hero1;