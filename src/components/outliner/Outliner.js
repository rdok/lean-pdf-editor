import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default () => {
  return (
    <Form>
      <h5>Bookmark page</h5>
      <Row>
        <Col>
          <Form.Control type="number" min="0" placeholder="Page number"/>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Bookmark text"/>
        </Col>
        <Button variant="warning">
          Apply
        </Button>
      </Row>
    </Form>
  )
}
