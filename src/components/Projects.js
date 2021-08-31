import React from "react";
import ProjectItem from "./ProjectItem";

class Projects extends React.Component {
  render() {
    return (
        <div>
            <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>
        <ProjectItem/>
        <ProjectItem/>
        </div>
      
    );
  }
}

export default Projects;
