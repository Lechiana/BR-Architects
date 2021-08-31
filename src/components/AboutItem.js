import React from "react";

class AboutItem extends React.Component {
  render() {
    return (
      
        <div className="m5">
            <div className=" w3-col l3 w3-margin-bottom">
            <img className="project-item-img" src={this.props.path} alt="John" />
            <h3>{this.props.name}</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
          
        
      
    );
  }
}

export default AboutItem;
