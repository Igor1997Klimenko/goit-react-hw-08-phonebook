"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{3594:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(885),s=n(2791),r={blockform:"ContactForm_blockform__J-oij",LabelForm:"ContactForm_LabelForm__0CPEA",NamesForm:"ContactForm_NamesForm__CIAg1",ButtonsContact:"ContactForm_ButtonsContact__NHo-C",InputForm:"ContactForm_InputForm__IUXia",ErrorName:"ContactForm_ErrorName__iB5GR"},o=n(5273),c=n(5582),i=n(4039),u=n(6140),l=n(8380),m=n(6151),d=n(184),_=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],_=t[1],f=(0,s.useState)(""),h=(0,a.Z)(f,2),p=h[0],x=h[1],C=(0,s.useState)(!1),g=(0,a.Z)(C,2),b=g[0],j=g[1],v=(0,s.useState)(!1),Z=(0,a.Z)(v,2),N=Z[0],I=Z[1],F=(0,s.useState)("fill in the fields"),k=(0,a.Z)(F,2),P=k[0],L=k[1],y=(0,s.useState)("fill in the fields"),w=(0,a.Z)(y,2),E=w[0],B=w[1],S=(0,c.wY)().data,T=(0,c.Tn)(),A=(0,a.Z)(T,2),z=A[0],R=A[1].isLoading,D=(0,s.useState)(!1),H=(0,a.Z)(D,2),W=H[0],U=H[1];(0,s.useEffect)((function(){U(!P&&!E)}),[P,E]);var q=function(e){switch(e.target.name){case"name":j(!0);break;case"number":I(!0);break;default:return}},G=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":_(a),e.target.value.length<3?(L("invalid name"),a||L("fill in the fields")):L("");break;case"number":x(a),a.length<6||a.length>12?(B("The number must be longer than 6 and less than 12"),a||B("fill in the fields")):B("");break;default:return}},J=function(){return S.find((function(e){return e.name.toUpperCase()===n.toUpperCase()||e.number===p}))};return(0,d.jsxs)("form",{noValidate:!0,className:r.forma,onSubmit:function(e){e.preventDefault(),J()?u.ZP.success("".concat(n," is already in contacts"),{style:{border:"1px solid red",padding:"16px",color:"red"},iconTheme:{primary:"red",secondary:"#FFFAEE"}}):(z({name:n,number:p,id:(0,o.nanoid)()}),_(""),x(""),u.ZP.success("Contact added!"))},children:[(0,d.jsxs)("div",{className:r.blockform,children:[(0,d.jsx)(l.Z,{className:r.InputForm,id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:G,onBlur:function(e){return q(e)}}),P&&b&&(0,d.jsx)("div",{className:r.ErrorName,children:P}),(0,d.jsx)(l.Z,{className:r.InputForm,id:"outlined-basic",label:"Telephone",variant:"outlined",type:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:p,onChange:G,onBlur:function(e){return q(e)}}),E&&N&&(0,d.jsx)("div",{className:r.ErrorName,children:E})]}),(0,d.jsx)(m.Z,{disabled:!W,type:"submit",variant:"outlined",children:R?(0,d.jsx)(i.W0,{color:"#00BFFF",height:20,width:20}):"Add contact"}),(0,d.jsx)(u.x7,{position:"top-center"})]})},f=(0,s.memo)(_),h="Filter_LabelForm__efyu5",p="Filter_NamesForm__FDEqS",x="Filter_InputName__GhJHk",C=n(806),g=n(5048),b=n(7078),j=function(){var e=(0,g.I0)();return(0,d.jsxs)("label",{className:h,children:[(0,d.jsx)("span",{className:p,children:"Find contacts by name"}),(0,d.jsx)(b.Z,{className:x,color:"success",type:"text",name:"filter",placeholder:"filter contacts",onChange:function(t){e((0,C.pe)(t.currentTarget.value))}})]})},v=n(5861),Z=n(7757),N=n.n(Z),I="ContactListItem_ButtonsContact__T5E7W",F="ContactListItem_NumberContacts__cU46Z",k="ContactListItem_IconsDelete__HIems",P="ContactListItem_IconsRemove__Od-Ht",L="ContactListItem_EditButton__wgQA7",y="ContactListItem_EditIcon__ItWNL",w="ContactListItem_ButtonDone__gYeF+",E="ContactListItem_IconDone__rGg89",B="ContactListItem_DefaultInput__LRQwg",S="ContactListItem_DroupContent__c8dGF",T="ContactListItem_Backdroup__UBbsp",A="ContactListItem_InputModal__9smDe",z="ContactListItem_editModal__spZB5",R="ContactListItem_EditDelete__wl245",D=n(7247),H=n(9579),W=n(1286),U=(n(9323),n(1428)),q=n(9823),G=n(3400),J=n(1469),M=function(e){var t=e.id,n=e.name,r=e.number,o=(0,c._e)(),i=(0,a.Z)(o,1)[0],l=(0,c.zr)(),m=(0,a.Z)(l,2),_=m[0],f=m[1].isLoading,h=(0,s.useState)(null),p=(0,a.Z)(h,2),x=p[0],C=p[1],g=(0,s.useState)(n),b=(0,a.Z)(g,2),j=b[0],Z=b[1],M=(0,s.useState)(r),Y=(0,a.Z)(M,2),O=Y[0],Q=Y[1],V=(0,s.useState)(!1),X=(0,a.Z)(V,2),$=X[0],K=X[1],ee=(0,s.useState)(!1),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1];(0,s.useEffect)((function(){ae(!(!j||!O))}),[j,O]);var se=function(e){27===e.keyCode&&re()};(0,s.useEffect)((function(){return window.addEventListener("keydown",se),function(){window.removeEventListener("keydown",se)}}),[se]);var re=function(e){K(!$),C(e)},oe=function(){C(null)},ce=function(){var e=(0,v.Z)(N().mark((function e(t){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:u.ZP.error("Contact delete!");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,v.Z)(N().mark((function e(n){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),C(null),!j||!O){e.next=5;break}return e.next=5,i({id:t,name:j,number:O});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("span",{className:F,children:[n,": ",r]}),x?(0,d.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&oe()},className:T,children:(0,d.jsx)("form",{onSubmit:ie,children:(0,d.jsxs)("div",{className:S,children:[(0,d.jsxs)("div",{className:B,children:[(0,d.jsx)("input",{className:A,type:"text",value:j||"",onChange:function(e){return Z(e.target.value)}}),(0,d.jsx)("input",{className:A,type:"number",value:O||"",onChange:function(e){return Q(e.target.value)}})]}),(0,d.jsx)("button",{disabled:!ne,className:w,type:"submit",children:(0,d.jsx)(U.Z,{className:E})}),(0,d.jsx)("button",{type:"button",onClick:oe,className:z,children:(0,d.jsx)(q.Z,{})})]})})}):(0,d.jsxs)("div",{className:R,children:[(0,d.jsx)("button",{onClick:function(){return re(t)},className:L,type:"button",children:(0,d.jsx)(J.Z,{title:"Edit",children:(0,d.jsx)(G.Z,{size:"small",children:(0,d.jsx)(W.Z,{fontSize:"small",className:y})})})}),(0,d.jsx)("button",{className:I,type:"button",onClick:function(){return ce(t)},children:f?(0,d.jsx)(J.Z,{title:"Delete",children:(0,d.jsx)(G.Z,{size:"small",children:(0,d.jsx)(H.Z,{fontSize:"small",className:P})})}):(0,d.jsx)(J.Z,{title:"Delete",children:(0,d.jsx)(G.Z,{size:"small",children:(0,d.jsx)(D.Z,{fontSize:"small",className:k})})})})]})]})},Y="ContactList_ContactList__YHv65",O="ContactList_ItemContacts__3wyzz",Q=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))},V=function(){var e=(0,c.wY)().data,t=(0,g.v9)((function(e){return e.contacts.filter}));return(0,d.jsx)("ul",{className:Y,children:e&&Q(e,t).map((function(e){var t=e.id,n=e.name,a=e.number;return(0,d.jsx)("li",{className:O,children:(0,d.jsx)(M,{id:t,name:n,number:a})},t)}))})},X=n(4569),$=n.n(X),K=(0,o.createAction)("contacts/fetchTodosRequest"),ee=(0,o.createAction)("contacts/fetchTodosSuccess"),te=(0,o.createAction)("contacts/fetchTodosError"),ne={fetchContacts:function(){return function(){var e=(0,v.Z)(N().mark((function e(t){var n,a;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(K()),e.prev=1,e.next=4,$().get("/contacts");case 4:n=e.sent,a=n.data,t(ee(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(te(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},ae=ne,se=n(58),re=n(6057),oe=function(){var e=(0,g.I0)();return(0,s.useEffect)((function(){e(ae.fetchContacts())}),[e]),(0,d.jsxs)("div",{className:se.Z.Forms,children:[(0,d.jsxs)("h1",{className:se.Z.PhoneBook,children:[(0,d.jsx)(re.Z,{}),"Phonebook"]}),(0,d.jsx)(f,{}),(0,d.jsx)("h2",{className:se.Z.Contacts,children:"Contacts"}),(0,d.jsx)(j,{}),(0,d.jsx)(V,{})]})}},58:function(e,t){t.Z={HomePhone:"Pages_HomePhone__PuBZU",PersonWelcom:"Pages_PersonWelcom__kj6jA",Forms:"Pages_Forms__Zetjy",PhoneBook:"Pages_PhoneBook__SunJn",Contacts:"Pages_Contacts__6dFg4",FormRegister:"Pages_FormRegister__H0b0y",InputRegister:"Pages_InputRegister__6e1NZ",InputPosition:"Pages_InputPosition__XgTch",InputEidth:"Pages_InputEidth__UgHGW",RegisterText:"Pages_RegisterText__rWR6q",TextProject:"Pages_TextProject__NeVHf",BackLogin:"Pages_BackLogin__M+WI8",ButtRegis:"Pages_ButtRegis__6nkTt",ErrorType:"Pages_ErrorType__HOyOB"}}}]);
//# sourceMappingURL=197.d6aa475a.chunk.js.map