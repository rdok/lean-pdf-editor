import Form from "react-bootstrap/Form";
import React from "react";

import './File.scss';

export default ({ filename, onFileChanged }) => {
  return <div className="File">
    <h2>File</h2>
    <Form>
      <Form.File label={filename} custom onChange={onFileChanged}/>
    </Form>
  </div>;
}
