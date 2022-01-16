import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import downloadjs from "downloadjs";

import "./Saver.scss";
import Saver from "../../services/Saver";

const saver = new Saver();

export default ({ file }) => {
  const [isProcessing, setProcessing] = useState(false);

  const handleDownload = async (e) => {
    setProcessing(true);
    const { name } = file;
    const data = await saver.prepareDownload({ file });
    downloadjs(data, name, "application/pdf");
    setProcessing(false);
  };

  return (
    <div className="Saver">
      <Button
        variant="primary"
        onClick={handleDownload}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Save"}
      </Button>
    </div>
  );
};
