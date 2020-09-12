import React, { Component } from 'react';
import { Document, Outline, Page } from 'react-pdf/dist/umd/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './PDFRenderer.scss';
import Pagination from "../pagination/Pagination";

export default class PDFRenderer extends Component {
  state = { numPages: null, pageNumber: 1 };

  constructor(props) {
    super(props);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  onFileChange = (event) => {
    // this.setState({
    //   file: event.target.files[0],
    // });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };


  onItemClick({ pageNumber }) {
    this.setState({ pageNumber });
  }

  goToPreviousPage() {
    const pageNumber = this.state.pageNumber - 1;
    this.setState({ pageNumber });
  }

  goToNextPage() {
    const pageNumber = this.state.pageNumber + 1;
    this.setState({ pageNumber });
  }

  render() {
    const { numPages, pageNumber } = this.state;
    const { file } = this.props;

    return (
      <div>
        <Pagination
          pageNumber={pageNumber}
          numPages={numPages}
          goToNextPage={this.goToNextPage}
          goToPreviousPage={this.goToPreviousPage}
        />

        <div
          onScroll={this.handleScroll}
          className="PDFRenderer__container__document">
          <Document
            file={file.content}
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
