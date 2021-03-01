import React, { Component } from "react";
import pic from "../assets/dania_rinker.jpg";
// import pic from "../assets/background.jpeg";
// import ContactLogos from "./ContactLogos";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
// import { Document } from "react-pdf";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="subtitle">Hey, my name is Dania Rinker</h1>
        <h2>I'm an aspiring Full-Stack Web Developer.</h2>
        <img src={pic} alt="dania-rinker" className="personalpic"></img>
        <container className="bio">
          <p>
            Born in the states but growing up abroad has let me find beauty in
            cultures and travels around the world. I try to implement those
            ideologies into my work, and appreciate the unique upbringing I have
            had and the effect it has had on me. <br></br>
            <br></br>I love problem-solving, logic, and creativity-- all things
            that are very present in coding. A passion of mine that I intend to
            grow into every day a little more. Follow along, check out my
            project work, and get in contact if you'd like. <br></br>
          </p>
          <br></br>
        </container>
        <container>
          <a
            href="https://github.com/daniarinker"
            target="_blank"
            rel="noreferrer"
            className="contactlogos"
          >
            <DiGithubBadge />
          </a>
          <a
            href="https://www.linkedin.com/in/dania-rinker/"
            target="_blank"
            rel="noreferrer"
            className="contactlogos"
          >
            <IoLogoLinkedin />
          </a>
        </container>
      </div>
    );
  }
}
export default Home;
