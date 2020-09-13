import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import './Pagination.scss';
import Col from "react-bootstrap/Col";

export default ({ pageNumber, numPages, goToPreviousPage, goToNextPage, onPageRangeChange }) => {
  const pageNumberLabel = <span>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>;
  return (
    <Container className="Pagination">
      <div className="d-flex justify-content-between">
        <Button
          variant="info"
          disabled={pageNumber <= 1}
          className="float-left"
          onClick={goToPreviousPage}
        >
          Previous
        </Button>
        <Col md={6}>
          <Form.Control
            type="range"
            custom
            min={1}
            max={numPages}
            defaultValue={pageNumber}
            onChange={onPageRangeChange}
          />
        </Col>
        <Col> {pageNumberLabel} </Col>
        <Button
          variant="info"
          disabled={pageNumber >= numPages}
          onClick={goToNextPage}
        >
          Next
        </Button>
      </div>
    </Container>
  );
}
