(this["webpackJsonppdf-editor"]=this["webpackJsonppdf-editor"]||[]).push([[0],{106:function(e,t,a){e.exports=a(178)},111:function(e,t,a){},122:function(e,t,a){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},174:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(39),o=a.n(c),u=a(13),i=a.n(u),l=a(31),s=a(47),f=a(48),m=a(42),d=a(51),h=a(50),p=a(65),v=a(49),g=a(66),E=(a(111),function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement(g.a,{bg:"primary",variant:"dark"},r.a.createElement(g.a.Brand,{href:"#home"},"Lean PDF Editor")))}),b=a(63),P=(a(122),a(64)),D=(a(173),a(174),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={numPages:e.props.numPages},e.onFileChange=function(t){e.setState({file:t.target.files[0]})},e.onDocumentLoadSuccess=function(t){var a=t.numPages;e.setState({numPages:a})},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.numPages;return r.a.createElement("div",{className:"PDFRenderer__container__document"},r.a.createElement(P.Document,{file:this.props.pdf,onLoadSuccess:this.onDocumentLoadSuccess},Array.from(new Array(e),(function(e,t){return r.a.createElement(P.Page,{key:"page_".concat(t+1),pageNumber:t+1})}))))}}]),a}(n.Component)),y=a(32),C=a(52),w=a(105),j=a.n(w),O=(a(175),a(54)),k=a(37),F=function(e){var t=e.pdfDoc,a=e.onPdfDocChange,c=Object(n.useState)(!1),o=Object(O.a)(c,2),u=o[0],s=o[1],f=Object(n.useState)(1),m=Object(O.a)(f,2),d=m[0],h=m[1],p=Object(n.useState)(1),g=Object(O.a)(p,2),E=g[0],b=g[1],P=function(){var e=Object(l.a)(i.a.mark((function e(n){var r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=n.currentTarget,c=!0===r.checkValidity(),s(!0),c){o=d-1;do{t.removePage(o),o++}while(d<E);a(t)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(k.a,{noValidate:!0,validated:u,onSubmit:P},r.a.createElement("h5",null,"Remove pages"),r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a.Control,{type:"number",min:"1",placeholder:"Page start",value:d,onChange:function(e){var t=e.target;h(t.value)},required:!0})),r.a.createElement(y.a,null,r.a.createElement(k.a.Control,{type:"number",min:"1",value:E,onChange:function(e){var t=e.target;b(t.value)},placeholder:"Page end",required:!0})),r.a.createElement(C.a,{variant:"warning",type:"submit"},"Remove")))},x=function(e){var t=e.pdfDoc,a=e.onPdfDocChange,n=e.filename,c=function(){var e=Object(l.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.save();case 2:r=e.sent,j()(r,n,"application/pdf");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Editor sticky-top"},r.a.createElement("h2",null,"Editor"),r.a.createElement("hr",null),r.a.createElement(F,{pdfDoc:t,onPdfDocChange:a}),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(C.a,{variant:"primary",onClick:c},"Save"))},S=(a(177),function(e){var t=e.filename,a=e.onFileChanged;return r.a.createElement("div",{className:"File"},r.a.createElement("h2",null,"File"),r.a.createElement(k.a,null,r.a.createElement(k.a.File,{label:t,custom:!0,onChange:a})))}),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={filename:"./sample.pdf",pdf:null,pdfDoc:null},n.handlePdfDocChange=n.handlePdfDocChange.bind(Object(m.a)(n)),n.handleFileChanged=n.handleFileChanged.bind(Object(m.a)(n)),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.filename,e.next=3,fetch(t).then((function(e){return e.arrayBuffer()}));case 3:return a=e.sent,e.next=6,b.PDFDocument.load(a);case 6:return n=e.sent,e.next=9,n.saveAsBase64({dataUri:!0});case 9:r=e.sent,c=n.getPageCount(),this.setState({pdfDoc:n,pdf:r,numPages:c});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handlePdfDocChange",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.saveAsBase64({dataUri:!0});case 2:a=e.sent,n=t.getPageCount(),this.setState({pdfDoc:t,pdf:a,numPages:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleFileChanged",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],n=a.name,e.next=4,a.arrayBuffer();case 4:return r=e.sent,e.next=7,b.PDFDocument.load(r);case 7:return c=e.sent,e.next=10,c.saveAsBase64({dataUri:!0});case 10:o=e.sent,u=c.getPageCount(),this.setState({pdfDoc:c,pdf:o,numPages:u,filename:n});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(p.a,{fluid:!0},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(p.a,{fluid:!0},r.a.createElement(S,{filename:this.state.filename,onFileChanged:this.handleFileChanged}),r.a.createElement(x,{pdfDoc:this.state.pdfDoc,onPdfDocChange:this.handlePdfDocChange,filename:this.state.filename}))),r.a.createElement(y.a,null,r.a.createElement(D,{pdf:this.state.pdf,numPages:this.state.numPages})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.bd411b19.chunk.js.map