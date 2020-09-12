import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default ({ pdfDoc, onPdfDocChange }) => {
  const [validated, setValidated] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      let index = startPage - 1;
      do {
        pdfDoc.removePage(index);
        index++;
      } while (startPage < endPage);

      onPdfDocChange(pdfDoc)
    }
  };

  function handlePageStartChange({ target }) {
    setStartPage(target.value);
  }

  function handlePageEndChange({ target }) {
    setEndPage(target.value);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h5>Remove pages</h5>
      <Row>
        <Col>
          <Form.Control
            type="number"
            min="1"
            placeholder="Page start"
            value={startPage}
            onChange={handlePageStartChange}
            required/>
        </Col>
        <Col>
          <Form.Control
            type="number"
            min="1"
            value={endPage}
            onChange={handlePageEndChange}
            placeholder="Page end"
            required/>
        </Col>
        <Button variant="warning" type="submit">
          Remove
        </Button>
      </Row>
    </Form>
  );
}
