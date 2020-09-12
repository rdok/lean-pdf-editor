import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downloadjs from "downloadjs";

import ModifyPDF from "../modify-page";

import './Editor.scss';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Editor extends Component {

  async handleDownload(e) {
    const pdf = await ModifyPDF();
    downloadjs(pdf, "lean-pdf.pdf", "application/pdf");
  }

  render() {
    return (
      <div className="Editor sticky-top">
        <Container fluid>
          <h3>Editor</h3>
          <hr/>
          <Form>
            <Form.Label>Delete pages</Form.Label>
            <Row>
              <Col>
                <Form.Control type="number" min="0" placeholder="Page start"/>
              </Col>
              <Col>
                <Form.Control type="number" min="0" placeholder="Page end"/>
              </Col>
            </Row>

          </Form>

          <hr/>
          <Button variant="primary" onClick={this.handleDownload}>
            Download
          </Button>
        </Container>
      </div>
    );
  }
}
