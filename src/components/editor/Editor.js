import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downloadjs from "downloadjs";

import ModifyPDF from "../modify-page";

import './Editor.scss';
import PageRemover from "../page-remover/PageRemover";
import Outliner from "../outliner/Outliner";

export default class Editor extends Component {

  async handleDownload(e) {
    const pdf = await ModifyPDF();
    downloadjs(pdf, "lean-pdf.pdf", "application/pdf");
  }

  render() {
    return (
      <div className="Editor sticky-top">
        <Container fluid>
          <h2>Editor</h2>
          <hr/>
          <PageRemover/>
          <hr/>
          <Outliner/>
          <hr/>
          <Button variant="primary" onClick={this.handleDownload}>
            Download
          </Button>
        </Container>
      </div>
    );
  }
}
