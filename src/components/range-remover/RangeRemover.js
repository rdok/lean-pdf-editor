import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

import './RangeRemover.scss';

export default ({ file, onPagesRemoval }) => {
  const [validated, setValidated] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [isProcessing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      setProcessing(true);
      const payload = {
        startIndex: Number(startPage) - 1,
        endIndex: Number(endPage) - 1
      };
      await onPagesRemoval(payload);
      setProcessing(false);
    }
  };

  function handlePageStartChange({ target }) {
    setStartPage(target.value);
  }

  function handlePageEndChange({ target }) {
    setEndPage(target.value);
  }

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="RangeRemover"
    >
      <h5>Range remover</h5>
      <Row>
        <Col>
          <Form.Control
            type="number"
            min="1"
            max={file.numPages}
            placeholder="Page start"
            value={startPage}
            onChange={handlePageStartChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            min={startPage}
            max={file.numPages}
            value={endPage}
            onChange={handlePageEndChange}
            placeholder="Page end"
            required
          />
        </Col>
        <Button variant="warning" type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Remove'}
        </Button>
      </Row>
    </Form>
  );
}
