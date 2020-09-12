import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import downloadjs from "downloadjs";

import './Editor.scss';
import ModifyPDF from "../modify-page";
import Navbar from '../navbar/navbar'

export default class Editor extends Component {

  async handleDownload(e) {
    const pdf = await ModifyPDF();
    downloadjs(pdf, "lean-pdf.pdf", "application/pdf");
  }

  render() {
    return (
      // <div className="ActionsForm">
    <Container fluid>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <div className="ActionsForm__container">
          <button onClick={this.handleDownload}>Download</button>
        </div>
        <div className="ActionsForm__container">
          <button onClick={this.handleDownload}>Download</button>
        </div>
        </Container>
      // </div>
    );
  }
}
