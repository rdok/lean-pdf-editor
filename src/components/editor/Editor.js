import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downloadjs from "downloadjs";

import './Editor.scss';
import PageRemover from "../page-remover/PageRemover";
import Outliner from "../outliner/Outliner";

export default ({ pdfDoc, onPdfDocChange }) => {

  const handleDownload = async (e) => {
    const pdfBytes = await pdfDoc.save();
    downloadjs(pdfBytes, "lean-pdf.pdf", "application/pdf");
  };

  return (
    <div className="Editor sticky-top">
      <Container fluid>
        <h2>Editor</h2>
        <hr/>
        <PageRemover pdfDoc={pdfDoc} onPdfDocChange={onPdfDocChange}/>
        <hr/>
        <Outliner/>
        <hr/>
        <Button variant="primary" onClick={handleDownload}>
          Download
        </Button>
      </Container>
    </div>
  );
}
