import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import './Outliner.scss';
import Saver from '../../services/Saver';

const saver = new Saver();

export default ({ file, onOutlinerUpdated }) => {
  const [validated, setValidated] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      setProcessing(true);
      const item = {
        index: file.pageNumber - 1,
        title: String(form.title.value)
      };
      const data = await saver.addOutlineItem({ file, item });
      onOutlinerUpdated({ data });
      setProcessing(false);
    }
  }

  return (
    <Form
      className="Outliner"
      onSubmit={handleSubmit}
      noValidate
      validated={validated}
    >
      <h5>Bookmark</h5>
      <Row>
        <Col>
          <Form.Control name="title" type="text" placeholder="Title" defaultValue="test" required/>
        </Col>
        <Button variant="warning" type="submit">
          {isProcessing ? 'Processing...' : 'Apply'}
        </Button>
      </Row>
    </Form>
  );
}
