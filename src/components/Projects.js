import React, { Component } from "react";
import proj1 from "../assets/pan-dammit.png";
import proj2 from "../assets/gifdoffood.png";
import proj3 from "../assets/password_generator.png";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <ul>
          <a href="https://github.com/daniarinker/the-gifd-of-food">
            <li>Pan-Dammit</li>
            <img src={proj1} alt="pandammit" className="projectpic"></img>
          </a>
          <a href="https://github.com/daniarinker/the-gifd-of-food">
            <li>The Gifd of Food</li>
            <img src={proj2} alt="giftoffood" className="projectpic"></img>
          </a>
          <a href="https://daniarinker.github.io/Password-Generator/">
            <li>Password Generator</li>
            <img
              src={proj3}
              alt="passwordgenerator"
              className="projectpic"
            ></img>
          </a>
        </ul>
      </div>
    );
  }
}

export default Projects;
