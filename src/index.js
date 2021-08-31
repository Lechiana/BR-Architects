import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import AboutLoop from "./components/AboutLoop";
import Contact from "./components/Contact";
import Hero1 from "./components/Hero1";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          about: [
            {
                path: "https://www.w3schools.com/w3images/team2.jpg",
                name: "John Doe",
            },
            {
                path: "https://www.w3schools.com/w3images/team1.jpg",
                name: "Jane Doe",
            },
            {
                path: "https://www.w3schools.com/w3images/team3.jpg",
                name: "Mike Ross",
            },
            {
                path: "https://www.w3schools.com/w3images/team4.jpg",
                name: "Dan Star",
            },
          ],
          
          
        };
      }
    render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Hero />
          <Projects />
          <About/>
          <div className ="row">
            <AboutLoop cards={this.state.about}/> 
          </div>
           <Contact/>
           <Hero1/>
        </div>
        <Footer/>
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
