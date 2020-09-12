import React, { Component } from 'react';

import './Editor.scss';
import ModifyPDF from "../modify-page";
import downloadjs from "downloadjs";

export default class Editor extends Component {

  async handleDownload(e) {
    const pdf = await ModifyPDF();
    downloadjs(pdf, "pdf-lib_creation_example.pdf", "application/pdf");
  }

  render() {
    return (
      <div className="ActionsForm">
        <div className="ActionsForm__container">
          <button onClick={this.handleDownload}>Download</button>
        </div>
      </div>
    );
  }
}
