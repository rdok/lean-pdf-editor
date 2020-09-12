import React from 'react';
import Button from 'react-bootstrap/Button';
import downloadjs from "downloadjs";

import './Editor.scss';
import PageRangeRemover from "../page-range-remover/PageRangeRemover";

export default ({ file, onFileModified, pdfDoc, onPdfDocChange, filename }) => {

  const handleDownload = async (e) => {
    const pdfBytes = await pdfDoc.save();
    downloadjs(pdfBytes, filename, "application/pdf");
  };

  return (
    <div className="Editor sticky-top">
      <h2>Editor</h2>
      <hr/>
      <PageRangeRemover file={file} onFileModified={onFileModified}/>
      <hr/>
      <hr/>
      <Button variant="primary" onClick={handleDownload}>
        Save
      </Button>
    </div>
  );
}
