import React, { Component } from 'react';
import PDFRenderer from "./components/pdf-render/PDFRenderer";
import Editor from "./components/editor/Editor";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./components/navbar/navbar";

import './App.scss';

export default class App extends Component {

  render() {
    return <>
      <Navbar/>
      <Container fluid>
        <Row>
          <PDFRenderer/>
          <Col>
            <Editor/>
          </Col>
        </Row>
      </Container>
    </>;
  }
}
