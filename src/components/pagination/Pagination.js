import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import './Pagination.scss';
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";

export default ({ pageNumber, numPages, goToPreviousPage, goToNextPage }) => {
  const pageNumberLabel = <span>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>;
  return (
    <div className="Pagination">
      <Container>
        <div className="d-flex justify-content-between">
          <Button
            variant="info"
            disabled={pageNumber <= 1}
            className="float-left"
            onClick={goToPreviousPage}
          >
            Previous
          </Button>
          <Col>
            <ProgressBar
              className="ProgressBar"
              variant="info"
              now={pageNumber / numPages * 100}
              label={pageNumberLabel}
            />

          </Col>
          <div>
          </div>
          <Button
            variant="info"
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
