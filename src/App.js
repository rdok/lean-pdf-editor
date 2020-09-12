import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Navbar from "./components/navbar/Navbar";
import { PDFDocument } from 'pdf-lib';

import './App.scss';
import PDFRenderer from "./components/pdf-render/PDFRenderer";
import Col from "react-bootstrap/Col";
import Editor from "./components/editor/Editor";

export default class App extends React.Component {
  state = {
    pdf: null,
    pdfDoc: null,
  };

  constructor(props) {
    super(props);
    this.handlePdfDocChange = this.handlePdfDocChange.bind(this);
  }

  async componentDidMount() {
    const url = '/sample.pdf';
    const file = await fetch(url).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(file);
    const pdf = await pdfDoc.saveAsBase64({ dataUri: true })
    this.setState({ pdf, pdfDoc });
  }


  async handlePdfDocChange(pdfDoc) {
    const pdf = await pdfDoc.saveAsBase64({ dataUri: true })
    this.setState({ pdfDoc, pdf });
  }

  render() {
    return <>
      <Navbar/>
      <Container fluid>
        <Row>
          <Col>
            <Editor
              pdfDoc={this.state.pdfDoc}
              onPdfDocChange={this.handlePdfDocChange}
            />
          </Col>
          <Col><PDFRenderer pdf={this.state.pdf}/></Col>
        </Row>
      </Container>
    </>;
  }
}
