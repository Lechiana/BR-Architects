import React from "react";

class ProjectItem1 extends React.Component {
  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Summer House
            </div>
            <img className="project-item-img" src="https://www.w3schools.com/w3images/house5.jpg" alt="House" />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Brick House
            </div>
            <img className="project-item-img" src="https://www.w3schools.com/w3images/house2.jpg" alt="House" />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Renovated
            </div>
            <img className="project-item-img" src="https://www.w3schools.com/w3images/house3.jpg" alt="House" />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Barn House
            </div>
            <img className="project-item-img" src="https://www.w3schools.com/w3images/house4.jpg" alt="House" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem1;
