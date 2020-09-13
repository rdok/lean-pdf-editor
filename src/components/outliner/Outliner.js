import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { pdfjs } from 'react-pdf/dist/umd/entry.webpack';
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFNull, PDFNumber, PDFPageLeaf, PDFString } from "pdf-lib";

import './Outliner.scss';

export default ({ file, onOutlinerUpdated }) => {
  const [validated, setValidated] = useState(false);

  // const newOutlineItem = ({ title }) => {
  //   return {
  //     index: file.pageNumber - 1,
  //     value: title.value
  //   };
  // }

  async function getCurrentOutline() {
    const pdf = await pdfjs.getDocument({ data: file.data }).promise;
    const outline = await pdf.getOutline();
    return outline.map((title, index) => {
      return { index, title: title.title };
    });
  }

  function getPageRefs(pdfDoc) {
    const refs = [];
    pdfDoc.catalog.Pages().traverse((kid, ref) => {
      if (kid instanceof PDFPageLeaf) refs.push(ref);
    });
    return refs;
  };

  function createOutlineItem(pdfDoc, title, parent, nextOrPrev, page, isLast = false) {
    let array = PDFArray.withContext(pdfDoc.context);
    array.push(page);
    array.push(PDFName.of("XYZ"));
    array.push(PDFNull);
    array.push(PDFNull);
    array.push(PDFNull);
    const map = new Map();
    map.set(PDFName.Title, PDFString.of(title));
    map.set(PDFName.Parent, parent);
    map.set(PDFName.of(isLast ? "Prev" : "Next"), nextOrPrev);
    map.set(PDFName.of("Dest"), array);

    return PDFDict.fromMapWithContext(map, pdfDoc.context);
  }

  function normalizeNewOutlineItem({ title }) {
    return {
      index: file.pageNumber - 1,
      title: title.value
    };
  }

  async function normalizeNewOutline(form) {
    const newOutlineItem = normalizeNewOutlineItem(form);
    let newOutline = await getCurrentOutline();
    newOutline[newOutlineItem.index] = newOutlineItem;
    return newOutline;
  }

  function createOutlineItems(outline, refs, pdfDoc, outlinesDictRef, pageRefs) {
    return outline.map(({ index, title }) => {
      const isLast = typeof outline[index + 1] === 'undefined';
      let nextOrPrev;
      if (isLast) {
        const refIndex = index === 0 ? 0 : index - 1;
        nextOrPrev = refs[refIndex];
      } else {
        nextOrPrev = refs[index + 1];
      }

      return createOutlineItem(
        pdfDoc,
        title,
        outlinesDictRef,
        nextOrPrev,
        pageRefs[index],
        isLast
      );
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formIsValid = form.checkValidity() === true;
    setValidated(true);

    if (formIsValid) {
      const outline = await normalizeNewOutline(form);
      const pdfDoc = await PDFDocument.load(file.data);
      const pageRefs = getPageRefs(pdfDoc);
      const outlinesDictRef = pdfDoc.context.nextRef();
      const refs = outline.map(() => pdfDoc.context.nextRef());
      const outlineItems = createOutlineItems(outline, refs, pdfDoc, outlinesDictRef, pageRefs);

      const outlinesDictMap = new Map();
      outlinesDictMap.set(PDFName.Type, PDFName.of("Outlines"));
      outlinesDictMap.set(PDFName.of("First"), refs[0]);
      outlinesDictMap.set(PDFName.of("Last"), refs[refs.length - 1]);
      outlinesDictMap.set(PDFName.of("Count"), PDFNumber.of(outlineItems.length));

      pdfDoc.catalog.set(PDFName.of("Outlines"), outlinesDictRef);
      const outlinesDict = PDFDict.fromMapWithContext(outlinesDictMap, pdfDoc.context);
      pdfDoc.context.assign(outlinesDictRef, outlinesDict);

      outlineItems.forEach((item, index) => {
        pdfDoc.context.assign(refs[index], outlineItems[index]);
      });
      console.log()

      const data = await pdfDoc.save();

      onOutlinerUpdated({ data });
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
