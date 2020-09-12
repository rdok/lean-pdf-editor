import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Navbar from "./components/navbar/Navbar";

import './App.scss';
import Viewer from "./components/viewer/Viewer";
import Col from "react-bootstrap/Col";
import Editor from "./components/editor/Editor";
import File from "./components/file/File";

export default class App extends React.Component {
  state = {
    file: { name: './sample.pdf', data: null },
    pageNumber: null,
    pdf: null,
    pdfDoc: null,
  };

  constructor(props) {
    super(props);
    this.handlePdfDocChange = this.handlePdfDocChange.bind(this);
    this.handleFileAttached = this.handleFileAttached.bind(this);
    this.handleFileModified = this.handleFileModified.bind(this);
  }

  async componentDidMount() {
    const { name } = this.state.file;
    const data = await fetch(name).then(res => res.arrayBuffer());

    this.setState({ file: { name, data } });
    // const pdfDoc = await PDFDocument.load(file);
    // const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    // const numPages = pdfDoc.getPageCount();
    // this.setState({  pdfDoc, pdf, numPages });
  }

  async handlePdfDocChange(pdfDoc) {
    // const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    // const numPages = pdfDoc.getPageCount();
    // this.setState({ pdfDoc, pdf, numPages });
  }

  async handleFileAttached(e) {
    const newFile = e.target.files[0];
    const name = newFile.name
    const data = await newFile.arrayBuffer();
    this.setState({ file: { name, data } });
    // const filename = file.name;
    // const contents = await file.arrayBuffer();
    // const pdfDoc = await PDFDocument.load(contents);
    // const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
    // const numPages = pdfDoc.getPageCount();
    // this.setState({  pdfDoc, pdf, numPages, filename });
  }

  handleFileModified({ data, totalPages }) {
    console.log(data);
    const { name } = this.state.file;
    const pageNumber = Math.min(totalPages, this.state.pageNumber);
    this.setState({ file: { name, data }, pageNumber });
  }

  render() {
    return <div>
      <Navbar/>
      <Container fluid>
        <Row>
          <Col>
            <Container fluid className="sticky-top">
              <File file={this.state.file} onFileAttached={this.handleFileAttached}/>
              <Editor file={this.state.file} onFileModified={this.handleFileModified}/>
            </Container>
          </Col>
          <Col>
            <Viewer file={this.state.file} pageNumber={this.state.pageNumber}/>
          </Col>
        </Row>
      </Container>
    </div>;
  }
}
