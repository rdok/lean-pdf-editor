(this["webpackJsonppdf-editor"]=this["webpackJsonppdf-editor"]||[]).push([[0],{107:function(e,a,t){e.exports=t(180)},112:function(e,a,t){},115:function(e,a,t){},138:function(e,a){},139:function(e,a){},140:function(e,a){},141:function(e,a){},142:function(e,a){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),i=t(41),l=t.n(i),o=t(13),c=t.n(o),u=t(33),s=t(49),m=t(50),f=t(30),d=t(53),h=t(52),g=t(44),v=t(51),p=t(65),b=(t(112),function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement(p.a,{bg:"primary",variant:"dark"},r.a.createElement(p.a.Brand,{href:"#home"},"Lean PDF Editor")))}),E=(t(115),t(55)),P=(t(166),t(167),t(38)),N=(t(168),t(106)),k=t(21),y=function(e){var a=e.pageNumber,t=e.numPages,n=e.goToPreviousPage,i=e.goToNextPage,l=r.a.createElement("span",null,"Page ",a||(t?1:"--")," of ",t||"--");return r.a.createElement("div",{className:"Pagination"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(P.a,{variant:"info",disabled:a<=1,className:"float-left",onClick:n},"Previous"),r.a.createElement(k.a,null,r.a.createElement(N.a,{className:"ProgressBar",variant:"info",now:a/t*100,label:l})),r.a.createElement("div",null),r.a.createElement(P.a,{variant:"info",disabled:a>=t,onClick:i},"Next"))))},j=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={numPages:null,pageNumber:1},n.onFileChange=function(e){},n.onDocumentLoadSuccess=function(e){var a=e.numPages;n.setState({numPages:a})},n.goToPreviousPage=n.goToPreviousPage.bind(Object(f.a)(n)),n.goToNextPage=n.goToNextPage.bind(Object(f.a)(n)),n}return Object(m.a)(t,[{key:"onItemClick",value:function(e){var a=e.pageNumber;this.setState({pageNumber:a})}},{key:"goToPreviousPage",value:function(){var e=this.state.pageNumber-1;this.setState({pageNumber:e})}},{key:"goToNextPage",value:function(){var e=this.state.pageNumber+1;this.setState({pageNumber:e})}},{key:"render",value:function(){var e=this.state,a=e.numPages,t=e.pageNumber,n=this.props.file,i=null;return i=n.data instanceof Uint8Array?n.data.buffer:n.data,r.a.createElement("div",null,r.a.createElement(y,{pageNumber:t,numPages:a,goToNextPage:this.goToNextPage,goToPreviousPage:this.goToPreviousPage}),r.a.createElement("div",{className:"PDFRenderer__container__document"},r.a.createElement(E.Document,{file:i,onLoadSuccess:this.onDocumentLoadSuccess},r.a.createElement(E.Outline,{onItemClick:this.onItemClick}),r.a.createElement(E.Page,{key:"page_".concat(t),pageNumber:t}))))}}]),t}(n.Component),O=t(88),w=t.n(O),x=(t(169),t(56)),F=t(39),C=t(89),D=function(e){var a=e.file,t=e.onFileModified,i=(e.pdfDoc,e.onPdfDocChange,Object(n.useState)(!1)),l=Object(x.a)(i,2),o=l[0],s=l[1],m=Object(n.useState)(0),f=Object(x.a)(m,2),d=f[0],h=f[1],g=Object(n.useState)(0),p=Object(x.a)(g,2),b=p[0],E=p[1],N=function(){var e=Object(u.a)(c.a.mark((function e(n){var r,i,l,o,u,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=n.currentTarget,i=!0===r.checkValidity(),s(!0),!i){e.next=17;break}return e.next=7,C.PDFDocument.load(a.data);case 7:l=e.sent,console.log("pdfDoc loaded content"),o=Number(d),u=Number(b);do{console.log("removing index",u),l.removePage(u),u--}while(o<u);return console.log("saving to base64"),e.next=15,l.save();case 15:m=e.sent,t({data:m,totalPages:l.getPageCount()});case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(F.a,{noValidate:!0,validated:o,onSubmit:N},r.a.createElement("h5",null,"Remove pages"),r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(F.a.Control,{type:"number",min:"0",placeholder:"Page start",value:d,onChange:function(e){var a=e.target;h(a.value)},required:!0})),r.a.createElement(k.a,null,r.a.createElement(F.a.Control,{type:"number",min:"0",value:b,onChange:function(e){var a=e.target;E(a.value)},placeholder:"Page end",required:!0})),r.a.createElement(P.a,{variant:"warning",type:"submit"},"Remove")))},S=function(e){var a=e.file,t=e.onFileModified,n=e.pdfDoc,i=(e.onPdfDocChange,e.filename),l=function(){var e=Object(u.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.save();case 2:t=e.sent,w()(t,i,"application/pdf");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Editor sticky-top"},r.a.createElement("h2",null,"Editor"),r.a.createElement("hr",null),r.a.createElement(D,{file:a,onFileModified:t}),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(P.a,{variant:"primary",onClick:l},"Save"))},T=(t(179),function(e){var a=e.file,t=e.onFileAttached,n=a?a.name:"";return r.a.createElement("div",{className:"File"},r.a.createElement("h2",null,"File"),r.a.createElement(F.a,null,r.a.createElement(F.a.File,{label:n,custom:!0,onChange:t})))}),M=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={file:{name:"./sample.pdf",data:null},pageNumber:null,pdf:null,pdfDoc:null},n.handlePdfDocChange=n.handlePdfDocChange.bind(Object(f.a)(n)),n.handleFileAttached=n.handleFileAttached.bind(Object(f.a)(n)),n.handleFileModified=n.handleFileModified.bind(Object(f.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.file.name,e.next=3,fetch(a).then((function(e){return e.arrayBuffer()}));case 3:t=e.sent,this.setState({file:{name:a,data:t}});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handlePdfDocChange",value:function(){var e=Object(u.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleFileAttached",value:function(){var e=Object(u.a)(c.a.mark((function e(a){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.files[0],n=t.name,e.next=4,t.arrayBuffer();case 4:r=e.sent,this.setState({file:{name:n,data:r}});case 6:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleFileModified",value:function(e){var a=e.data,t=e.totalPages;console.log(a);var n=this.state.file.name,r=Math.min(t,this.state.pageNumber);this.setState({file:{name:n,data:a},pageNumber:r})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(g.a,{fluid:!0},r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(g.a,{fluid:!0,className:"sticky-top"},r.a.createElement(T,{file:this.state.file,onFileAttached:this.handleFileAttached}),r.a.createElement(S,{file:this.state.file,onFileModified:this.handleFileModified}))),r.a.createElement(k.a,null,r.a.createElement(j,{file:this.state.file,pageNumber:this.state.pageNumber})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.ee1be139.chunk.js.map