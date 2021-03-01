import React, { Component } from "react";
import { Document, Page } from "react-pdf";

class Document extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file="./../assets/Rinker_Dania_Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        ></Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
