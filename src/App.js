import React, { Component } from 'react';

import './App.scss';

import PDFRenderer from "./components/pdf-render/PDFRenderer";
import Editor from "./components/editor/Editor";

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Content">
          <PDFRenderer/>
          <Editor />
        </div>
      </div>
    );
  }
}
