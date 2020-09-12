import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default () => {
  const [validated, setValidated] = useState(false);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      console.log('startPage', startPage);
      console.log('endPage', endPage);
    }
  };

  function handlePageStartChange({target}) {
   setStartPage(target.value)
  }
  function handlePageEndChange({target}) {
    setEndPage(target.value)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h5>Remove pages</h5>
      <Row>
        <Col>
          <Form.Control
            type="number"
            min="0"
            placeholder="Page start"
            value={startPage}
            onChange={handlePageStartChange}
            required/>
        </Col>
        <Col>
          <Form.Control
            type="number"
            min="0"
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
