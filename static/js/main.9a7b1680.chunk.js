(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__3rWww",input:"ContactForm_input__2L3JO",label:"ContactForm_label__Zxd7v"}},20:function(t,e,n){t.exports={listItem:"ListItem_listItem__14SN-",name:"ListItem_name__3mTB4",number:"ListItem_number__2-pfB"}},21:function(t,e,n){t.exports={findContact:"Filter_findContact__1aBkP",findContactLabel:"Filter_findContactLabel__3Pytf",findContactInput:"Filter_findContactInput__T3Fvf"}},33:function(t,e,n){t.exports={container:"Container_container__2D_sF"}},36:function(t,e,n){t.exports={list:"ContactList_list__zajfy"}},37:function(t,e,n){t.exports={button:"Button_button__3e2Gu"}},39:function(t,e,n){t.exports={spinner:"Spinner_spinner__37-Hh"}},96:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),s=n(15),u=n(16),i=n(18),l=n(17),b=n(12),f=(n(45),n(33)),d=n.n(f),j=n(1),p=function(t){var e=t.children;return Object(j.jsx)("div",{className:d.a.container,children:e})},h=n(7),O=n(8),m=n.n(O),C=n(19),x=n(13),v=n.n(x),_=n(3),y={fetchContactRequest:Object(_.b)("contacts/fetchContactRequest"),fetchContactSuccess:Object(_.b)("contacts/fetchContactSuccess"),fetchContactError:Object(_.b)("contacts/fetchContactError"),addContactRequest:Object(_.b)("contacts/addContactRequest"),addContactSuccess:Object(_.b)("contacts/addContactSuccess"),addContactError:Object(_.b)("contacts/addContactError"),deleteContactRequest:Object(_.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(_.b)("contacts/deleteContactSuccess"),deleteContactError:Object(_.b)("contacts/deleteContactError"),filterContact:Object(_.b)("contacts/Filter")},S=y.fetchContactRequest,g=y.fetchContactSuccess,k=y.fetchContactError,N=y.addContactRequest,w=y.addContactSuccess,I=y.addContactError,L=y.deleteContactRequest,E=y.deleteContactSuccess,R=y.deleteContactError;v.a.defaults.baseURL="http://localhost:8080";var q=function(t,e){return function(){var n=Object(C.a)(m.a.mark((function n(c){var a,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(N()),n.prev=2,n.next=5,v.a.post("/contacts",a);case 5:r=n.sent,c(w(r.data)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c(I(n.t0));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(t){return n.apply(this,arguments)}}()},F=function(t){return function(){var e=Object(C.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:L()}),e.prev=1,e.next=4,v.a.delete("./contacts/".concat(t));case 4:n(E(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(R(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var t=Object(C.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(S()),t.prev=1,t.next=4,v.a.get("/contacts");case 4:n=t.sent,e(g(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(k(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},T=n(36),B=n.n(T),P=n(20),A=n.n(P),H=n(37),J=n.n(H),z=function(t){var e=t.onClick,n=t.text,c=t.type,a=void 0===c?"button":c;return Object(j.jsx)("button",{type:a,className:J.a.button,onClick:e,children:n})};z.defaultProps={onClick:function(){return null}};var M,G,U=z,W=function(t){var e=t.contacts,n=t.onDeleteContact;return e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(j.jsxs)("li",{className:A.a.listItem,children:[Object(j.jsxs)("p",{className:A.a.name,children:[c," "]}),Object(j.jsxs)("p",{className:A.a.number,children:[a," "]}),Object(j.jsx)(U,{text:"Delete",onClick:function(){return n(e)}})]},e)}))},Z=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:B.a.list,children:Object(j.jsx)(W,{contacts:e,onDeleteContact:n})})},K=n(14),Q=function(t){return t.contacts.items},V=function(t){return t.contacts.filter},X=Object(K.a)([Q,V],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),Y=Object(h.b)((function(t){return{contacts:X(t)}}),(function(t){return{onDeleteContact:function(e){return t(F(e))}}}))(Z),$=n(5),tt=n(11),et=n.n(tt),nt=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget.name;t.setState(Object($.a)({},n,e.currentTarget.value.trimLeft()))},t.handleSubmit=function(e){e.preventDefault();var n=t.props,c=n.contacts,a=n.addContact,r=t.state,o=r.name,s=r.number;if(!o||!s||!1===/^\d+/.test(s))return Object(b.b)("Please fill all fields in the correct format");c.find((function(t){return t.name===o}))?(Object(b.b)("".concat(o," is already in the contacts")),t.reset()):(a(o,s),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:et.a.form,children:[Object(j.jsxs)("label",{className:et.a.label,children:["Name",Object(j.jsx)("input",{className:et.a.input,name:"name",type:"text",value:e,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{className:et.a.label,children:["Number",Object(j.jsx)("input",{className:et.a.input,name:"number",type:"tel",value:n,onChange:this.handleInputChange})]}),Object(j.jsx)(U,{text:"Add contact",type:"submit"})]})]})}}]),n}(a.a.Component),ct=Object(h.b)((function(t){return{contacts:Q(t)}}),(function(t){return{addContact:function(e,n){return t(q(e,n))}}}))(nt),at=n(21),rt=n.n(at),ot=function(t){var e=t.filter,n=t.onHandleInputSearch;return Object(j.jsxs)("div",{className:rt.a.findContact,children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsxs)("label",{className:rt.a.findContactLabel,children:["Find contacts by name",Object(j.jsx)("input",{className:rt.a.findContactInput,name:"filter",type:"text",value:e,onChange:n})]})]})},st=Object(h.b)((function(t){return{filter:V(t)}}),(function(t){return{onHandleInputSearch:function(e){return t(y.filterContact(e.currentTarget.value))}}}))(ot),ut=(n(73),n(38)),it=n.n(ut),lt=n(39),bt=n.n(lt),ft=function(){return Object(j.jsx)("div",{className:bt.a.spinner,children:Object(j.jsx)(it.a,{type:"ThreeDots",color:"rgb(49, 105, 138)",height:100,width:100,timeout:3e3})})},dt=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)(ct,{}),Object(j.jsx)(st,{}),this.props.isLoading&&Object(j.jsx)(ft,{}),Object(j.jsx)(Y,{}),Object(j.jsx)(b.a,{})]})}}]),n}(a.a.Component),jt=Object(h.b)((function(t){return{isLoading:t.contacts.loading}}),(function(t){return{fetchContacts:function(){return t(D())}}}))(dt),pt=n(40),ht=n(4),Ot=y.fetchContactRequest,mt=y.fetchContactSuccess,Ct=y.fetchContactError,xt=y.addContactRequest,vt=y.addContactSuccess,_t=y.addContactError,yt=y.deleteContactRequest,St=y.deleteContactSuccess,gt=y.deleteContactError,kt=y.filterContact,Nt=Object(_.c)([],(M={},Object($.a)(M,mt,(function(t,e){return e.payload})),Object($.a)(M,vt,(function(t,e){return[e.payload].concat(Object(pt.a)(t))})),Object($.a)(M,St,(function(t,e){var n=e.payload;return t.filter((function(t){return n!==t.id}))})),M)),wt=Object(_.c)(!1,(G={},Object($.a)(G,Ot,(function(){return!0})),Object($.a)(G,mt,(function(){return!1})),Object($.a)(G,Ct,(function(){return!1})),Object($.a)(G,xt,(function(){return!0})),Object($.a)(G,vt,(function(){return!1})),Object($.a)(G,_t,(function(){return!1})),Object($.a)(G,yt,(function(){return!0})),Object($.a)(G,St,(function(){return!1})),Object($.a)(G,gt,(function(){return!1})),G)),It=Object(_.c)("",Object($.a)({},kt,(function(t,e){return e.payload}))),Lt=Object(ht.c)({items:Nt,filter:It,loading:wt}),Et=(n(92),n(9)),Rt={store:Object(_.a)({reducer:{contacts:Lt},middleware:Object(_.d)({serializableCheck:{ignoredActions:[Et.a,Et.f,Et.b,Et.c,Et.d,Et.e]}}),devTools:!1})};n(95);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h.a,{store:Rt.store,children:Object(j.jsx)(jt,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.9a7b1680.chunk.js.map