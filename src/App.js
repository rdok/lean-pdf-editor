import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Navbar from "./components/navbar/Navbar";

import './App.scss';
import Viewer from "./components/viewer/Viewer";
import Col from "react-bootstrap/Col";
import Editor from "./components/editor/Editor";
import File from "./components/file/File";
import { PDFDocument } from "pdf-lib";

const INITIAL_PAGE_NUMBER = 1;

export default class App extends React.Component {
  state = {
    file: {
      name: './sample.pdf',
      data: null,
      numPages: null,
      pageNumber: INITIAL_PAGE_NUMBER,
    },
  };

  constructor(props) {
    super(props);
    this.handleFileAttached = this.handleFileAttached.bind(this);
    this.handlePagesRemoval = this.handlePagesRemoval.bind(this);
    this.handleViewUpdated = this.handleViewUpdated.bind(this);
  }

  async componentDidMount() {
    const { name } = this.state.file;
    const data = await fetch(name).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(data);
    const numPages = pdfDoc.getPageCount();
    this.setState({ file: { name, data, numPages, pageNumber: INITIAL_PAGE_NUMBER } });
  }

  async handleFileAttached(e) {
    const file = e.target.files[0];
    const name = file.name;
    const data = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(data);
    const numPages = pdfDoc.getPageCount();
    const pageNumber = INITIAL_PAGE_NUMBER;

    this.setState({ file: { name, data, pageNumber, numPages } });
  }

  async handlePagesRemoval({ startIndex, endIndex }) {
    const { name, data, pageNumber } = this.state.file;
    const pdfDoc = await PDFDocument.load(data);

    let index = startIndex;
    let maxIndex = endIndex;
    while (index <= maxIndex) {
      pdfDoc.removePage(maxIndex);
      maxIndex--;
    }
    const newData = await pdfDoc.save();
    const totalPages = pdfDoc.getPageCount();
    const newPageNumber = Math.min(totalPages, pageNumber);

    this.setState({
      file: {
        name,
        data: newData,
        pageNumber: newPageNumber,
        numPages: totalPages
      },
    });
  }

  handleViewUpdated({ pageNumber }) {
    const { file } = this.state;
    file.pageNumber = pageNumber;
    this.setState({ file });
  }

  render() {
    return <div>
      <Navbar/>
      <Container fluid>
        <Row>
          <Col>
            <Container fluid className="sticky-top">
              <File file={this.state.file} onFileAttached={this.handleFileAttached}/>
              <Editor
                file={this.state.file}
                onPagesRemoval={this.handlePagesRemoval}
              />
            </Container>
          </Col>
          <Col>
            <Viewer file={this.state.file} onViewUpdated={this.handleViewUpdated}/>
          </Col>
        </Row>
      </Container>
    </div>;
  }
}
