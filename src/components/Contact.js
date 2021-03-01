import React, { Component } from "react";
import { Row, Col } from "reactstrap";
// import ContactLogos from "./ContactLogos";
import { Document } from "react-pdf";
// import resume from "../assets/Rinker_Dania_Resume.pdf";
import { GoMail } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Get in Touch</h1>
        <br></br>
        <container>
          <a href="mailto:daniarinker@gmail.com" class="contactlogos">
            <GoMail />
          </a>
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
        <br></br>
        <div>
          <a
            download="Rinker_Dania_Resume.pdf"
            href="./../src/assets/Rinker_Dania_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
