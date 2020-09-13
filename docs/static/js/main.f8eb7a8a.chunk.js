(this["webpackJsonppdf-editor"]=this["webpackJsonppdf-editor"]||[]).push([[0],{107:function(e,a,t){e.exports=t(180)},112:function(e,a,t){},115:function(e,a,t){},138:function(e,a){},139:function(e,a){},140:function(e,a){},141:function(e,a){},142:function(e,a){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(43),i=t.n(c),o=t(13),l=t.n(o),u=t(33),s=t(51),m=t(52),d=t(30),f=t(55),g=t(54),p=t(46),v=t(53),h=t(66),b=(t(112),function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement(h.a,{bg:"primary",variant:"dark"},r.a.createElement(h.a.Brand,{href:"#home"},"Lean PDF Editor")))}),P=(t(115),t(57)),E=(t(166),t(167),t(38)),N=(t(168),t(106)),x=t(21),k=function(e){var a=e.pageNumber,t=e.numPages,n=e.goToPreviousPage,c=e.goToNextPage,i=r.a.createElement("span",null,"Page ",a||(t?1:"--")," of ",t||"--");return r.a.createElement("div",{className:"Pagination"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(E.a,{variant:"info",disabled:a<=1,className:"float-left",onClick:n},"Previous"),r.a.createElement(x.a,null,r.a.createElement(N.a,{className:"ProgressBar",variant:"info",now:a/t*100}),i),r.a.createElement("div",null),r.a.createElement(E.a,{variant:"info",disabled:a>=t,onClick:c},"Next"))))},y=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onDocumentLoadSuccess=function(e){var a=e.numPages;n.setState({numPages:a})},n.goToPreviousPage=n.goToPreviousPage.bind(Object(d.a)(n)),n.goToNextPage=n.goToNextPage.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"onItemClick",value:function(e){var a=e.pageNumber;this.setState({pageNumber:a})}},{key:"goToPreviousPage",value:function(){var e=this.props.file.pageNumber-1;this.props.onViewUpdated({pageNumber:e})}},{key:"goToNextPage",value:function(){var e=this.props.file.pageNumber+1;this.props.onViewUpdated({pageNumber:e})}},{key:"render",value:function(){var e,a=this.props.file,t=a.numPages,n=a.pageNumber,c=a.data;return e=c instanceof Uint8Array?c.buffer:c,r.a.createElement("div",null,r.a.createElement(k,{pageNumber:n,numPages:t,goToNextPage:this.goToNextPage,goToPreviousPage:this.goToPreviousPage}),r.a.createElement("div",{className:"PDFRenderer__container__document"},r.a.createElement(P.Document,{file:e,onLoadSuccess:this.onDocumentLoadSuccess},r.a.createElement(P.Outline,{onItemClick:this.onItemClick}),r.a.createElement(P.Page,{key:"page_".concat(n),pageNumber:n}))))}}]),t}(n.Component),j=t(41),O=t(89),w=t.n(O),D=(t(169),t(40)),S=function(e){var a=e.file,t=e.onPagesRemoval,c=Object(n.useState)(!1),i=Object(j.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)(1),d=Object(j.a)(m,2),f=d[0],g=d[1],p=Object(n.useState)(1),h=Object(j.a)(p,2),b=h[0],P=h[1],N=Object(n.useState)(!1),k=Object(j.a)(N,2),y=k[0],O=k[1],w=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=a.currentTarget,r=!0===n.checkValidity(),s(!0),!r){e.next=10;break}return O(!0),c={startIndex:Number(f)-1,endIndex:Number(b)-1},e.next=9,t(c);case 9:O(!1);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(D.a,{noValidate:!0,validated:o,onSubmit:w},r.a.createElement("h5",null,"Remove pages"),r.a.createElement(v.a,null,r.a.createElement(x.a,null,r.a.createElement(D.a.Control,{type:"number",min:"1",max:a.numPages,placeholder:"Page start",value:f,onChange:function(e){var a=e.target;g(a.value)},required:!0})),r.a.createElement(x.a,null,r.a.createElement(D.a.Control,{type:"number",min:f,max:a.numPages,value:b,onChange:function(e){var a=e.target;P(a.value)},placeholder:"Page end",required:!0})),r.a.createElement(E.a,{variant:"warning",type:"submit",disabled:y},y?"Processing...":"Remove")))},C=t(39),F=function(e){var a=e.file,t=e.onPagesRemoval,c=Object(n.useState)(!1),i=Object(j.a)(c,2),o=i[0],s=i[1],m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,c,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),n=a.data,r=a.name,e.next=4,C.PDFDocument.load(n);case 4:return c=e.sent,e.next=7,C.PDFDocument.create();case 7:return i=e.sent,e.next=10,i.copyPages(c,c.getPageIndices());case 10:return e.sent.forEach((function(e){i.addPage(e)})),e.next=14,i.save();case 14:o=e.sent,w()(o,r,"application/pdf"),s(!1);case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Editor sticky-top"},r.a.createElement("h2",null,"Editor"),r.a.createElement("hr",null),r.a.createElement(S,{file:a,onPagesRemoval:t}),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"primary",onClick:m,disabled:o},o?"Processing...":"Save"))},T=(t(179),function(e){var a=e.file,t=e.onFileAttached,n=a?a.name:"";return r.a.createElement("div",{className:"File"},r.a.createElement("h2",null,"File"),r.a.createElement(D.a,null,r.a.createElement(D.a.File,{label:n,custom:!0,onChange:t})))}),R=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={file:{name:"./sample.pdf",data:null,numPages:null,pageNumber:1}},n.handleFileAttached=n.handleFileAttached.bind(Object(d.a)(n)),n.handlePagesRemoval=n.handlePagesRemoval.bind(Object(d.a)(n)),n.handleViewUpdated=n.handleViewUpdated.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var a,t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.file.name,e.next=3,fetch(a).then((function(e){return e.arrayBuffer()}));case 3:return t=e.sent,e.next=6,C.PDFDocument.load(t);case 6:n=e.sent,r=n.getPageCount(),this.setState({file:{name:a,data:t,numPages:r,pageNumber:1}});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleFileAttached",value:function(){var e=Object(u.a)(l.a.mark((function e(a){var t,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.files[0],n=t.name,e.next=4,t.arrayBuffer();case 4:return r=e.sent,e.next=7,C.PDFDocument.load(r);case 7:c=e.sent,i=c.getPageCount(),1,this.setState({file:{name:n,data:r,pageNumber:1,numPages:i}});case 11:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handlePagesRemoval",value:function(){var e=Object(u.a)(l.a.mark((function e(a){var t,n,r,c,i,o,u,s,m,d,f,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.startIndex,n=a.endIndex,r=this.state.file,c=r.name,i=r.data,o=r.pageNumber,e.next=4,C.PDFDocument.load(i);case 4:for(u=e.sent,s=t,m=n;s<=m;)u.removePage(m),m--;return e.next=10,u.save();case 10:d=e.sent,f=u.getPageCount(),g=Math.min(f,o),this.setState({file:{name:c,data:d,pageNumber:g,numPages:f}});case 14:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleViewUpdated",value:function(e){var a=e.pageNumber,t=this.state.file;t.pageNumber=a,this.setState({file:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(p.a,{fluid:!0},r.a.createElement(v.a,null,r.a.createElement(x.a,null,r.a.createElement(p.a,{fluid:!0,className:"sticky-top"},r.a.createElement(T,{file:this.state.file,onFileAttached:this.handleFileAttached}),r.a.createElement(F,{file:this.state.file,onPagesRemoval:this.handlePagesRemoval}))),r.a.createElement(x.a,null,r.a.createElement(y,{file:this.state.file,onViewUpdated:this.handleViewUpdated})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.f8eb7a8a.chunk.js.map