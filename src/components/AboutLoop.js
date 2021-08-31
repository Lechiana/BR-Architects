import React from "react";
import AboutItem from "./AboutItem";

class AboutLoop extends React.Component {
  render() {
    if (this.props.cards) {
      const cardsRendered = this.props.cards.map((el) => {
        return (
            
                <AboutItem path={el.path} name={el.name} />
            );
      });
      return <div>{cardsRendered}</div>;
    }
  }
}

export default AboutLoop;
