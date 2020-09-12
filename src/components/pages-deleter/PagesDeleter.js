import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

export default () => {
  return (
    <Form>
      <h5>Delete pages</h5>
      <Row>
        <Col>
          <Form.Control type="number" min="0" placeholder="Page start"/>
        </Col>
        <Col>
          <Form.Control type="number" min="0" placeholder="Page end"/>
        </Col>
        <Button variant="warning">
          Delete
        </Button>
      </Row>
    </Form>
  );
}
