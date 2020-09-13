import { pdfjs } from "react-pdf/dist/umd/entry.webpack";
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFNull, PDFNumber, PDFPageLeaf, PDFString } from "pdf-lib";

export default class Saver {

  getCurrentOutline = async (file) => {
    const pdf = await pdfjs.getDocument({ data: file.data }).promise;
    const outline = await pdf.getOutline() ?? [];
    return outline.map((title, index) => {
      return { index, title: title.title };
    });
  };

  getPageRefs = (pdfDoc) => {
    const refs = [];
    pdfDoc.catalog.Pages().traverse((kid, ref) => {
      if (kid instanceof PDFPageLeaf) refs.push(ref);
    });
    return refs;
  };


  createOutlineItem = (pdfDoc, title, parent, nextOrPrev, page, isLast = false) => {
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
  };


  normalizeNewOutline = async ({ file, item }) => {
    let newOutline = await this.getCurrentOutline(file);
    newOutline[item.index] = item;
    return newOutline;
  };

  createOutlineItems = (outline, refs, pdfDoc, outlinesDictRef, pageRefs) => {
    return outline.map(({ index, title }) => {
      const isLast = typeof outline[index + 1] === 'undefined';
      let nextOrPrev;
      if (isLast) {
        const refIndex = index === 0 ? 0 : index - 1;
        nextOrPrev = refs[refIndex];
      } else {
        nextOrPrev = refs[index + 1];
      }

      return this.createOutlineItem(
        pdfDoc,
        title,
        outlinesDictRef,
        nextOrPrev,
        pageRefs[index],
        isLast
      );
    });
  };

  save = async ({ file }, outline) => {
    if (!outline) {
      outline = await this.getCurrentOutline(file);
    }

    const pdfDoc = await PDFDocument.load(file.data);

    if (outline.length === 0) {
      return await pdfDoc.save();
    }

    const pageRefs = this.getPageRefs(pdfDoc);
    const outlinesDictRef = pdfDoc.context.nextRef();
    const refs = outline.map(() => pdfDoc.context.nextRef());
    const outlineItems = this.createOutlineItems(outline, refs, pdfDoc, outlinesDictRef, pageRefs);

    const outlinesDictMap = new Map();
    outlinesDictMap.set(PDFName.Type, PDFName.of("Outlines"));
    outlinesDictMap.set(PDFName.of("First"), refs[0]);
    outlinesDictMap.set(PDFName.of("Last"), refs[refs.length - 1]);
    outlinesDictMap.set(PDFName.of("Count"), PDFNumber.of(refs.length));

    pdfDoc.catalog.set(PDFName.of("Outlines"), outlinesDictRef);
    const outlinesDict = PDFDict.fromMapWithContext(outlinesDictMap, pdfDoc.context);
    pdfDoc.context.assign(outlinesDictRef, outlinesDict);

    refs.forEach((item, index) => {
      pdfDoc.context.assign(refs[index], outlineItems[index]);
    });

    return await pdfDoc.save();
  };

  addOutlineItem = async ({ file, item }) => {
    const outline = await this.normalizeNewOutline({ file, item });

    return this.save({ file }, outline);
  };

  prepareDownload = async ({ file }) => {
    const outline = await this.getCurrentOutline(file);

    const inputPdf = await PDFDocument.load(file.data);
    const outputPdf = await PDFDocument.create();
    const copiedPages = await outputPdf.copyPages(
      inputPdf,
      inputPdf.getPageIndices(),
    );

    copiedPages.forEach((page) => {
      outputPdf.addPage(page);
    });

    let newFile = file;
    newFile.data = await outputPdf.save();
    return this.save({ file: newFile }, outline);
  };
}
