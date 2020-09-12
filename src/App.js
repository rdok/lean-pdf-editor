import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Navbar from "./components/navbar/Navbar";
import { PDFDocument } from 'pdf-lib';

import './App.scss';
import PDFRenderer from "./components/pdf-render/PDFRenderer";
import Col from "react-bootstrap/Col";
import Editor from "./components/editor/Editor";
import File from "./components/file/File";

export default class App extends React.Component {
  state = {
    filename: './sample.pdf',
    pdf: null,
    pdfDoc: null,
  };

  constructor(props) {
    super(props);
    this.handlePdfDocChange = this.handlePdfDocChange.bind(this);
    this.handleFileChanged = this.handleFileChanged.bind(this);
  }

  async componentDidMount() {
    const url = this.state.filename;
    const file = await fetch(url).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(file);
    const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    const numPages = pdfDoc.getPageCount();
    this.setState({  pdfDoc, pdf, numPages });
  }

  async handlePdfDocChange(pdfDoc) {
    const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    const numPages = pdfDoc.getPageCount();
    this.setState({ pdfDoc, pdf, numPages });
  }

  async handleFileChanged(e) {
    const file = e.target.files[0];
    const filename = file.name;
    const contents = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(contents);
    const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    const numPages = pdfDoc.getPageCount();
    this.setState({  pdfDoc, pdf, numPages, filename });
  }


  render() {
    return <>
      <Navbar/>
      <Container fluid>
        <Row>
          <Col>
            <Container fluid>
              <File filename={this.state.filename} onFileChanged={this.handleFileChanged}/>
              <Editor
                pdfDoc={this.state.pdfDoc}
                onPdfDocChange={this.handlePdfDocChange}
                filename={this.state.filename}
              />
            </Container>
          </Col>
          <Col>
            <PDFRenderer
              pdf={this.state.pdf}
              numPages={this.state.numPages}
            />
          </Col>
        </Row>
      </Container>
    </>;
  }
}
