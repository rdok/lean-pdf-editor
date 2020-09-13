import React, { Component } from 'react';
import { Document, Outline, Page } from 'react-pdf/dist/umd/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Pagination from "../pagination/Pagination";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Viewer.scss';

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.handlePageRangeChange = this.handlePageRangeChange.bind(this);
    this.handleOutlineItemClicked = this.handleOutlineItemClicked.bind(this);
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

  handlePageRangeChange(e) {
    const pageNumber = Number(e.target.value);
    this.props.onViewUpdated({ pageNumber });
  }

  handleOutlineItemClicked({ pageIndex, pageNumber }) {
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
        <Container fluid className="Viewer__container__document">
          <Document
            file={render}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Row>
              <Col md={4} sm={4}>
                <h5>Outline</h5>
                <Outline onItemClick={this.handleOutlineItemClicked} className="list-group"/>
              </Col>
              <Col md={8} sm={8}>
                <Pagination
                  pageNumber={pageNumber}
                  numPages={numPages}
                  goToNextPage={this.goToNextPage}
                  goToPreviousPage={this.goToPreviousPage}
                  onPageRangeChange={this.handlePageRangeChange}
                />
                <Page key={`page_${pageNumber}`} pageNumber={pageNumber}/>
              </Col>
            </Row>
          </Document>
        </Container>
      </div>
    );
  }
}
