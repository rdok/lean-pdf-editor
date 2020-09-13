import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { pdfjs } from 'react-pdf/dist/umd/entry.webpack';

import './Outliner.scss';

export default ({ file, onOutlinerUpdated }) => {
  const [validated, setValidated] = useState(false);

  function newOutlineItem({title}) {
    return {
      pageNumber: file.pageNumber,
      text: title.value
    };
  }

  async function getCurrentOutline() {
    const pdf = await pdfjs.getDocument({ data: file.data }).promise;
    return await pdf.getOutline();
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      const newOutlineItem = newOutlineItem(form)
      const currentOutline = await getCurrentOutline();
      console.log(newOutlineItem)
      console.log(currentOutline)

      // const getPageRefs = (pdfDoc) => {
      //   const refs = [];
      //   pdfDoc.catalog.Pages().traverse((kid, ref) => {
      //     if (kid instanceof PDFPageLeaf) refs.push(ref);
      //   });
      //   return refs;
      // };

      // const pdfDoc = await PDFDocument.load(file.data);
      // const pageRefs = getPageRefs(pdfDoc);
      // console.log(pdfDoc.context)
      // console.log(Object.keys(pdfDoc.context.enumerateIndirectObjects()))

      // const outlinesDictRef = pdfDoc.context.nextRef();
      // console.log(pdfDoc.context.nextRef());
      // console.log(outlinesDictRef.toString())

      // console.log(Object.keys(pdfDoc.context))
      // console.log(pdfDoc.context.indirectObjects)

      // doc.context.assign(outlineItem1Ref, outlineItem1);

      // console.log(pdfDoc.index.nextObjectNumber())
      // console.log(Object.getOwnPropertyNames( PDFDocument.prototype ))
      // console.log('keys')
      // // console.log(Object.keys(pdfDoc))
      // console.log('keys')
      // console.log(pdfDoc.context)
      // console.log(pdfDoc.catalog)
      // console.log(pdfDoc.catalog)
      // console.log(pdfDoc.catalog.dict)
      // console.log(pdfDoc.catalog.get('/Outlines'))
      // const outlinesDictRef = pdfDoc.index.nextObjectNumber();

      // const outlinesDict = PDFDict.from(
      //   {
      //     Type: PDFName.from('Outlines'),
      //     First: outlineItem1Ref,
      //     Last: outlineItem3Ref,
      //     Count: PDFNumber.fromNumber(3),
      //   },
      //   pdfDoc.index,
      // );
      // pdfDoc.index.assign(outlinesDictRef, outlinesDict);
      // pdfDoc.catalog.set('Outlines', outlinesDictRef);
    }
  }

  return (
    <Form
      className="Outliner"
      onSubmit={handleSubmit}
      noValidate
      validated={validated}
    >
      <h5>Bookmark</h5>
      <Row>
        <Col>
          <Form.Control name="title" type="text" placeholder="Title" defaultValue="test" required/>
        </Col>
        <Button variant="warning" type="submit">
          Apply
        </Button>
      </Row>
    </Form>
  );
}
