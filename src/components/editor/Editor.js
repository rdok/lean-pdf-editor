import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import downloadjs from "downloadjs";

import './Editor.scss';
import PageRangeRemover from "../page-range-remover/PageRangeRemover";
import { PDFDocument } from "pdf-lib";

export default ({ file, onPagesRemoval }) => {
  const [isProcessing, setProcessing] = useState(false);

  const handleDownload = async (e) => {
    setProcessing(true)
    const { data, name } = file;
    const inputPdf = await PDFDocument.load(data);

    const outputPdf = await PDFDocument.create();

    const copiedPages = await outputPdf.copyPages(
      inputPdf,
      inputPdf.getPageIndices(),
    );

    copiedPages.forEach( (page) => {
      outputPdf.addPage(page)
    })

    const pdfBytes = await outputPdf.save();

    downloadjs(pdfBytes, name, "application/pdf");
    setProcessing(false)
  };

  return (
    <div className="Editor sticky-top">
      <h2>Editor</h2>
      <hr/>
      <PageRangeRemover file={file} onPagesRemoval={onPagesRemoval}/>
      <hr/>
      <hr/>
      <Button variant="primary" onClick={handleDownload} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Save'}
      </Button>
    </div>
  );
}
