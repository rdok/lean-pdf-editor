import React, { Component, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './PDFRenderer.scss';

export default class PDFRenderer extends Component {
  state = {
    numPages: null,
  };

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;

    return (
      <div className="PDFRenderer">
        <div className="PDFRenderer__container">
          {/*<div className="PDFRenderer__container__load">*/}
            {/*<label htmlFor="file">Load from file:</label>*/}
            {/*<input*/}
            {/*  onChange={this.onFileChange}*/}
            {/*  type="file"*/}
            {/*/>*/}
          {/*</div>*/}
          <div className="PDFRenderer__container__document">
            <Document
              file={this.props.pdf}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    >
                    </Page>
                  ),
                )
              }
            </Document>
          </div>
        </div>
      </div>
    );
  }
}
