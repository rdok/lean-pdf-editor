import React, { Component } from 'react';
import { Document, Outline, Page } from 'react-pdf/dist/umd/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './Viewer.scss';
import Pagination from "../pagination/Pagination";

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };


  onItemClick({ pageNumber }) {
    this.setState({ pageNumber });
  }

  goToPreviousPage() {
    const pageNumber = this.props.file.pageNumber - 1;
    this.props.onViewUpdated({ pageNumber });
  }

  goToNextPage() {
    const pageNumber = this.props.file.pageNumber + 1;
    this.props.onViewUpdated({ pageNumber });
  }

  render() {
    const { file } = this.props;
    const { numPages, pageNumber, data } = file;
    let render;

    if (data instanceof Uint8Array) {
      render = data.buffer;
    } else {
      render = data;
    }

    return (
      <div>
        <Pagination
          pageNumber={pageNumber}
          numPages={numPages}
          goToNextPage={this.goToNextPage}
          goToPreviousPage={this.goToPreviousPage}
        />

        <div
          className="PDFRenderer__container__document">
          <Document
            file={render}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Outline onItemClick={this.onItemClick}/>
            <Page key={`page_${pageNumber}`} pageNumber={pageNumber}/>
          </Document>
        </div>
      </div>
    );
  }
}
